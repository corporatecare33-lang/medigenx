import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.1
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [pathname]); // Re-run on pathname change to catch new elements

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow page-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
