export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      success: false,
      error: 'Method not allowed.',
    });
  }

  try {
    const {
      fullName,
      phone,
      email,
      service,
      location,
      message,
    } = req.body || {};

    if (
      typeof fullName !== 'string' ||
      !fullName.trim() ||
      typeof phone !== 'string' ||
      !phone.trim() ||
      typeof service !== 'string' ||
      !service.trim()
    ) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name, phone number and service.',
      });
    }

    if (
      fullName.length > 150 ||
      phone.length > 30 ||
      (typeof email === 'string' && email.length > 254) ||
      (typeof service === 'string' && service.length > 200) ||
      (typeof location === 'string' && location.length > 200) ||
      (typeof message === 'string' && message.length > 5000)
    ) {
      return res.status(400).json({
        success: false,
        error: 'Some form fields are too long.',
      });
    }

    if (email && (
      typeof email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    )) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.',
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL;
    const sender = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error('Contact API environment variables are missing.');
      return res.status(500).json({
        success: false,
        error: 'Email service is not configured yet. Please contact us on WhatsApp.',
      });
    }

    const emailText = [
      'New enquiry from the SSS Associate website',
      '',
      `Name: ${fullName.trim()}`,
      `Phone: ${phone.trim()}`,
      `Email: ${typeof email === 'string' ? email.trim() : ''}`,
      `Service: ${service.trim()}`,
      `Location: ${typeof location === 'string' ? location.trim() : ''}`,
      '',
      'Message:',
      typeof message === 'string' ? message.trim() : '',
    ].join('\n');

    const emailResponse = await fetch(
      'https://api.resend.com/emails',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          subject: `New Website Enquiry - ${service.trim()}`,
          text: emailText,
        }),
      }
    );

    const result = await emailResponse.json();

    if (!emailResponse.ok || !result.id) {
      console.error('Resend rejected the email request:', {
        status: emailResponse.status,
        error: result.message || result.name || 'Email request failed',
      });

      return res.status(502).json({
        success: false,
        error: 'Unable to send your enquiry right now. Please try again or contact us on WhatsApp.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Your enquiry was accepted for email delivery.',
    });
  } catch (error) {
    console.error('Contact API error:', error);

    return res.status(500).json({
      success: false,
      error: 'Unable to process your enquiry right now. Please try again.',
    });
  }
}
