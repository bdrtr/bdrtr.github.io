import MainLayout from '../components/MainLayout';
import ContactForm from '@/src/components/Contact/Form';

export default function Contact() {
  return (
    <MainLayout>
      <section className="py-5 modern-section">
        <div className="container px-5">
          <div className="modern-card py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="modern-badge modern-badge-accent mb-3 d-inline-flex align-items-center justify-content-center" style={{
                width: '4rem', 
                height: '4rem',
                borderRadius: '12px'
              }}>
                <i className="bi bi-envelope fs-1"></i>
              </div>
              <h1 className="fw-bolder modern-text-gradient" style={{fontFamily: 'Poppins, sans-serif'}}>İletişim</h1>
              <p className="lead fw-normal mb-0" style={{fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: 'var(--dark-text-secondary)'}}>
                Sorularınız, önerileriniz veya işbirliği için benimle iletişime geçebilirsiniz
              </p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

