
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: 'url(https://i.postimg.cc/wvP7QYYW/10701730-19187761.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/80 to-primary-green/40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
