import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  ShieldCheck, 
  HeartHandshake, 
  Scale,
  ChevronRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Continuously pushing the boundaries of medical technology to deliver state-of-the-art solutions.",
      icon: <Lightbulb className="text-accent-cyan" size={32} />
    },
    {
      title: "Quality",
      description: "Commitment to providing the highest quality products that healthcare professionals can trust.",
      icon: <ShieldCheck className="text-accent-cyan" size={32} />
    },
    {
      title: "Customer-Centric",
      description: "Focused on understanding and meeting the unique needs of each client.",
      icon: <HeartHandshake className="text-accent-cyan" size={32} />
    },
    {
      title: "Integrity",
      description: "Upholding transparency, honesty, and ethical practices in all aspects of our business.",
      icon: <Scale className="text-accent-cyan" size={32} />
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-primary-navy text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-heading">About MediGenX</h1>
          <nav className="flex justify-center items-center space-x-2 text-xs sm:text-sm text-white/70">
            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight size={16} />
            <span className="text-accent-cyan font-semibold">About Us</span>
          </nav>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-br from-primary-navy to-accent-cyan p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-3xl shadow-xl relative overflow-hidden group">
            {/* Background decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-20 -translate-y-20 blur-xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-16 translate-y-16 blur-lg pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            
            <p className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-body text-center italic font-light drop-shadow-sm">
              "MediGenX stands at the forefront of medical innovation, delivering cutting-edge medical equipment and comprehensive solutions to healthcare providers around the globe. We are committed to transforming healthcare through the integration of advanced technology, exceptional customer service, and expert consulting."
            </p>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-primary-navy text-white p-6 sm:p-8 md:p-10 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-heading">Our Vision</h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-80">
                To be the global leader in medical equipment solutions, setting new standards of excellence in both product innovation and service delivery.
              </p>
            </div>
            <div className="bg-accent-cyan text-white p-6 sm:p-8 md:p-10 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-heading">Our Mission</h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                To empower healthcare providers with innovative technologies and advanced tools that enhance patient care, improve outcomes, and streamline operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-navy mb-3 sm:mb-4 font-heading">Our Core Values</h2>
            <div className="w-12 sm:w-16 h-1 bg-accent-cyan mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl border border-soft-border hover:border-accent-cyan transition-all">
                <div className="mb-4 sm:mb-6 bg-accent-cyan/10 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-primary-navy mb-2 font-heading">{value.title}</h3>
                <p className="text-dark-text/60 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm sm:text-base md:text-lg text-dark-text/70 mb-6 sm:mb-8 md:mb-10 font-body italic px-2">
            "At MediGenX, we pride ourselves on our professionalism, expertise, and unwavering commitment to excellence. Our team is dedicated to ensuring that our partners receive not only the best technology but also the support they need to succeed."
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-primary-navy text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-accent-cyan transition-all"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
