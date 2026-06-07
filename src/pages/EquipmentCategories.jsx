import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const EquipmentPlaceholder = ({ title, description, ctaText }) => {
  return (
    <div className="bg-white">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-r from-primary-navy to-primary-navy/90 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">{title}</h1>
          <nav className="flex justify-center items-center space-x-2 text-sm md:text-base font-body text-white/70">
            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight size={16} />
            <Link to="/medical-equipment" className="hover:text-accent-cyan transition-colors">Medical Equipment</Link>
            <ChevronRight size={16} />
            <span className="text-accent-cyan font-semibold">{title}</span>
          </nav>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-2xl text-dark-text/80 mb-12 font-body leading-relaxed">
            {description}
          </p>
          <Link 
            to="/contact" 
            className="bg-primary-navy text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-accent-cyan transition-all shadow-lg inline-flex items-center gap-2"
          >
            {ctaText} <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export const ImmobilizationDevices = () => (
  <EquipmentPlaceholder 
    title="Immobilization Devices" 
    description="Our immobilization devices ensure patient safety and comfort during medical procedures, providing stable positioning for accurate treatment delivery." 
    ctaText="Browse Our Selection" 
  />
);

export const AlignmentSystems = () => (
  <EquipmentPlaceholder 
    title="Alignment Systems" 
    description="Advanced alignment systems to guarantee the accuracy and effectiveness of treatments through precise laser and optical guidance." 
    ctaText="Discover More" 
  />
);

export const RadiologyImaging = () => (
  <EquipmentPlaceholder 
    title="Radiology & Imaging" 
    description="Innovative radiology and imaging solutions for accurate diagnosis and treatment planning, featuring high-resolution digital technology." 
    ctaText="View Our Range" 
  />
);

export const RoboticEquipment = () => (
  <EquipmentPlaceholder 
    title="Robotic Medical Equipment" 
    description="Cutting-edge robotic medical equipment for minimally invasive surgeries and precise operations, enhancing surgeon capabilities." 
    ctaText="Learn More" 
  />
);

export const Histopathology = () => (
  <EquipmentPlaceholder 
    title="Histopathology Equipment" 
    description="Our histopathology systems provide accurate and reliable diagnostic results through advanced tissue processing and analysis." 
    ctaText="Explore Options" 
  />
);

export const OtherEquipment = () => (
  <EquipmentPlaceholder 
    title="Other Medical Equipment" 
    description="A broad range of medical devices to support healthcare facilities of all sizes, from specialized clinics to large hospitals." 
    ctaText="Browse More" 
  />
);
