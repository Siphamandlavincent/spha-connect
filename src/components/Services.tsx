
import { Monitor, Laptop, Smartphone, Shield, Database, Code } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const servicesList = [
    {
      title: 'PC Repair',
      description: 'Expert diagnostics and repair for desktop computers',
      icon: <Monitor size={40} />
    },
    {
      title: 'Laptop Repair',
      description: 'Professional laptop repair and maintenance services',
      icon: <Laptop size={40} />
    },
    {
      title: 'Phone Repair',
      description: 'Specialized smartphone and tablet repair solutions',
      icon: <Smartphone size={40} />
    },
    {
      title: 'Virus Removal',
      description: 'Comprehensive malware and virus removal services',
      icon: <Shield size={40} />
    },
    {
      title: 'Data Recovery',
      description: 'Professional data recovery from all storage devices',
      icon: <Database size={40} />
    },
    {
      title: 'Software Solutions',
      description: 'Custom software development and troubleshooting',
      icon: <Code size={40} />
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
