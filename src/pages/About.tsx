
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">About SPHA Solutions</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              SPHA Solutions is a leading IT services provider based in Utrecht, South Africa. We specialize in providing comprehensive technology solutions to individuals, businesses, and community organizations.
            </p>
            
            <p className="mb-4">
              Founded with a vision to make technology accessible and reliable for everyone, we've built a reputation for excellent service, technical expertise, and community engagement.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to deliver high-quality IT services and solutions that empower our clients to achieve their goals through technology. We strive to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide reliable and affordable technology repairs</li>
              <li>Offer expert consultation on technology solutions</li>
              <li>Support local communities through technology education</li>
              <li>Stay at the forefront of technological advancements</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Our Team</h2>
            <p className="mb-4">
              Led by CEO Spha Khumalo, our team consists of skilled technicians, software developers, and customer service professionals who are passionate about technology and committed to delivering exceptional service.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Community Involvement</h2>
            <p className="mb-4">
              We believe in giving back to the community that supports us. Through our Saturday community programs, we offer:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Free basic computer skills workshops</li>
              <li>Discounted repairs for educational institutions</li>
              <li>Technology awareness sessions for seniors</li>
              <li>Career guidance in IT for young people</li>
            </ul>
            
            <p className="mt-8">
              We welcome you to visit our center in Utrecht to learn more about our services and how we can assist with your technology needs.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
