import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Cpu, 
  Zap, 
  Eye, 
  ShieldCheck, 
  Activity, 
  Target, 
  Database, 
  CheckCircle2,
  Award,
  Users,
  Globe
} from 'lucide-react';

const LinaTechVenusX = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-r from-primary-navy to-primary-navy/90 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl -mr-48 -mt-48"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">LinaTech VenusX Radiotherapy Machines</h1>
          <p className="text-xl md:text-2xl mb-8 font-body text-white/90">Innovation, Precision, and Excellence in Radiotherapy Technology</p>
          <nav className="flex justify-center items-center space-x-2 text-sm md:text-base font-body text-white/70">
            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight size={16} />
            <Link to="/medical-equipment" className="hover:text-accent-cyan transition-colors">Medical Equipment</Link>
            <ChevronRight size={16} />
            <span className="text-accent-cyan font-semibold">LinaTech VenusX</span>
          </nav>
        </div>
      </section>

      {/* 2. LINATECH INTRO */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-soft-border">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 font-heading text-center">LinaTech: Pioneering the Future of Cancer Treatment</h2>
            <p className="text-lg md:text-xl text-dark-text/80 leading-relaxed font-body mb-8">
              At LinaTech, we are redefining the future of cancer treatment. Founded in 1996 in the heart of Silicon Valley, we have spent over 20 years creating world-class radiotherapy solutions designed to improve clinical outcomes and enhance the patient experience. With groundbreaking products like VenusX (Medical Linear Accelerator), TiGRT TPS (Treatment Planning System), and TiGRT IVS (Image Viewing System), LinaTech is setting the standard in the fight against cancer.
            </p>
            <div className="bg-primary-navy text-white p-8 rounded-2xl">
              <h3 className="text-accent-cyan font-bold uppercase tracking-wider text-sm mb-4">Our Vision</h3>
              <p className="text-xl md:text-2xl font-heading italic">
                "To lead the innovation of radiotherapy solutions that provide unparalleled precision and better outcomes for cancer patients globally."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VENUSX PRODUCT SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent-cyan/10 text-accent-cyan px-4 py-1 rounded-full text-sm font-bold mb-4">Core Platform</div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6 font-heading">VenusX: A Game-Changing Medical Linear Accelerator</h2>
            <p className="max-w-3xl mx-auto text-lg text-dark-text/70 font-body">
              The VenusX is a multi-modal radiotherapy platform designed for advanced 3D-CRT, IMRT, and VMAT treatments. It combines high-precision delivery with an intelligent workflow to ensure the most effective therapy for diverse clinical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Orthogonal Double-Layer MLC",
                desc: "World's first technology with ultra-low leakage rate, enabling precise multi-target treatment and complex field shaping.",
                icon: <Target className="text-accent-cyan" size={32} />
              },
              {
                title: "High-Efficiency VMAT",
                desc: "Significantly shorter treatment times powered by a GPU-Accelerated Monte-Carlo Dose Algorithm for rapid, precise calculation.",
                icon: <Zap className="text-accent-cyan" size={32} />
              },
              {
                title: "Intelligent Image Guidance",
                desc: "Independent double slip rings with integrated kV CBCT and MV EPID for real-time target verification.",
                icon: <Eye className="text-accent-cyan" size={32} />
              },
              {
                title: "AI-Driven Quality Control",
                desc: "Automated AI QA systems ensuring consistent, accurate treatment delivery throughout the patient's course.",
                icon: <Activity className="text-accent-cyan" size={32} />
              }
            ].map((f, i) => (
              <div key={i} className="flex gap-6 p-8 bg-light-gray rounded-2xl hover:shadow-lg transition-all border-l-4 border-accent-cyan">
                <div className="shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-primary-navy mb-2 font-heading">{f.title}</h3>
                  <p className="text-dark-text/70 font-body">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <span className="bg-primary-navy text-white px-6 py-2 rounded-full font-bold text-sm">FDA Cleared | CE Marking In Progress</span>
          </div>
        </div>
      </section>

      {/* 4. TiGRT TPS SECTION */}
      <section className="py-24 bg-primary-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block bg-accent-cyan/20 text-accent-cyan px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase">Software Excellence</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">TiGRT TPS: Precision Planning for Unmatched Accuracy</h2>
              <p className="text-lg text-white/80 mb-10 font-body leading-relaxed">
                The TiGRT Treatment Planning System provides clinicians with advanced tools to create highly optimized plans that maximize dose to the tumor while sparing critical organs-at-risk.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Monte-Carlo Dose Calculation", desc: "Reduces MU, improves Conformity Index (CI), and minimizes Heterogeneity Index (HI)." },
                  { title: "AI-Based Auto Beam Selection", desc: "Simplifies the planning process with seamless communication and automated optimization." },
                  { title: "Automated AI Contouring", desc: "Deep learning models for 40+ organs-at-risk, significantly reducing manual contouring time." }
                ].map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-accent-cyan shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1 font-heading">{f.title}</h4>
                      <p className="text-white/60 text-sm font-body">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <span className="border border-accent-cyan text-accent-cyan px-6 py-2 rounded-full font-bold text-sm">FDA Cleared | CE Marking In Progress</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/5 p-8 rounded-3xl aspect-square flex items-center justify-center border border-white/10">
                <Database size={120} className="text-accent-cyan opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TiGRT IVS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block bg-accent-cyan/10 text-accent-cyan px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase">Real-Time Guidance</div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6 font-heading">TiGRT IVS: Real-Time Imaging for Maximum Precision</h2>
              <p className="text-lg text-dark-text/70 mb-10 font-body leading-relaxed">
                The TiGRT Image Viewing System offers industry-leading resolution and automated positioning tools to ensure the patient is perfectly aligned for every fraction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "High-Res Imaging", desc: "2816x2816 amorphous silicon flat panel detector for crystal-clear visualization." },
                  { title: "AI Positioning", desc: "6D couch integration for rapid and precise positioning correction." },
                  { title: "Multi-Functionality", desc: "Integrated QA for imaging, beam delivery, and planning workflows." },
                  { title: "Easy Installation", desc: "Seamlessly integrates into existing LINACs with no bunker modifications required." }
                ].map((f, i) => (
                  <div key={i} className="p-6 bg-light-gray rounded-2xl">
                    <h4 className="font-bold text-primary-navy mb-2 font-heading">{f.title}</h4>
                    <p className="text-dark-text/60 text-sm font-body">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <span className="bg-primary-navy text-white px-6 py-2 rounded-full font-bold text-sm">FDA Cleared | CE Marking In Progress</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-accent-cyan/5 p-8 rounded-3xl aspect-square flex items-center justify-center border border-accent-cyan/10">
                <Eye size={120} className="text-primary-navy opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE LINATECH */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-navy mb-4 font-heading">Why Choose LinaTech</h2>
            <div className="w-24 h-1.5 bg-accent-cyan mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Global Presence", val: "500+ Partners", icon: <Globe size={24} />, desc: "Active across Asia, North America, Europe & South America." },
              { label: "Proven Tech", val: "Certified", icon: <Award size={24} />, desc: "FDA Cleared solutions with ongoing global certifications." },
              { label: "Innovative", val: "AI-Powered", icon: <Cpu size={24} />, desc: "Pioneering AI in QC, tracking, and real-time imaging." },
              { label: "Commitment", val: "200+ Patents", icon: <Users size={24} />, desc: "Driven by 400+ employees dedicated to excellence." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center border-t-4 border-primary-navy">
                <div className="flex justify-center text-accent-cyan mb-4">{s.icon}</div>
                <div className="text-2xl font-bold text-primary-navy mb-1 font-heading">{s.val}</div>
                <div className="text-accent-cyan font-bold text-xs uppercase mb-3 tracking-widest">{s.label}</div>
                <p className="text-dark-text/60 text-sm font-body">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FUTURE OF RADIOTHERAPY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-navy rounded-[30px] md:rounded-[50px] p-8 md:p-16 text-center shadow-2xl reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">The Future of Radiotherapy is Here</h2>
            <p className="text-xl text-white/80 mb-12 font-body leading-relaxed max-w-4xl mx-auto">
              MediGenX is proud to bring LinaTech's world-class solutions to healthcare providers. We are committed to providing not only the technology but the comprehensive support and training needed to ensure these advanced systems deliver their full potential for every patient.
            </p>
            <Link 
              to="/contact" 
              className="bg-accent-cyan text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-primary-navy transition-all shadow-lg inline-flex items-center gap-2 hover-scale"
            >
              Get More Information <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinaTechVenusX;
