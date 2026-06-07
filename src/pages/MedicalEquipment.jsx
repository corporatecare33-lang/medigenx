import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Activity, Cpu, Scan, ShieldCheck, Microscope, Monitor } from 'lucide-react';

const MedicalEquipment = () => {
  const categories = [
    {
      title: "Radiotherapy Solutions",
      description: "Advanced linear accelerators and radiotherapy systems for precision cancer treatment.",
      icon: <Activity size={32} />,
      link: "/medical-equipment/linatech-venusx"
    },
    {
      title: "Robotic Medical Equipment",
      description: "Cutting-edge robotic systems for minimally invasive surgery and diagnostics.",
      icon: <Cpu size={32} />,
      link: "/medical-equipment/robotic-medical-equipment"
    },
    {
      title: "Radiology & Imaging",
      description: "State-of-the-art imaging systems for accurate and timely diagnosis.",
      icon: <Scan size={32} />,
      link: "/medical-equipment/radiology-imaging"
    },
    {
      title: "Patient Immobilization",
      description: "High-quality devices ensuring patient safety and precision during procedures.",
      icon: <ShieldCheck size={32} />,
      link: "/medical-equipment/immobilization-devices"
    },
    {
      title: "Histopathology Equipment",
      description: "Comprehensive laboratory solutions for cellular and tissue analysis.",
      icon: <Microscope size={32} />,
      link: "/medical-equipment/histopathology-equipment"
    },
    {
      title: "Monitoring Systems",
      description: "Advanced patient monitoring systems for critical care environments.",
      icon: <Monitor size={32} />,
      link: "/medical-equipment/other-medical-equipment"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-body">
      {/* 1. HERO */}
      <section className="bg-primary-navy text-white py-20 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">Medical Equipment</h1>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            World-class medical technology and precision-engineered solutions for modern healthcare providers.
          </p>
          <nav className="flex justify-center items-center space-x-2 text-sm font-body text-white/70">
            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-accent-cyan font-semibold">Medical Equipment</span>
          </nav>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-accent-cyan/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* 2. CATEGORIES GRID */}
      <section className="py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link key={i} to={cat.link} className="group">
                <div className="bg-white p-8 rounded-xl border border-soft-border hover:border-accent-cyan transition-all h-full flex flex-col">
                  <div className="mb-6 text-accent-cyan group-hover:scale-110 transition-transform origin-left">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-3 font-heading">{cat.title}</h3>
                  <p className="text-dark-text/60 mb-8 text-sm leading-relaxed flex-grow">{cat.description}</p>
                  <div className="flex items-center text-accent-cyan font-bold text-sm group-hover:gap-3 transition-all">
                    Explore Category <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy mb-6 font-heading">Looking for something specific?</h2>
            <p className="text-lg text-dark-text/60 mb-10">
              Our experts can help you find the right equipment for your facility's unique needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-primary-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-accent-cyan transition-all"
            >
              Contact Our Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalEquipment;
