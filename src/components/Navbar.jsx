import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const medicalEquipmentItems = [
    { name: 'LinaTech VenusX Radiotherapy', path: '/medical-equipment/linatech-venusx' },
    { name: 'Immobilization Devices', path: '/medical-equipment/immobilization-devices' },
    { name: 'Alignment Systems', path: '/medical-equipment/alignment-systems' },
    { name: 'Radiology & Imaging', path: '/medical-equipment/radiology-imaging' },
    { name: 'Robotic Medical Equipment', path: '/medical-equipment/robotic-medical-equipment' },
    { name: 'Histopathology Equipment', path: '/medical-equipment/histopathology-equipment' },
    { name: 'Other Medical Equipment', path: '/medical-equipment/other-medical-equipment' }
  ];

  const servicesItems = [
    { name: 'Hospital Management Consultancy', path: '/services' },
    { name: 'Healthcare Management Services', path: '/services' },
    { name: 'IT & Software Management', path: '/services' },
    { name: 'Linac Bunker Construction', path: '/services' },
    { name: 'Training & Skill Development', path: '/services' },
    { name: 'Healthcare Feasibility Studies', path: '/services' }
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path) => `
    relative py-2 font-medium transition-colors
    ${isActive(path) ? 'text-accent-cyan' : 'text-dark-text hover:text-accent-cyan'}
  `;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary-navy text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-accent-cyan" /> +88 01787 866 609 / +88 01945 001 001</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-accent-cyan" /> info@medigenx.com</span>
          </div>
          <div className="font-body opacity-80 uppercase tracking-widest text-xs">Professional Medical Solutions</div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="MediGenX Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="text-2xl font-bold text-primary-navy font-heading hidden">
              Medi<span className="text-accent-cyan">GenX</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About Us</Link>

            {/* Medical Equipment Dropdown */}
            <div className="relative group">
              <button className={`flex items-center font-medium py-2 transition-colors ${isActive('/medical-equipment') ? 'text-accent-cyan' : 'text-dark-text hover:text-accent-cyan'}`}>
                Medical Equipment <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-b-xl border-t-4 border-accent-cyan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {medicalEquipmentItems.map((item, index) => (
                    <Link 
                      key={index} 
                      to={item.path} 
                      className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-accent-cyan text-dark-text transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`flex items-center font-medium py-2 transition-colors ${isActive('/services') ? 'text-accent-cyan' : 'text-dark-text hover:text-accent-cyan'}`}>
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-0 w-72 bg-white shadow-xl rounded-b-xl border-t-4 border-accent-cyan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {servicesItems.map((item, index) => (
                    <Link 
                      key={index} 
                      to={item.path} 
                      className="block px-4 py-2 text-sm hover:bg-light-gray hover:text-accent-cyan text-dark-text transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/consumables" className={navLinkClass('/consumables')}>Consumables</Link>
            <Link to="/after-sales" className={navLinkClass('/after-sales')}>After-Sales</Link>
            <Link to="/contact" className="bg-primary-navy text-white px-6 py-2 rounded-full hover:bg-accent-cyan transition-all font-bold">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-navy p-2 hover:bg-light-gray rounded-xl transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen pb-6' : 'max-h-0'}`}>
          <div className="space-y-1 border-t border-soft-border pt-4">
            <Link to="/" className="block px-4 py-3 rounded-xl hover:bg-light-gray font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block px-4 py-3 rounded-xl hover:bg-light-gray font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
            
            <button 
              onClick={() => toggleDropdown('medical')}
              className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-light-gray font-medium text-left"
            >
              Medical Equipment <ChevronDown size={16} className={activeDropdown === 'medical' ? 'rotate-180' : ''} />
            </button>
            {activeDropdown === 'medical' && (
              <div className="bg-light-gray/50 rounded-xl mx-2 py-2">
                {medicalEquipmentItems.map((item, index) => (
                  <Link key={index} to={item.path} className="block py-2 pl-6 pr-4 text-sm text-dark-text/70" onClick={() => setIsOpen(false)}>{item.name}</Link>
                ))}
              </div>
            )}

            <button 
              onClick={() => toggleDropdown('services')}
              className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-light-gray font-medium text-left"
            >
              Services <ChevronDown size={16} className={activeDropdown === 'services' ? 'rotate-180' : ''} />
            </button>
            {activeDropdown === 'services' && (
              <div className="bg-light-gray/50 rounded-xl mx-2 py-2">
                {servicesItems.map((item, index) => (
                  <Link key={index} to={item.path} className="block py-2 pl-6 pr-4 text-sm text-dark-text/70" onClick={() => setIsOpen(false)}>{item.name}</Link>
                ))}
              </div>
            )}

            <Link to="/consumables" className="block px-4 py-3 rounded-xl hover:bg-light-gray font-medium" onClick={() => setIsOpen(false)}>Consumables</Link>
            <Link to="/after-sales" className="block px-4 py-3 rounded-xl hover:bg-light-gray font-medium" onClick={() => setIsOpen(false)}>After-Sales</Link>
            <Link to="/contact" className="block px-4 py-4 mx-4 mt-4 bg-primary-navy text-white rounded-xl text-center font-bold" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
