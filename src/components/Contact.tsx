
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_ogfusvy',
        'template_uoq26em',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'ljlCfMvfp-UGXC5g9'
      );
      
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-dark-blue text-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-primary text-lg font-semibold mb-2">CEO</h3>
              <p className="mb-1">Spha Khumalo</p>
              <div className="flex items-center mb-1">
                <Phone size={16} className="mr-2" />
                <span>+27 61 079 3813</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>v.khumalo@yahoo.com</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-primary text-lg font-semibold mb-2">Graphics Development</h3>
              <p className="mb-1">Sibusiso Ngwalase</p>
              <div className="flex items-center mb-1">
                <Phone size={16} className="mr-2" />
                <span>+27 84 0800 234</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>business@welovemzansi.co.za</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-primary text-lg font-semibold mb-2">Visit Us</h3>
              <p className="mb-2">Our main operational center is in Utrecht, South Africa. We welcome visits by appointment to observe our programs in action and discuss potential partnerships or contributions.</p>
              
              <h4 className="font-semibold mt-4 mb-1">Office Hours:</h4>
              <p className="mb-1">Monday to Friday: 8:00 AM - 4:00 PM</p>
              
              <h4 className="font-semibold mt-3 mb-1 text-primary">Community Programs:</h4>
              <p>Saturdays: 9:00 AM - 2:00 PM</p>
              
              <div className="mt-4 rounded-lg overflow-hidden">
                <img 
                  src="https://i.postimg.cc/02SJZjQ7/AI-IMAGE.webp" 
                  alt="SPHA Solutions AI" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Contact Form and Map */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-gray-600 rounded text-white"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white/5 border border-gray-600 rounded text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 bg-white/5 border border-gray-600 rounded text-white"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
            
            <div className="rounded-lg overflow-hidden h-64">
              <img 
                src="https://i.postimg.cc/g0shR705/ed4a58db-7fa9-4efc-abcf-a9cc8a4cfd85.png" 
                alt="Map of Utrecht, South Africa" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
