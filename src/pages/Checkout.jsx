import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, User, Truck, CreditCard, ShoppingBag } from 'lucide-react';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [], total = 0 } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    shippingArea: 'Inside Dhaka'
  });

  const shippingCost = formData.shippingArea === 'Inside Dhaka' ? 60 : 120;
  const grandTotal = total + shippingCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    navigate('/thank-you');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-light-gray py-20 px-4 text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-dark-text/20">
          <ShoppingBag size={40} />
        </div>
        <h2 className="text-3xl font-bold text-primary-navy mb-4 font-heading">Your cart is empty</h2>
        <p className="text-dark-text/60 mb-8 max-w-md">You need to add some products to your cart before you can proceed to checkout.</p>
        <Link to="/consumables" className="bg-accent-cyan text-white px-8 py-3 rounded-full font-bold hover:bg-primary-navy transition-all hover-scale">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-light-gray min-h-screen font-body py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side: Order Form */}
          <div className="lg:w-2/3 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-sm border border-soft-border reveal active">
              <h2 className="text-2xl font-bold text-primary-navy mb-8 font-heading flex items-center gap-3">
                <Truck className="text-accent-cyan" /> Delivery Information
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark-text/70 ml-1 flex items-center gap-2">
                      <User size={14} className="text-accent-cyan" /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-5 py-4 bg-light-gray rounded-xl border-2 border-transparent focus:border-accent-cyan focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark-text/70 ml-1 flex items-center gap-2">
                      <Phone size={14} className="text-accent-cyan" /> Phone Number
                    </label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-5 py-4 bg-light-gray rounded-xl border-2 border-transparent focus:border-accent-cyan focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark-text/70 ml-1 flex items-center gap-2">
                    <MapPin size={14} className="text-accent-cyan" /> Full Delivery Address
                  </label>
                  <textarea 
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3" 
                    placeholder="House no, Road no, Area, District..."
                    className="w-full px-5 py-4 bg-light-gray rounded-xl border-2 border-transparent focus:border-accent-cyan focus:bg-white outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-bold text-dark-text/70 ml-1">Select Shipping Area</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.shippingArea === 'Inside Dhaka' ? 'border-accent-cyan bg-accent-cyan/5' : 'border-transparent bg-light-gray'}`}>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="shippingArea" 
                          value="Inside Dhaka"
                          checked={formData.shippingArea === 'Inside Dhaka'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-accent-cyan"
                        />
                        <span className="font-bold text-primary-navy">Inside Dhaka</span>
                      </div>
                      <span className="font-bold text-accent-cyan">৳60</span>
                    </label>
                    <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.shippingArea === 'Outside Dhaka' ? 'border-accent-cyan bg-accent-cyan/5' : 'border-transparent bg-light-gray'}`}>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="shippingArea" 
                          value="Outside Dhaka"
                          checked={formData.shippingArea === 'Outside Dhaka'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-accent-cyan"
                        />
                        <span className="font-bold text-primary-navy">Outside Dhaka</span>
                      </div>
                      <span className="font-bold text-accent-cyan">৳120</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-primary-navy mb-4 font-heading flex items-center gap-3">
                    <CreditCard className="text-accent-cyan" /> Payment Method
                  </h3>
                  <div className="p-4 bg-light-gray rounded-xl border-2 border-accent-cyan bg-accent-cyan/5 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-4 border-accent-cyan flex items-center justify-center"></div>
                    <span className="font-bold text-primary-navy">Cash on Delivery</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary-navy text-white py-5 rounded-xl font-bold text-xl hover:bg-accent-cyan transition-all shadow-xl hover:shadow-2xl hover-scale flex items-center justify-center gap-3"
                >
                  Place Order ৳{grandTotal.toFixed(2)}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-[30px] shadow-sm border border-soft-border sticky top-32 reveal active">
              <h2 className="text-xl font-bold text-primary-navy mb-6 font-heading border-b border-light-gray pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between gap-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-light-gray rounded-lg overflow-hidden shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-primary-navy leading-tight line-clamp-2">{item.name}</h4>
                        <p className="text-xs text-dark-text/40">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-primary-navy shrink-0">৳{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-light-gray pt-6">
                <div className="flex justify-between text-dark-text/60">
                  <span>Subtotal</span>
                  <span>৳{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-dark-text/60">
                  <span>Shipping ({formData.shippingArea})</span>
                  <span>৳{shippingCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-light-gray">
                  <span className="font-bold text-primary-navy text-lg">Total</span>
                  <span className="font-bold text-accent-cyan text-2xl">৳{grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
