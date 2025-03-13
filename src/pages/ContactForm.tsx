import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import SPHALogo from '@/assets/spha-apps-logo.svg';

const ContactForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const preSelectedService = queryParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preSelectedService,
    message: ''
  });
  
  const [status, setStatus] = useState<{
    message: string;
    type: 'success' | 'error' | 'sending' | '';
  }>({
    message: '',
    type: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus({
      message: 'Sending message...',
      type: 'sending'
    });

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone_number: formData.phone,
        service_type: formData.service,
        message: formData.message
      };

      await emailjs.send(
        'service_ogfusvy',
        'template_uoq26em',
        templateParams,
        'ljlCfMvfp-UGXC5g9'
      );

      setStatus({
        message: 'Message sent successfully! We will contact you soon.',
        type: 'success'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        message: 'Failed to send message. Please try again later.',
        type: 'error'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-green to-green-300 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block rounded-full bg-white p-2 mb-4">
            <img src={SPHALogo} alt="SPHA Apps Logo" className="h-20 w-20" />
          </div>
          <h2 className="text-2xl font-bold">Contact Us</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-green focus:border-primary-green"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-green focus:border-primary-green"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-green focus:border-primary-green"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="service" className="block mb-2 font-semibold text-gray-700">Service Needed</label>
            <select 
              id="service" 
              name="service" 
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-green focus:border-primary-green"
            >
              <option value="">Select a service</option>
              <option value="PC Repair">PC Repair</option>
              <option value="Laptop Repair">Laptop Repair</option>
              <option value="Phone Repair">Phone Repair</option>
              <option value="Virus Removal">Virus Removal</option>
              <option value="Data Recovery">Data Recovery</option>
              <option value="Software Solutions">Software Solutions</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">Describe Your Problem</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-y focus:ring-primary-green focus:border-primary-green"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>

        {status.message && (
          <div 
            className={`mt-4 p-4 rounded-lg text-center ${
              status.type === 'success' 
                ? 'bg-primary-green text-gray-900' 
                : status.type === 'error' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-gray-100'
            }`}
          >
            {status.message}
          </div>
        )}
        
        <Link to="/" className="block mt-4 text-center font-semibold text-gray-700 hover:text-primary-green">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
