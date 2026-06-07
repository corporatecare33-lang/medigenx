import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Building2, 
  MonitorCheck, 
  Construction, 
  BarChart3, 
  Plus, 
  Minus,
  CheckCircle2,
  Users2,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const overviewCards = [
    { title: "Healthcare Management Services", icon: <Building2 className="text-accent-cyan" size={32} /> },
    { title: "IT & Hospital Software Management", icon: <MonitorCheck className="text-accent-cyan" size={32} /> },
    { title: "Linac Bunker Construction Supervision", icon: <Construction className="text-accent-cyan" size={32} /> },
    { title: "Healthcare Feasibility Studies", icon: <BarChart3 className="text-accent-cyan" size={32} /> }
  ];

  const tabs = [
    {
      id: 0,
      label: "Hospital Management Consultancy",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary-navy font-heading">Hospital Management Consultancy Overview</h3>
          <p className="text-dark-text/70 leading-relaxed font-body">
            MediGenX offers expert consultancy services designed to help healthcare organizations optimize their operations, improve patient care, and ensure long-term sustainability. Our approach combines industry-leading practices with local insights to deliver measurable results for hospitals of all sizes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-6 bg-light-gray rounded-xl border-l-4 border-accent-cyan">
              <h4 className="font-bold text-primary-navy mb-2">Strategic Planning</h4>
              <p className="text-sm text-dark-text/60">Developing long-term roadmaps for growth and excellence.</p>
            </div>
            <div className="p-6 bg-light-gray rounded-xl border-l-4 border-accent-cyan">
              <h4 className="font-bold text-primary-navy mb-2">Operational Efficiency</h4>
              <p className="text-sm text-dark-text/60">Streamlining workflows to reduce costs and improve service delivery.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      label: "Healthcare Management Services",
      content: (
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary-navy font-heading">Healthcare Management & Quality Implementation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "JCI Implementation", d: "Joint Commission International accreditation assistance for global safety standards." },
              { t: "NABL Implementation", d: "National Accreditation Board for Testing and Calibration Laboratories compliance." },
              { t: "Medical Record Management", d: "Securing and organizing patient data for better clinical decision making." },
              { t: "QCI Recommendation", d: "Quality Council of India implementation for healthcare excellence." },
              { t: "ISO Certification", d: "Assistance in achieving ISO standards for healthcare quality systems." },
              { t: "Quality Management System (QMS)", d: "Developing comprehensive frameworks for continuous quality improvement." },
              { t: "Radiotherapy Bunker Design", d: "Specialized design and calculation for high-energy radiation facilities." },
              { t: "BAEC Permission", d: "Handling Bangladesh Atomic Energy Commission regulatory requirements." }
            ].map((s, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-soft-border">
                <CheckCircle2 className="text-accent-cyan shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-primary-navy mb-1">{s.t}</h4>
                  <p className="text-sm text-dark-text/60 leading-snug">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 2,
      label: "IT & Software Management",
      content: (
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary-navy font-heading">Digital Healthcare & Software Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "IT Management Software", d: "End-to-end IT infrastructure management for healthcare." },
              { t: "HMS (Hospital Management)", d: "Comprehensive system for full hospital operation control." },
              { t: "CMS (Clinic Management)", d: "Tailored solutions for specialized medical clinics." },
              { t: "Laboratory Management", d: "Automated workflows for clinical and research labs." },
              { t: "Diagnostics Management", d: "Streamlined imaging and diagnostic reporting systems." },
              { t: "Accounts Management", d: "Integrated financial systems for medical facilities." },
              { t: "HR & Payroll", d: "Staff management and automated payroll for healthcare." },
              { t: "Project Management", d: "Tools for managing healthcare facility expansions." },
              { t: "Inventory Management", d: "Precision tracking for medical consumables and assets." }
            ].map((s, i) => (
              <div key={i} className="p-6 bg-light-gray rounded-2xl hover:bg-accent-cyan/5 transition-colors group">
                <MonitorCheck className="text-accent-cyan mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-primary-navy mb-2">{s.t}</h4>
                <p className="text-xs text-dark-text/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 3,
      label: "Bunker Construction & Design",
      content: (
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary-navy font-heading">Linac Bunker Construction Supervision & Design</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: "Radiation Therapy Bunker Design", d: "Detailed architectural and functional planning for LINAC bunkers." },
              { t: "Radiation Shielding Calculation", d: "Expert shielding calculations ensuring maximum safety and regulatory compliance." },
              { t: "Construction Supervision", d: "On-site monitoring to ensure structural integrity and specialized requirements." },
              { t: "2D & 3D Interior Design", d: "Visualizing specialized medical spaces for optimal patient comfort and workflow." },
              { t: "Graphics & Signage Design", d: "Strategic display boards and signage for radiation safety and navigation." },
              { t: "MEP Design for Bunkers", d: "Mechanical, Electrical, and Plumbing engineering specifically for radiotherapy." }
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-navy rounded-lg flex items-center justify-center text-white shrink-0">
                  <Construction size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy mb-1">{s.t}</h4>
                  <p className="text-sm text-dark-text/60">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 4,
      label: "Training & Development",
      content: (
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary-navy font-heading">Training & Skill Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Motivational Training", d: "Empowering leadership and management teams for peak performance.", i: <Users2 /> },
              { t: "Manpower Planning", d: "Strategic staffing solutions and organizational structure design.", i: <TrendingUp /> },
              { t: "Skill Development", d: "Technical and soft-skill training for healthcare professionals.", i: <Lightbulb /> }
            ].map((s, i) => (
              <div key={i} className="p-8 bg-white border border-soft-border rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-accent-cyan flex justify-center mb-4">{s.i}</div>
                <h4 className="font-bold text-primary-navy mb-3">{s.t}</h4>
                <p className="text-sm text-dark-text/60">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 5,
      label: "Feasibility & Financials",
      content: (
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-primary-navy font-heading mb-4">Healthcare Feasibility Studies & Financial Reports</h3>
            <p className="text-dark-text/70 leading-relaxed font-body">
              MediGenX provides data-driven feasibility studies and robust financial analysis to help healthcare investors and providers make informed decisions about new projects and expansions.
            </p>
          </div>

          <div className="space-y-12">
            {/* Sub-section A */}
            <div>
              <h4 className="text-xl font-bold text-accent-cyan mb-6 border-b-2 border-accent-cyan/20 pb-2">a) Healthcare Feasibility Studies</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {["Market Analysis", "Operational Feasibility", "Regulatory Compliance", "Site Selection", "Risk Assessment"].map(item => (
                  <div key={item} className="p-4 bg-light-gray rounded-xl text-center text-sm font-bold text-primary-navy">{item}</div>
                ))}
              </div>
            </div>

            {/* Sub-section B */}
            <div>
              <h4 className="text-xl font-bold text-accent-cyan mb-6 border-b-2 border-accent-cyan/20 pb-2">b) Financial Feasibility & Analysis</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {["Cost Estimation", "Revenue Projections", "Cash Flow Analysis", "Profitability Forecasting", "Sensitivity Analysis"].map(item => (
                  <div key={item} className="p-4 bg-primary-navy text-white rounded-xl text-center text-sm font-bold">{item}</div>
                ))}
              </div>
            </div>

            {/* Sub-section C */}
            <div>
              <h4 className="text-xl font-bold text-accent-cyan mb-6 border-b-2 border-accent-cyan/20 pb-2">c) Financial Reporting & Monitoring</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {["Performance Monitoring", "Asset Management", "Budgeting & Variance", "Investor Reporting", "ROI Analysis"].map(item => (
                  <div key={item} className="p-4 border-2 border-soft-border rounded-xl text-center text-sm font-bold text-primary-navy">{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-light-gray p-10 rounded-3xl">
            <h4 className="text-2xl font-bold text-primary-navy mb-6 font-heading">Why Choose MediGenX?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Unmatched expertise in radiotherapy and oncology facility planning.",
                "Data-driven financial models specific to the healthcare industry.",
                "Regulatory knowledge across multiple global regions including BAEC.",
                "Comprehensive end-to-end solutions from design to staffing."
              ].map((point, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="text-accent-cyan shrink-0" />
                  <span className="text-dark-text font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-primary-navy text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 font-heading">Services & Consultancy</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 font-body text-white/80 px-2">Comprehensive solutions tailored to healthcare facilities worldwide</p>
          <nav className="flex justify-center items-center space-x-2 text-xs sm:text-sm font-body text-white/70">
            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-accent-cyan font-semibold">Services & Consultancy</span>
          </nav>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-accent-cyan/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-light-gray border-b border-soft-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-sm sm:text-base md:text-lg text-dark-text/70 leading-relaxed font-body px-2">
              At MediGenX, we provide a comprehensive range of consultancy services tailored to meet the unique needs of healthcare facilities, businesses, and organizations. Our expert team is dedicated to streamlining operations, enhancing quality, ensuring compliance with industry standards, and offering specialized support in critical areas such as radiotherapy, construction, hospital planning, and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {overviewCards.map((card, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl border border-soft-border hover:border-accent-cyan/50 transition-all group">
                <div className="mb-4 sm:mb-6 text-accent-cyan group-hover:scale-110 transition-transform origin-left">
                  {card.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-primary-navy font-heading">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED SERVICES TABS */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-3 sm:px-4 md:px-5 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                  activeTab === index 
                    ? 'bg-accent-cyan text-white shadow-md' 
                    : 'bg-light-gray text-dark-text/60 hover:bg-soft-border'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl border border-soft-border min-h-[400px]">
            {tabs[activeTab].content}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-navy rounded-2xl p-6 sm:p-8 md:p-10 lg:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-heading px-2">
                Ready to elevate your healthcare facility's standards?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Connect with our expert consultants today to discuss how we can support your growth and excellence.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-accent-cyan text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-primary-navy transition-all"
              >
                Book a Consultation
              </Link>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
