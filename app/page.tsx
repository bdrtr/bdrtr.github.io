import MainLayout from './components/MainLayout';
import Header from '@/src/components/headers/Header';
import About from '@/src/components/Main/About';
import Services from '@/src/components/Main/Services';
import Stats from '@/src/components/Main/Stats';
import Testimonials from '@/src/components/Main/Testimonials';
import CallToAction from '@/src/components/Main/CallToAction';

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
}

