import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Buraya form gönderme işlemleri yapılır (örneğin fetch ile bir API'ye gönder)
    // Şimdilik sahte başarı/başarısızlık durumu simüle ediyoruz:
    if (formData.name && formData.email && formData.phone && formData.message) {
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="name"
          type="text"
          placeholder="Enter your name..."
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Full name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="email"
          type="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email address</label>
      </div>

      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="phone"
          type="tel"
          placeholder="(123) 456-7890"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone number</label>
      </div>

      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="message"
          placeholder="Enter your message here..."
          value={formData.message}
          onChange={handleChange}
          required
          style={{ height: "150px" }}
        />
        <label htmlFor="message">Message</label>
      </div>

      {submitted && (
        <div className="text-center mb-3 text-success fw-bold">
          Form submission successful!
        </div>
      )}

      {error && (
        <div className="text-center mb-3 text-danger">
          Please fill in all required fields.
        </div>
      )}

      <div className="d-grid">
        <button className="btn btn-primary btn-lg" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
