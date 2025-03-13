
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Laptop, Smartphone, Shield, Database, Code, Wifi, Server, HardDrive, Cpu } from 'lucide-react';

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const ServiceDetail = ({ title, description, features, icon }: ServiceDetailProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="list-disc pl-5 text-gray-700">
      {features.map((feature, index) => (
        <li key={index} className="mb-1">{feature}</li>
      ))}
    </ul>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      title: 'PC Repair',
      description: 'Expert diagnostics and repair services for desktop computers of all brands and models.',
      features: [
        'Hardware troubleshooting and replacement',
        'Operating system installation and repair',
        'Performance optimization',
        'Custom PC building'
      ],
      icon: <Monitor size={40} />
    },
    {
      title: 'Laptop Repair',
      description: 'Professional laptop repair and maintenance to extend the life of your device.',
      features: [
        'Screen replacement',
        'Keyboard and touchpad repair',
        'Battery replacement',
        'Cooling system maintenance'
      ],
      icon: <Laptop size={40} />
    },
    {
      title: 'Phone Repair',
      description: 'Specialized smartphone and tablet repair solutions for all major brands.',
      features: [
        'Screen replacement and repair',
        'Battery replacement',
        'Water damage recovery',
        'Software issues and updates'
      ],
      icon: <Smartphone size={40} />
    },
    {
      title: 'Virus Removal',
      description: 'Comprehensive malware and virus removal services to protect your digital assets.',
      features: [
        'Virus and malware detection and removal',
        'Security software installation',
        'Preventive measures setup',
        'Security best practices training'
      ],
      icon: <Shield size={40} />
    },
    {
      title: 'Data Recovery',
      description: 'Professional data recovery from all types of storage devices, even in severe damage cases.',
      features: [
        'Hard drive data recovery',
        'SSD data recovery',
        'Memory card and USB drive recovery',
        'RAID array recovery'
      ],
      icon: <Database size={40} />
    },
    {
      title: 'Software Solutions',
      description: 'Custom software development and troubleshooting to meet your specific needs.',
      features: [
        'Custom software development',
        'Application troubleshooting',
        'Software upgrades and migrations',
        'Legacy software support'
      ],
      icon: <Code size={40} />
    },
    {
      title: 'Network Setup',
      description: 'Complete networking solutions for homes and businesses.',
      features: [
        'WiFi network installation',
        'Network security setup',
        'Troubleshooting connectivity issues',
        'Network expansion and optimization'
      ],
      icon: <Wifi size={40} />
    },
    {
      title: 'Server Management',
      description: 'Professional server installation, configuration, and maintenance services.',
      features: [
        'Server setup and configuration',
        'Server maintenance and monitoring',
        'Backup solutions',
        'Server security implementation'
      ],
      icon: <Server size={40} />
    },
    {
      title: 'Storage Solutions',
      description: 'Comprehensive storage solutions for all your data needs.',
      features: [
        'Storage system design',
        'NAS configuration',
        'Cloud storage integration',
        'Backup and recovery planning'
      ],
      icon: <HardDrive size={40} />
    },
    {
      title: 'IT Consultation',
      description: 'Expert IT consultation to help you make informed technology decisions.',
      features: [
        'Technology needs assessment',
        'IT infrastructure planning',
        'Cost-effective solutions recommendations',
        'Digital transformation guidance'
      ],
      icon: <Cpu size={40} />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            SPHA Solutions offers a comprehensive range of IT services designed to meet all your technology needs.
            From repairs to custom solutions, our team of experts is ready to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceDetail 
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
