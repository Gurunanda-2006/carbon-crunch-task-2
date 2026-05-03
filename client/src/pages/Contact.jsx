import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSent(true)
    }
  }

  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-hero">
        <div className="contact-hero__glow" />
        <h1 className="contact-hero__title">Get in Touch</h1>
        <p className="contact-hero__sub">Have a question or want to collaborate? We'd love to hear from you.</p>
      </section>

      <section className="contact-body">
        <div className="contact-body__glow" />
        <div className="contact-inner">
          {/* Info */}
          <div className="contact-info">
            <h2 className="contact-info__title">Let's create something remarkable</h2>
            <p className="contact-info__desc">
              Whether you're an artist looking to mint your first NFT, a collector searching for
              rare digital art, or a brand wanting to enter the Web3 space — we're here to help.
            </p>
            <div className="contact-info__items">
              <div className="contact-info__item">
                <div className="contact-info__icon">✉</div>
                <div>
                  <p className="contact-info__label">Email</p>
                  <p className="contact-info__value">hello@nftme.io</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon">📍</div>
                <div>
                  <p className="contact-info__label">Location</p>
                  <p className="contact-info__value">Hyderabad, India</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon">🐦</div>
                <div>
                  <p className="contact-info__label">Twitter</p>
                  <p className="contact-info__value">@nftme_io</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <div className="contact-success__icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jonathan Borba"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="contact-form__submit">
                  Send Message ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
