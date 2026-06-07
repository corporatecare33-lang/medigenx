import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Cpu, 
  Scan, 
  ShieldCheck, 
  Building2, 
  Wrench, 
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Clock,
  HeartHandshake,
  Quote,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  GraduationCap,
  Sparkles,
  Send
} from 'lucide-react';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    facility: '',
    solution: 'Radiotherapy Equipment',
    message: ''
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryData({
        name: '',
        email: '',
        facility: '',
        solution: 'Radiotherapy Equipment',
        message: ''
      });
    }, 5000);
  };
  const featuredSolutions = [
    {
      title: "LinaTech VenusX Radiotherapy Machines",
      description: "Advanced linear accelerator for precision cancer treatment",
      icon: <Activity className="text-accent-cyan" size={32} />,
      link: "/medical-equipment/linatech-venusx"
    },
    {
      title: "Robotic Medical Equipment",
      description: "Cutting-edge robotic systems for minimally invasive surgery",
      icon: <Cpu className="text-accent-cyan" size={32} />,
      link: "/medical-equipment/robotic-medical-equipment"
    },
    {
      title: "Radiology & Imaging Systems",
      description: "Innovative imaging for accurate diagnosis",
      icon: <Scan className="text-accent-cyan" size={32} />,
      link: "/medical-equipment/radiology-imaging"
    },
    {
      title: "Immobilization Devices",
      description: "Patient safety and comfort during procedures",
      icon: <ShieldCheck className="text-accent-cyan" size={32} />,
      link: "/medical-equipment/immobilization-devices"
    },
    {
      title: "Hospital Management Consultancy",
      description: "Comprehensive healthcare consultancy services",
      icon: <Building2 className="text-accent-cyan" size={32} />,
      link: "/services"
    },
    {
      title: "After-Sales Support",
      description: "24/7 support to keep your equipment optimal",
      icon: <Wrench className="text-accent-cyan" size={32} />,
      link: "/after-sales"
    }
  ];

  const stats = [
    { label: "Global Partners", value: "500+", icon: <Users size={24} /> },
    { label: "Years Experience", value: "20+", icon: <Award size={24} /> },
    { label: "Installations", value: "1200+", icon: <CheckCircle2 size={24} /> },
    { label: "Support", value: "24/7", icon: <Clock size={24} /> }
  ];

  const testimonials = [
    {
      quote: "The installation of LinaTech VenusX radiotherapy systems completely changed our workflow. The precision is exceptional and the uptime is outstanding.",
      author: "Prof. Dr. M. Rahman",
      role: "Director of Oncology",
      facility: "National Cancer Care Center"
    },
    {
      quote: "MediGenX is our primary supplier for sterile drapes and surgical consumables. Their product stock is reliable and quality checks are always spot on.",
      author: "Dr. Sayed Ahmed",
      role: "Head of Procurement",
      facility: "Metropolitan Surgical Clinic"
    },
    {
      quote: "Their team supported us through every phase of Linac bunker planning and construction. They are truly experts in turnkey healthcare management.",
      author: "Lutfor Rahman",
      role: "Managing Director",
      facility: "Delta Medical Group"
    },
    {
      quote: "Excellent customer service and prompt delivery. Whenever we need replacement parts, their engineers respond within a couple of hours.",
      author: "Prof. Dr. Nusrat Jahan",
      role: "Chief Radiologist",
      facility: "Central Diagnostic Lab"
    },
    {
      quote: "The robotic medical equipment supplied by MediGenX has enhanced our surgical precision. Our surgeons are highly satisfied with the technology.",
      author: "Dr. Kamal Uddin",
      role: "Chief of Surgery",
      facility: "Apollo General Hospital"
    },
    {
      quote: "We have been sourcing our lab consumables from them for over three years. Exceptional consistency in product quality and packaging.",
      author: "Dr. Farhana Yasmin",
      role: "Lab Director",
      facility: "Popular Diagnostics"
    },
    {
      quote: "Their hospital consultancy services helped us optimize our workflow and reduce patient wait times by thirty percent. Highly recommended.",
      author: "Dr. Asif Iqbal",
      role: "COO",
      facility: "Square Health Services"
    },
    {
      quote: "Reliable, transparent, and professional. Their flexible payment options helped us acquire high-end imaging machines without financial strain.",
      author: "M. A. Hashem",
      role: "Chairman",
      facility: "Ibn Sina Trust"
    },
    {
      quote: "Their technical training sessions for our radiologists were extremely thorough. Our team is now fully certified and confident.",
      author: "Prof. Dr. Salma Begum",
      role: "Head of Radiology",
      facility: "Holy Family Hospital"
    },
    {
      quote: "MediGenX provides high-quality latex-free surgical gloves and PPE. Our infection control team has given them a five-star rating.",
      author: "Dr. Nabila Chowdhury",
      role: "Infection Control Officer",
      facility: "United Hospital"
    },
    {
      quote: "The immobilization devices from MediGenX are durable and highly adjustable, ensuring excellent patient comfort during radiology procedures.",
      author: "Dr. Tariqul Islam",
      role: "Chief Oncologist",
      facility: "Labaid Specialized Hospital"
    },
    {
      quote: "An outstanding partner for medical infrastructure. Their Linac bunker shielding design passed all nuclear safety checks on the first attempt.",
      author: "Engr. Rashedul Bari",
      role: "Medical Physicist",
      facility: "Cancer Research Institute"
    },
    {
      quote: "Their team is always available. The 24/7 technical hotline has resolved minor software glitches instantly, preventing any patient delay.",
      author: "Dr. Mehadi Hasan",
      role: "IT Director",
      facility: "Evercare Hospital"
    },
    {
      quote: "Prompt delivery and premium packaging for all diagnostics kits. They are our go-to partner for everyday lab operations.",
      author: "Dr. Tasnim Ara",
      role: "Pathology Head",
      facility: "LabAid Diagnostics"
    },
    {
      quote: "MediGenX stands out for its integrity and commitment. Sourcing medical consumables has never been this hassle-free.",
      author: "Dr. Zulfiqar Ali",
      role: "Purchase Manager",
      facility: "Ahsania Mission Cancer Hospital"
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-primary-navy text-white py-24 lg:py-36 relative overflow-hidden">
        {/* Animated background highlights */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-accent-cyan/5 rounded-full blur-2xl pointer-events-none animate-float-delayed" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight drop-shadow-sm">
              Innovating Healthcare with Advanced Medical Solutions
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/80 font-body leading-relaxed max-w-2xl font-light">
              Your trusted partner in cutting-edge radiotherapy technology, medical equipment, and strategic healthcare consultancy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/medical-equipment" 
                className="bg-accent-cyan text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:text-primary-navy transition-all hover-scale shadow-md hover:shadow-lg"
              >
                Explore Products
              </Link>
              <Link 
                to="/contact" 
                className="border border-white/30 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2 hover-scale"
              >
                Get a Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-cyan/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-16 bg-light-gray border-b border-soft-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left p-4 bg-white/40 rounded-xl border border-transparent hover:border-soft-border hover:bg-white transition-all duration-300">
                <div className="text-accent-cyan mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary-navy font-heading">{stat.value}</div>
                <div className="text-dark-text/50 font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SOLUTIONS SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-navy mb-4 font-heading">Our Solutions</h2>
              <div className="w-12 h-1 bg-accent-cyan mb-4"></div>
              <p className="text-lg text-dark-text/60 font-body max-w-xl">Precision-engineered medical technology designed to elevate patient care standards.</p>
            </div>
            <Link to="/medical-equipment" className="text-accent-cyan font-bold flex items-center gap-2 hover:underline">
              View All Solutions <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSolutions.map((solution, index) => (
              <Link key={index} to={solution.link} className="group">
                <div className="bg-white p-8 rounded-2xl border border-soft-border hover:border-accent-cyan/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col hover-lift">
                  <div className="mb-6 text-accent-cyan group-hover:scale-110 transition-transform origin-left">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-3 font-heading">{solution.title}</h3>
                  <p className="text-dark-text/60 mb-6 font-body text-sm leading-relaxed flex-grow">{solution.description}</p>
                  <div className="flex items-center text-accent-cyan font-bold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARTNERS SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-light-gray border-y border-soft-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-bold text-dark-text/40 uppercase tracking-widest mb-8 sm:mb-10">Trusted Partners & Brands We Represent</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center opacity-70">
            {[
              { name: "LinaTech", logoText: "LinaTech" },
              { name: "3M Medical", logoText: "3M Medical" },
              { name: "BD Infusion", logoText: "BD Infusion" },
              { name: "Medline", logoText: "Medline Supplies" },
              { name: "Cardinal Health", logoText: "CardinalHealth" }
            ].map((partner, index) => (
              <div key={index} className="text-center font-heading font-black text-base sm:text-lg md:text-xl lg:text-2xl text-primary-navy/80 tracking-tight hover:scale-105 hover:text-accent-cyan transition-all cursor-default select-none">
                {partner.logoText}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-navy mb-4 font-heading">Why Choose MediGenX</h2>
            <div className="w-16 h-1 bg-accent-cyan mx-auto mb-6"></div>
            <p className="text-dark-text/60">
              We stand apart by delivering world-class medical solutions backed by industry experts, continuous support, and unmatched quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Global Standards",
                desc: "We supply FDA/CE certified medical equipment and consumables directly from international manufacturers.",
                icon: <ShieldCheck size={28} />
              },
              {
                title: "Expert Support",
                desc: "Our team of dedicated biomedical engineers provides round-the-clock maintenance and setup services.",
                icon: <Wrench size={28} />
              },
              {
                title: "Complete Solutions",
                desc: "From hospital feasibility studies to Linac bunker constructions, we offer full turnkey services.",
                icon: <Building2 size={28} />
              },
              {
                title: "Customer First",
                desc: "We build long-term relationships through transparent operations and tailor-made financial models.",
                icon: <HeartHandshake size={28} />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-soft-border hover:border-accent-cyan/40 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mb-6 group-hover:bg-accent-cyan group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3 font-heading">{item.title}</h3>
                <p className="text-dark-text/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WORK PROCESS SECTION */}
      <section className="py-24 bg-light-gray border-y border-soft-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-navy mb-4 font-heading">Our Work Process</h2>
            <div className="w-16 h-1 bg-accent-cyan mx-auto mb-6"></div>
            <p className="text-dark-text/60">
              From initial consulting to final execution and lifelong maintenance, our structured process ensures safety, compliance, and flawless operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {[
              {
                step: "01",
                title: "Planning & Feasibility",
                desc: "We analyze your space, clinical needs, budget, and local regulatory requirements.",
                icon: <ClipboardList size={24} />
              },
              {
                step: "02",
                title: "Global Procurement",
                desc: "Sourcing world-class FDA/CE approved machinery directly from partners like LinaTech.",
                icon: <ShoppingBag size={24} />
              },
              {
                step: "03",
                title: "Turnkey Installation",
                desc: "Certified biomedical engineers complete bunker construction, assembly, and testing.",
                icon: <Activity size={24} />
              },
              {
                step: "04",
                title: "Clinical Training",
                desc: "Hands-on certification for oncologists, radiologists, and technicians on the new systems.",
                icon: <GraduationCap size={24} />
              },
              {
                step: "05",
                title: "Lifelong Support",
                desc: "24/7 preventative maintenance and technical support to ensure 99%+ equipment uptime.",
                icon: <Wrench size={24} />
              }
            ].map((p, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-soft-border hover:border-accent-cyan/40 hover:shadow-md transition-all duration-300 relative group flex flex-col items-center text-center">
                <span className="absolute top-4 right-4 text-primary-navy/10 font-bold text-3xl font-heading group-hover:text-accent-cyan/25 transition-colors">{p.step}</span>
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mb-6 group-hover:bg-accent-cyan group-hover:text-white transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-navy mb-2 font-heading">{p.title}</h3>
                <p className="text-dark-text/60 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED CONSUMABLES SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-navy mb-4 font-heading">Top Consumables</h2>
              <div className="w-12 h-1 bg-accent-cyan mb-4"></div>
              <p className="text-lg text-dark-text/60 max-w-xl">Everyday hospital and laboratory essentials available for quick ordering.</p>
            </div>
            <Link to="/consumables" className="text-accent-cyan font-bold flex items-center gap-2 hover:underline">
              Visit Consumables Store <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 4, name: "N95 Protective Masks (50-pack)", price: 4500, category: "PPE & Protective", brand: "3M", image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=600&auto=format&fit=crop&q=80" },
              { id: 1, name: "Surgical Gloves (Latex-Free)", price: 1250, category: "Surgical Supplies", brand: "Medline", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&auto=format&fit=crop&q=80" },
              { id: 2, name: "Sterile Wound Dressing (10-pack)", price: 2450, category: "Wound Care", brand: "3M", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&auto=format&fit=crop&q=80" }
            ].map(product => (
              <div key={product.id} className="bg-white rounded-2xl border border-soft-border overflow-hidden group hover:border-accent-cyan/45 hover:shadow-lg transition-all duration-300 flex flex-col hover-lift">
                <div className="h-48 bg-light-gray overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-wider mb-2">{product.category}</span>
                  <h3 className="text-lg font-bold text-primary-navy mb-1 font-heading">{product.name}</h3>
                  <p className="text-dark-text/40 text-xs mb-4">{product.brand}</p>
                  <div className="mt-auto pt-4 border-t border-soft-border flex items-center justify-between">
                    <span className="text-xl font-bold text-primary-navy">৳{product.price.toLocaleString()}</span>
                    <Link to="/consumables" className="bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan hover:text-white px-4 py-2 rounded-lg font-bold text-xs transition-all flex items-center gap-1">
                      Buy Now <ShoppingBag size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-24 bg-light-gray border-y border-soft-border overflow-hidden">
        <div className="container mx-auto px-4 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-navy mb-4 font-heading">What Clients Say</h2>
          <div className="w-16 h-1 bg-accent-cyan mx-auto mb-6"></div>
          <p className="text-dark-text/60 max-w-2xl mx-auto">
            Read how our advanced radiotherapy equipment and medical products are helping leading hospitals deliver top-tier patient care.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex overflow-x-hidden w-full py-4">
          <div className="flex animate-marquee space-x-8 whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
            {/* First render of testimonials */}
            {testimonials.map((t, index) => (
              <div 
                key={`t1-${index}`} 
                className="bg-white p-8 rounded-2xl border border-soft-border flex flex-col justify-between hover:shadow-lg hover:border-accent-cyan/30 transition-all duration-300 hover-lift w-[380px] h-[280px] shrink-0 whitespace-normal"
              >
                <div>
                  <div className="text-accent-cyan mb-4">
                    <Quote size={28} className="opacity-30 animate-pulse" />
                  </div>
                  <p className="text-dark-text/70 italic text-sm leading-relaxed mb-6">{t.quote}</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy font-heading text-sm">{t.author}</h4>
                  <p className="text-accent-cyan text-xs font-bold">{t.role}</p>
                  <p className="text-dark-text/40 text-xs">{t.facility}</p>
                </div>
              </div>
            ))}
            {/* Second render of testimonials (for infinite loop) */}
            {testimonials.map((t, index) => (
              <div 
                key={`t2-${index}`} 
                className="bg-white p-8 rounded-2xl border border-soft-border flex flex-col justify-between hover:shadow-lg hover:border-accent-cyan/30 transition-all duration-300 hover-lift w-[380px] h-[280px] shrink-0 whitespace-normal"
              >
                <div>
                  <div className="text-accent-cyan mb-4">
                    <Quote size={28} className="opacity-30 animate-pulse" />
                  </div>
                  <p className="text-dark-text/70 italic text-sm leading-relaxed mb-6">{t.quote}</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy font-heading text-sm">{t.author}</h4>
                  <p className="text-accent-cyan text-xs font-bold">{t.role}</p>
                  <p className="text-dark-text/40 text-xs">{t.facility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-navy mb-4 font-heading">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-accent-cyan mx-auto mb-6"></div>
            <p className="text-dark-text/60">Find quick answers to common queries regarding our medical supply, licensing support, and maintenance plans.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do you provide official warranties for medical equipment?",
                a: "Yes, all our machinery and diagnostic equipment come with a minimum of 1-3 years of manufacturer-backed official warranty, including flexible post-warranty maintenance agreements (AMC/CMC)."
              },
              {
                q: "What is your emergency support response time?",
                a: "For critical life-support, diagnostic, and radiotherapy equipment, our engineering team provides onsite technical support within 2 hours inside Dhaka and within 12-24 hours nationwide."
              },
              {
                q: "Do you assist with clinical training and regulatory licensing?",
                a: "Absolutely. We provide complete hands-on training for medical staff. We also assist and consult on obtaining regulatory licenses (like BAERA, DGDA approvals) required for importing and running oncology equipment."
              },
              {
                q: "Do you deliver consumables outside Dhaka?",
                a: "Yes, we ship medical consumables nationwide. Deliveries inside Dhaka take 24 hours, while deliveries outside Dhaka take 2-3 business days through our logistics network."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-soft-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent-cyan/30"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left font-bold text-primary-navy text-base md:text-lg font-heading hover:bg-light-gray/20 transition-all cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {activeFaq === index ? <ChevronUp className="text-accent-cyan shrink-0 ml-4" size={20} /> : <ChevronDown className="text-dark-text/30 shrink-0 ml-4" size={20} />}
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === index ? 'max-h-60 border-t border-soft-border' : 'max-h-0'}`}
                >
                  <div className="p-6 text-sm text-dark-text/70 leading-relaxed bg-light-gray/10">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. QUICK INQUIRY FORM */}
      <section className="py-24 bg-light-gray border-y border-soft-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-br from-primary-navy to-accent-cyan/90 p-8 md:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden group">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-20 -translate-y-20 blur-xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
                <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit mx-auto lg:mx-0">
                  Quick Quote
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading">Request a Customized Quote</h3>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  Tell us what your facility needs and our expert consultants will prepare a tailor-made proposal within 24 hours.
                </p>
              </div>

              <div className="lg:col-span-7 bg-white text-dark-text p-6 md:p-8 rounded-2xl shadow-lg">
                {inquirySubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="text-green-500 mx-auto mb-4" size={48} />
                    <h4 className="text-lg font-bold text-primary-navy mb-1">Request Received!</h4>
                    <p className="text-xs text-dark-text/60">Thank you. Our medical consultants will reach out to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name"
                        value={inquiryData.name}
                        onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})}
                        className="w-full px-4 py-2.5 bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan focus:bg-white outline-none text-sm transition-all"
                      />
                      <input 
                        required
                        type="email" 
                        placeholder="Email Address"
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})}
                        className="w-full px-4 py-2.5 bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan focus:bg-white outline-none text-sm transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        required
                        type="text" 
                        placeholder="Hospital/Clinic Name"
                        value={inquiryData.facility}
                        onChange={(e) => setInquiryData({...inquiryData, facility: e.target.value})}
                        className="w-full px-4 py-2.5 bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan focus:bg-white outline-none text-sm transition-all"
                      />
                      <select 
                        value={inquiryData.solution}
                        onChange={(e) => setInquiryData({...inquiryData, solution: e.target.value})}
                        className="w-full px-4 py-2.5 bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan focus:bg-white outline-none text-sm font-medium text-dark-text/80 transition-all"
                      >
                        <option>Radiotherapy Equipment</option>
                        <option>Robotic Systems</option>
                        <option>Radiology & Imaging</option>
                        <option>Medical Consumables</option>
                        <option>Bunker Construction</option>
                        <option>Healthcare Consulting</option>
                      </select>
                    </div>
                    <textarea 
                      required
                      placeholder="Tell us about your requirements..."
                      rows="3"
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({...inquiryData, message: e.target.value})}
                      className="w-full px-4 py-2.5 bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan focus:bg-white outline-none text-sm resize-none transition-all"
                    ></textarea>
                    <button 
                      type="submit" 
                      className="w-full bg-primary-navy text-white py-3 rounded-lg font-bold text-sm hover:bg-accent-cyan transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md active:scale-[0.99]"
                    >
                      Submit Inquiry <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-accent-cyan rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-xl group">
            {/* Glow effects */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl group-hover:scale-120 transition-transform duration-700" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl group-hover:scale-120 transition-transform duration-700" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                Ready to transform your facility?
              </h2>
              <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto font-light">
                Join leading healthcare institutions that trust MediGenX for state-of-the-art equipment and strategic excellence.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-primary-navy text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:text-primary-navy transition-all hover-scale shadow-md hover:shadow-lg"
              >
                Contact Our Experts
              </Link>
            </div>
            {/* Simple pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
        </div>
      </section>
      <div className="h-20" />
    </div>
  );
};

export default Home;
