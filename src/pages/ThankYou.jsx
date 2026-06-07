import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-light-gray py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-[40px] shadow-2xl text-center reveal active">
          <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle2 size={64} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6 font-heading">Thank You for Your Purchase!</h1>
          <p className="text-xl text-dark-text/60 mb-10 font-body">
            Your order has been successfully placed. We've sent a confirmation email to your registered address with all the details.
          </p>
          
          <div className="space-y-4">
            <Link 
              to="/consumables" 
              className="inline-flex items-center gap-2 bg-accent-cyan text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-navy transition-all shadow-lg hover:shadow-xl hover-scale"
            >
              <ShoppingBag size={20} /> Continue Shopping
            </Link>
            <br />
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary-navy font-bold hover:text-accent-cyan transition-colors"
            >
              Go to Homepage <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
