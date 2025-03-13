
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-10 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-6">
            Have a question or need assistance? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
