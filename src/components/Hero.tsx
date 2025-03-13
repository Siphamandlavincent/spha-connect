
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-primary-green py-20 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Expert Tech Solutions
        </h1>
        <p className="text-white text-lg mb-8">
          Professional PC, Phone, and Laptop Repair Services
        </p>
        <Button className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-6 rounded-full text-base">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
