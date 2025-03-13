
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-blue text-center py-6 text-white/80 text-sm">
      <div className="container mx-auto px-4">
        © {currentYear} SPHA Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
