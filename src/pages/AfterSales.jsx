import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Settings, 
  BookOpen, 
  CalendarClock, 
  Headphones, 
  Activity, 
  Zap, 
  Stethoscope, 
  Cpu 
} from 'lucide-react';

const AfterSales = () => {
  const supportServices = [
    {
      title: "Installation & Commissioning",
      description: "Professional setup and calibration for optimal performance from day one.",
      icon: <Settings className="text-accent-cyan" size={32} />
    },
    {
      title: "Training & User Education",
      description: "Comprehensive training for your staff on safe and efficient equipment use.",
      icon: <BookOpen className="text-accent-cyan" size={32} />
    },
    {
      title: "Regular Maintenance Packages",
      description: "Tailored maintenance plans to ensure longevity and prevent downtime.",
      icon: <CalendarClock className="text-accent-cyan" size={32} />
    },
    {
      title: "Emergency Support & Troubleshooting",
      description: "24/7 technical support to resolve any issues quickly and minimize downtime.",
      icon: <Headphones className="text-accent-cyan" size={32} />
    }
  ];

  const teamRoles = [
    {
      role: "Medical Physicists",
      description: "Ensure precise calibration and operation of your radiotherapy equipment.",
      icon: <Activity size={24} />
    },
    {
      role: "Electrical Engineers",
      description: "Handle all electrical components, ensuring safe and efficient operation.",
      icon: <Zap size={24} />
    },
    {
      role: "Biomedical Engineers",
      description: "Provide expert support for medical device functionality and repairs.",
      icon: <Stethoscope size={24} />
    },
    {
      role: "IT Engineers",
      description: "Maintain system integrations and ensure smooth operation of software and digital tools.",
      icon: <Cpu size={24} />
    }
  ];

  return (
    <div className="bg-white min-h-screen font-body">
      {/* 1. HERO */}
      <section className="bg-primary-navy text-white py-12 sm:py-16 md:py-20 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 font-heading leading-tight px-2">
            After-Sales Service Support
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/80 max-w-3xl mx-auto px-2">
            Comprehensive maintenance and technical support for Linac machines and medical equipment.
          </p>
          <nav className="flex justify-center items-center space-x-2 text-xs sm:text-sm font-body text-white/70">
            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-accent-cyan font-semibold">After-Sales Support</span>
          </nav>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-accent-cyan/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* 2. OVERVIEW TEXT */}
      <section className="py-12 sm:py-16 md:py-20 bg-light-gray border-b border-soft-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-base sm:text-lg md:text-xl text-dark-text/80 leading-relaxed font-body italic px-2">
            "At MediGenX, we offer top-tier after-sales service to ensure that your medical equipment performs optimally throughout its lifecycle. From installation to troubleshooting, our expert team is dedicated to providing seamless support."
          </p>
        </div>
      </section>

      {/* 3. SERVICES OFFERED */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-3 sm:mb-4 font-heading">Support Services</h2>
            <div className="w-12 sm:w-16 h-1 bg-accent-cyan mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {supportServices.map((service, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-xl border border-soft-border hover:border-accent-cyan/50 transition-all group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-light-gray rounded-lg flex items-center justify-center mb-4 sm:mb-6 text-accent-cyan group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-primary-navy mb-2 sm:mb-3 font-heading">{service.title}</h3>
                <p className="text-dark-text/60 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR EXPERT SERVICE TEAM */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary-navy rounded-2xl p-6 sm:p-8 md:p-10 lg:p-16 text-white">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-heading text-white">Our Expert Service Team</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-2">A multi-disciplinary team of professionals dedicated to your success.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
              {teamRoles.map((role, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-xl text-center hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-cyan text-white rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    {role.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 font-heading text-accent-cyan">{role.role}</h4>
                  <p className="text-white/70 text-xs leading-relaxed">{role.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm sm:text-base md:text-lg italic text-white/80 font-body px-2">
              "Together, they guarantee seamless after-sales service to keep your equipment performing at its best."
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-accent-cyan rounded-2xl p-6 sm:p-8 md:p-10 lg:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 font-heading px-2">
                Need technical support for your equipment?
              </h2>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-primary-navy text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-primary-navy transition-all"
              >
                Contact Our Support Team <ChevronRight size={20} />
              </Link>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfterSales;
