import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Youtube, 
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Send
} from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-light-gray min-h-screen font-body">
      {/* 1. HERO */}
      <section className="bg-primary-navy text-white py-12 sm:py-16 md:py-20 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 font-heading">Contact Us</h1>
          <nav className="flex justify-center items-center space-x-2 text-xs sm:text-sm font-body text-white/70">
            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-accent-cyan font-semibold">Contact Us</span>
          </nav>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-accent-cyan/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* 2. TWO COLUMN LAYOUT */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
            
            {/* LEFT - Contact Form */}
            <div className="lg:w-3/5">
              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl border border-soft-border shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-primary-navy mb-6 sm:mb-8 font-heading">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 p-6 sm:p-8 rounded-lg text-center">
                    <CheckCircle2 className="text-green-500 mx-auto mb-4" size={48} />
                    <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-sm sm:text-base text-green-700">Thank you for contacting MediGenX. Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-dark-text/70">Full Name</label>
                        <input 
                          required
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan focus:bg-white outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-dark-text/70">Email Address</label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-dark-text/70">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+88 01787 866 609"
                          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan focus:bg-white outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-dark-text/70">Subject</label>
                        <input 
                          required
                          type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-bold text-dark-text/70">Message/Inquiry</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5" 
                        placeholder="Tell us more about your needs..."
                        className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan focus:bg-white outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-primary-navy text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-accent-cyan transition-all flex items-center justify-center gap-2 group"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT - Contact Details */}
            <div className="lg:w-2/5 space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl border border-soft-border space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-navy font-heading">Contact Details</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-cyan/10 text-accent-cyan rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-navy mb-1 text-sm sm:text-base">Office Address</h4>
                      <p className="text-dark-text/60 text-xs sm:text-sm">1281, Begum Rokeya Sarani, East Monipur, Mirpur, Dhaka - 1216</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-cyan/10 text-accent-cyan rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-navy mb-1 text-sm sm:text-base">Phone Number</h4>
                      <p className="text-dark-text/60 text-xs sm:text-sm">
                        +88 01787 866 609<br />
                        +88 01945 001 001
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-cyan/10 text-accent-cyan rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-navy mb-1 text-sm sm:text-base">Email Address</h4>
                      <p className="text-dark-text/60 text-xs sm:text-sm">info@medigenx.com</p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-cyan/10 text-accent-cyan rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-navy mb-1 text-sm sm:text-base">Office Hours</h4>
                      <p className="text-dark-text/60 text-xs sm:text-sm">Sunday – Thursday: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="mt-8 sm:mt-10 rounded-xl overflow-hidden h-48 sm:h-56 md:h-64 border border-soft-border shadow-sm">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.198267088625!2d90.36840931498134!3d23.806837284557834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14ca91f2c51%3A0x43b0f1f3a65b0c2a!2sEast%20Monipur%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MediGenX Office Location"
                  ></iframe>
                </div>
              </div>

              {/* 3. SOCIAL MEDIA LINKS ROW */}
              <div className="bg-primary-navy p-6 sm:p-8 rounded-xl shadow-sm text-center">
                <h4 className="text-white font-bold mb-4 sm:mb-6 font-heading text-base sm:text-lg">Connect With Us</h4>
                <div className="flex justify-center gap-2 sm:gap-3">
                  {[
                    { icon: <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />, color: "bg-[#0077b5]", label: "LinkedIn" },
                    { icon: <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />, color: "bg-[#1877f2]", label: "Facebook" },
                    { icon: <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />, color: "bg-[#1da1f2]", label: "Twitter" },
                    { icon: <Youtube size={16} className="sm:w-[18px] sm:h-[18px]" />, color: "bg-[#ff0000]", label: "YouTube" },
                    { icon: <MessageSquare size={16} className="sm:w-[18px] sm:h-[18px]" />, color: "bg-[#25d366]", label: "WhatsApp" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className={`${social.color} text-white p-2 sm:p-2.5 rounded-lg hover:scale-110 transition-transform shadow-md`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA strip */}
      <section className="bg-white py-8 sm:py-10 md:py-12 border-t border-soft-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
            <Link to="/" className="flex items-center gap-2 text-dark-text/60 hover:text-accent-cyan font-bold transition-colors text-xs sm:text-sm">
              <ChevronRight size={16} /> Home
            </Link>
            <Link to="/medical-equipment" className="flex items-center gap-2 text-dark-text/60 hover:text-accent-cyan font-bold transition-colors text-xs sm:text-sm">
              <ChevronRight size={16} /> Products
            </Link>
            <Link to="/services" className="flex items-center gap-2 text-dark-text/60 hover:text-accent-cyan font-bold transition-colors text-xs sm:text-sm">
              <ChevronRight size={16} /> Services
            </Link>
            <Link to="/after-sales" className="flex items-center gap-2 text-dark-text/60 hover:text-accent-cyan font-bold transition-colors text-xs sm:text-sm">
              <ChevronRight size={16} /> After-Sales Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
