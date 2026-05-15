const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use Gmail App Password
  },
})

exports.sendContact = async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' })
    }
    if (message.length > 2000) {
      return res.status(400).json({ error: 'Message too long.' })
    }

    // Send email to Adarsh
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e2e8f0; padding: 32px; border-radius: 16px; border: 1px solid #6366f130;">
          <h2 style="color: #6366f1; margin-bottom: 24px;">New Portfolio Contact</h2>
          <p><strong style="color: #8b5cf6;">From:</strong> ${name}</p>
          <p><strong style="color: #8b5cf6;">Email:</strong> ${email}</p>
          <p><strong style="color: #8b5cf6;">Message:</strong></p>
          <div style="background: #1a1a2e; padding: 16px; border-radius: 8px; border-left: 3px solid #6366f1; margin-top: 8px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="color: #475569; font-size: 12px; margin-top: 24px;">Sent from adarshpuri.dev portfolio</p>
        </div>
      `,
    }

    // Send auto-reply to sender
    const autoReply = {
      from: `"Adarsh Puri" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e2e8f0; padding: 32px; border-radius: 16px; border: 1px solid #6366f130;">
          <h2 style="color: #6366f1;">Hey ${name}! 👋</h2>
          <p>Thanks for getting in touch! I've received your message and will get back to you within 24–48 hours.</p>
          <p style="color: #94a3b8; margin-top: 16px;">— Adarsh Puri<br>Full Stack Developer</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReply)

    res.json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Contact error:', error)
    res.status(500).json({ error: 'Failed to send message. Try emailing directly.' })
  }
}
