'use client';

import { useState, memo, useCallback } from "react";

const ContactForm = memo(function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Memoize event handlers to prevent unnecessary re-renders
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Buraya form gönderme işlemleri yapılır (örneğin fetch ile bir API'ye gönder)
    // Şimdilik sahte başarı/başarısızlık durumu simüle ediyoruz:
    if (formData.name && formData.email && formData.phone && formData.message) {
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
    }
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          className="form-control modern-input"
          id="name"
          type="text"
          placeholder="Adınız..."
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="name" className="modern-label">Adınız</label>
      </div>

      <div className="form-floating mb-3">
        <input
          className="form-control modern-input"
          id="email"
          type="email"
          placeholder="email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email" className="modern-label">E-posta Adresi</label>
      </div>

      <div className="form-floating mb-3">
        <input
          className="form-control modern-input"
          id="phone"
          type="tel"
          placeholder="Telefon numaranız..."
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone" className="modern-label">Telefon Numarası</label>
      </div>

      <div className="form-floating mb-3">
        <textarea
          className="form-control modern-input"
          id="message"
          placeholder="Mesajınızı buraya yazın..."
          value={formData.message}
          onChange={handleChange}
          required
          style={{ height: "150px" }}
        />
        <label htmlFor="message" className="modern-label">Mesajınız</label>
      </div>

      {submitted && (
        <div className="text-center mb-3 fw-bold modern-text-gradient" style={{
          fontFamily: 'Poppins, sans-serif'
        }}>
          ✓ Mesajınız başarıyla gönderildi!
        </div>
      )}

      {error && (
        <div className="text-center mb-3" style={{
          color: 'var(--accent-tertiary)',
          fontFamily: 'Inter, sans-serif'
        }}>
          Lütfen tüm alanları doldurun.
        </div>
      )}

      <div className="d-grid">
        <button className="btn-modern btn-lg" type="submit">
          <i className="bi bi-send me-2"></i>
          Gönder
        </button>
      </div>
    </form>
  );
});

export default ContactForm;
