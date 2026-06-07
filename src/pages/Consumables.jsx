import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  X, 
  Plus, 
  Minus, 
  Star, 
  Eye, 
  Trash2, 
  ChevronRight,
  ShoppingBag,
  ArrowUpDown,
  Check
} from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: "Surgical Gloves (Latex-Free)", category: "Surgical Supplies", brand: "Medline", price: 1250, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&auto=format&fit=crop&q=80" },
  { id: 2, name: "Sterile Wound Dressing (10-pack)", category: "Wound Care", brand: "3M", price: 2450, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&auto=format&fit=crop&q=80" },
  { id: 3, name: "Disposable Syringes 5ml (100-pack)", category: "IV & Infusion", brand: "BD", price: 1800, rating: 4.6, stock: "Limited Stock", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80" },
  { id: 4, name: "N95 Protective Masks (50-pack)", category: "PPE & Protective", brand: "3M", price: 4500, rating: 4.8, stock: "In Stock", image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=600&auto=format&fit=crop&q=80" },
  { id: 5, name: "Blood Glucose Test Strips (50-pack)", category: "Diagnostic Supplies", brand: "MediGenX Brand", price: 2950, rating: 4.4, stock: "In Stock", image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&auto=format&fit=crop&q=80" },
  { id: 6, name: "IV Cannula 18G (50-pack)", category: "IV & Infusion", brand: "BD", price: 3200, rating: 4.6, stock: "In Stock", image: "https://images.unsplash.com/photo-1628193845858-3f3321ff609a?w=600&auto=format&fit=crop&q=80" },
  { id: 7, name: "Lab Pipette Tips (200-pack)", category: "Lab Consumables", brand: "MediGenX Brand", price: 1550, rating: 4.3, stock: "In Stock", image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?w=600&auto=format&fit=crop&q=80" },
  { id: 8, name: "X-Ray Film Processor Chemicals", category: "Radiology Consumables", brand: "Cardinal Health", price: 6500, rating: 4.5, stock: "Limited Stock", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&auto=format&fit=crop&q=80" },
  { id: 9, name: "Sterile Surgical Drapes", category: "Surgical Supplies", brand: "Medline", price: 5500, rating: 4.7, stock: "In Stock", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=80" },
  { id: 10, name: "Adhesive Bandages Assorted (100-pack)", category: "Wound Care", brand: "3M", price: 1150, rating: 4.5, stock: "In Stock", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&auto=format&fit=crop&q=80" },
  { id: 11, name: "Urine Collection Bags (20-pack)", category: "Diagnostic Supplies", brand: "Cardinal Health", price: 2200, rating: 4.2, stock: "In Stock", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80" },
  { id: 12, name: "Nitrile Examination Gloves (100-pack)", category: "PPE & Protective", brand: "MediGenX Brand", price: 1950, rating: 4.8, stock: "In Stock", image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&auto=format&fit=crop&q=80" },
];

const CATEGORIES = ["Surgical Supplies", "Wound Care", "Diagnostic Supplies", "PPE & Protective", "IV & Infusion", "Lab Consumables", "Radiology Consumables"];
const BRANDS = ["MediGenX Brand", "3M", "Cardinal Health", "Medline", "BD"];

const Consumables = () => {
  const navigate = useNavigate();
  // --- State ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState(7000);
  const [sortBy, setSortBy] = useState("Featured");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // --- Filtering & Sorting Logic ---
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
      const matchesPrice = p.price <= priceRange;
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });

    if (sortBy === "Price: Low to High") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "Price: High to Low") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "Newest") result.sort((a, b) => b.id - a.id);

    return result;
  }, [searchQuery, selectedCategories, selectedBrands, priceRange, sortBy]);

  // --- Cart Actions ---
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true); // Open cart drawer on add
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Navigate to checkout with cart data
    setIsCartOpen(false);
    navigate('/checkout', { state: { cart, total: cartTotal } });
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // --- UI Helpers ---
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange(500);
  };

  return (
    <div className="bg-light-gray min-h-screen font-body relative">
      {/* 1. PAGE HERO */}
      <section className="bg-primary-navy text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Medical Consumables</h1>
          <p className="text-xl text-white/80">Quality You Can Trust for Everyday Healthcare Needs.</p>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-accent-cyan/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* Floating Cart Icon */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed top-24 right-8 z-40 bg-accent-cyan text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
      >
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary-navy text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
            {cartCount}
          </span>
        )}
      </button>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 2. FILTER SIDEBAR */}
          <aside className="lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-xl border border-soft-border sticky top-32">
              <h2 className="text-xl font-bold text-primary-navy mb-6 font-heading flex items-center gap-2">
                <Filter size={20} /> Filters
              </h2>

              {/* Search */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-dark-text/70 mb-2">Search Products</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search name..."
                    className="w-full pl-10 pr-4 py-2 bg-light-gray rounded-lg border border-soft-border focus:border-accent-cyan outline-none transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 text-dark-text/40" size={18} />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-dark-text/70 mb-3">Categories</label>
                <div className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded text-accent-cyan focus:ring-accent-cyan"
                        checked={selectedCategories.includes(cat)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedCategories([...selectedCategories, cat]);
                          else setSelectedCategories(selectedCategories.filter(c => c !== cat));
                        }}
                      />
                      <span className="text-sm text-dark-text/80 group-hover:text-accent-cyan transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-dark-text/70">Max Price</label>
                  <span className="text-accent-cyan font-bold">৳{priceRange}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="7000" 
                  step="50"
                  className="w-full h-1.5 bg-light-gray rounded-lg appearance-none cursor-pointer accent-accent-cyan"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                />
              </div>

              {/* Brands */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-dark-text/70 mb-3">Brands</label>
                <div className="space-y-2">
                  {BRANDS.map(brand => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded text-accent-cyan focus:ring-accent-cyan"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedBrands([...selectedBrands, brand]);
                          else setSelectedBrands(selectedBrands.filter(b => b !== brand));
                        }}
                      />
                      <span className="text-sm text-dark-text/80 group-hover:text-accent-cyan transition-colors">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={clearFilters}
                className="w-full py-3 text-dark-text/60 font-bold text-sm hover:text-red-500 transition-colors border-t border-soft-border mt-4"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* 3. PRODUCT GRID */}
          <main className="lg:w-3/4">
            <div className="bg-white p-4 rounded-xl border border-soft-border mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-dark-text/60 font-medium text-sm">
                Showing <span className="text-primary-navy font-bold">{filteredProducts.length}</span> products
              </p>
              <div className="flex items-center gap-3">
                <label className="text-sm font-bold text-dark-text/70 whitespace-nowrap">Sort By:</label>
                <select 
                  className="bg-light-gray px-4 py-2 rounded-lg text-sm font-bold text-primary-navy outline-none border border-soft-border focus:border-accent-cyan transition-all"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl border border-soft-border overflow-hidden group hover:border-accent-cyan transition-all flex flex-col">
                    <div className="relative h-64 bg-light-gray overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      
                      {/* Quick View Overlay */}
                      <div className="absolute inset-0 bg-primary-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button 
                          onClick={() => setQuickViewProduct(product)}
                          className="bg-white text-primary-navy p-3 rounded-lg hover:bg-accent-cyan hover:text-white transition-colors"
                          title="Quick View"
                        >
                          <Eye size={20} />
                        </button>
                        <button 
                          onClick={() => addToCart(product)}
                          className="bg-accent-cyan text-white p-3 rounded-lg hover:bg-primary-navy transition-colors"
                          title="Add to Cart"
                        >
                          <ShoppingCart size={20} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="text-[10px] font-bold text-accent-cyan uppercase tracking-wider mb-2">{product.category}</div>
                      <h3 className="text-lg font-bold text-primary-navy mb-1 font-heading">{product.name}</h3>
                      <p className="text-dark-text/40 text-xs mb-4">{product.brand}</p>
                      
                      <div className="mt-auto pt-4 border-t border-soft-border flex items-center justify-between">
                        <div className="text-xl font-bold text-primary-navy">৳{product.price.toLocaleString()}</div>
                        <button 
                          onClick={() => addToCart(product)}
                          className="flex items-center gap-2 text-accent-cyan font-bold text-sm hover:text-primary-navy transition-colors"
                        >
                          <Plus size={16} /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-20 rounded-xl text-center border border-soft-border">
                <ShoppingBag size={48} className="mx-auto text-dark-text/20 mb-4" />
                <h3 className="text-2xl font-bold text-primary-navy mb-2">No products found</h3>
                <p className="text-dark-text/60 mb-8">Try adjusting your filters or search query.</p>
                <button onClick={clearFilters} className="bg-primary-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-accent-cyan transition-colors">Clear All Filters</button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* 4. CART DRAWER */}
      {createPortal(
        <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isCartOpen ? 'visible' : 'invisible'}`}>
          {/* Overlay */}
          <div 
            className={`absolute inset-0 bg-primary-navy/40 transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Drawer content */}
          <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-out transform flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 border-b border-soft-border flex justify-between items-center bg-primary-navy text-white">
              <h2 className="text-xl font-bold font-heading flex items-center gap-2">
                <ShoppingCart size={24} /> Your Cart ({cartCount})
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40 py-20">
                  <ShoppingBag size={64} className="mb-4" />
                  <p className="text-xl font-bold">Your cart is empty</p>
                  <p className="text-sm">Add some medical supplies to get started.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 p-4 rounded-lg bg-light-gray border border-soft-border">
                      <div className="w-16 h-16 bg-light-gray rounded overflow-hidden shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-bold text-primary-navy text-sm">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-dark-text/30 hover:text-red-500 cursor-pointer">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-dark-text/40 mb-3">{item.brand}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3 bg-white rounded border border-soft-border px-2 py-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-accent-cyan cursor-pointer"><Minus size={14} /></button>
                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-accent-cyan cursor-pointer"><Plus size={14} /></button>
                          </div>
                          <div className="font-bold text-primary-navy">৳{(item.price * item.quantity).toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-6 border-t border-soft-border !mt-5 bg-light-gray/20 rounded-xl p-5 shadow-inner">
                    <div className="flex justify-between mb-6">
                      <span className="text-dark-text/60 font-bold">Total Amount</span>
                      <span className="text-2xl font-bold text-accent-cyan">৳{cartTotal.toLocaleString()}</span>
                    </div>
                    <button 
                      onClick={handleCheckout}
                      className="w-full bg-primary-navy text-white py-4 rounded-lg font-bold text-lg hover:bg-accent-cyan transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
                    >
                      Checkout Now <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 5. QUICK VIEW MODAL */}
      {quickViewProduct && createPortal(
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary-navy/60 backdrop-blur-sm" onClick={() => setQuickViewProduct(null)} />
          <div className="relative bg-white w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-light-gray overflow-hidden flex items-center justify-center">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8">
              <button onClick={() => setQuickViewProduct(null)} className="absolute top-4 right-4 p-2 hover:bg-light-gray rounded-lg transition-colors">
                <X size={24} />
              </button>
              <div className="text-xs font-bold text-accent-cyan uppercase tracking-wider mb-2">{quickViewProduct.category}</div>
              <h3 className="text-2xl font-bold text-primary-navy mb-2 font-heading">{quickViewProduct.name}</h3>
              <p className="text-dark-text/40 text-sm mb-4">{quickViewProduct.brand}</p>
              
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(quickViewProduct.rating) ? "text-yellow-400 fill-yellow-400" : "text-soft-border"} />
                ))}
                <span className="text-xs font-bold text-dark-text/40 ml-2">({quickViewProduct.rating})</span>
              </div>

              <div className="text-3xl font-bold text-primary-navy mb-8">৳{quickViewProduct.price.toLocaleString()}</div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="text-green-500" size={16} />
                  <span className="text-dark-text/60">Availability: <span className="text-green-600 font-bold">{quickViewProduct.stock}</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="text-green-500" size={16} />
                  <span className="text-dark-text/60">Professional Grade Quality</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  addToCart(quickViewProduct);
                  setQuickViewProduct(null);
                }}
                className="w-full bg-accent-cyan text-white py-4 rounded-lg font-bold mt-10 hover:bg-primary-navy transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Consumables;
