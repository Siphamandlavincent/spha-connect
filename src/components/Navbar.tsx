
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 md:px-12 lg:px-20 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://i.postimg.cc/3NrMbdj9/Spha-Apps-Logo.png" 
            alt="SPHA Solutions Logo" 
            className="h-10 w-10 mr-2 rounded-full" 
          />
          <span className="text-lg font-semibold">SPHA Solutions</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-primary">Services</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link to="/contact-form">Get Help</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 py-4 px-2 flex flex-col space-y-4">
          <Link to="/" className="text-gray-700 hover:text-primary py-2 px-4">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-primary py-2 px-4">Services</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary py-2 px-4">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary py-2 px-4">Contact</Link>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white w-full">
            <Link to="/contact-form">Get Help</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
