import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Medical Equipment', path: '/medical-equipment' },
    { name: 'Consumables', path: '/consumables' },
    { name: 'Services', path: '/services' },
    { name: 'After-Sales', path: '/after-sales' },
    { name: 'Contact', path: '/contact' }
  ];

  const equipmentLinks = [
    { name: 'LinaTech VenusX', path: '/medical-equipment/linatech-venusx' },
    { name: 'Robotic Equipment', path: '/medical-equipment/robotic-medical-equipment' },
    { name: 'Radiology & Imaging', path: '/medical-equipment/radiology-imaging' },
    { name: 'Immobilization Devices', path: '/medical-equipment/immobilization-devices' },
    { name: 'Histopathology', path: '/medical-equipment/histopathology-equipment' },
    { name: 'Other Equipment', path: '/medical-equipment/other-medical-equipment' }
  ];

  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block">
              <div className="text-2xl font-bold text-white font-heading">
                Medi<span className="text-accent-cyan">GenX</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              MediGenX is a global leader in delivering cutting-edge medical equipment and comprehensive healthcare solutions. We are dedicated to transforming healthcare through innovation and technical excellence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-white/60 hover:text-accent-cyan text-sm inline-block hover:translate-x-1.5 transition-all duration-300 transform">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medical Equipment */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading border-b border-white/10 pb-2">Equipment</h3>
            <ul className="space-y-3">
              {equipmentLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-white/60 hover:text-accent-cyan text-sm inline-block hover:translate-x-1.5 transition-all duration-300 transform">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 space-y-6">
            <h3 className="text-lg font-bold mb-6 font-heading border-b border-white/10 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-accent-cyan shrink-0" size={18} />
                <span className="text-white/60 text-sm">1281, Begum Rokeya Sarani, East Monipur, Mirpur, Dhaka - 1216</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-accent-cyan shrink-0" size={18} />
                <span className="text-white/60 text-sm">
                  +88 01787 866 609<br />
                  +88 01945 001 001
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-accent-cyan shrink-0" size={18} />
                <span className="text-white/60 text-sm">info@medigenx.com</span>
              </li>
            </ul>
            <div className="flex gap-3 pt-4">
              {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-2 rounded-lg hover:bg-accent-cyan hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs text-center">
          <p>
            © {currentYear} MediGenX Ltd. All Rights Reserved. | Design and Developed By{' '}
            <a 
              href="https://digitalwebars.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-accent-cyan transition-colors font-semibold"
            >
              Digital Webars
            </a>
          </p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
