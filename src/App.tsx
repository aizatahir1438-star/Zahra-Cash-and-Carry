/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MapPin, MessageCircle, Facebook, Instagram, Star, CheckCircle, ShoppingBasket, Apple, Carrot, Beef, Dog, ChevronRight } from 'lucide-react';

// Contact Info (Placeholders for easy update)
const CONTACT = {
  phone: "+92 300 0000000",
  whatsapp: "923000000000", // For wa.me link
  address: "Gujranwala, Punjab, Pakistan",
  facebook: "#",
  instagram: "#"
};

export default function App() {
  return (
    <div className="min-h-screen bg-light text-dark font-sans pb-16 md:pb-0 scroll-smooth">
      {/* Sticky Contact Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex justify-around p-3 md:hidden">
        <a href={`https://wa.me/${CONTACT.whatsapp}`} className="flex flex-col items-center text-primary">
          <MessageCircle size={24} />
          <span className="text-xs font-medium mt-1">WhatsApp</span>
        </a>
        <a href={`tel:${CONTACT.phone}`} className="flex flex-col items-center text-primary">
          <Phone size={24} />
          <span className="text-xs font-medium mt-1">Call</span>
        </a>
        <a href="#contact" className="flex flex-col items-center text-primary">
          <MapPin size={24} />
          <span className="text-xs font-medium mt-1">Directions</span>
        </a>
      </div>

      {/* Header / Nav (Desktop) */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBasket className="text-primary h-8 w-8" />
            <h1 className="text-2xl font-bold text-primary tracking-tight">Zahra <span className="text-secondary">Cash & Carry</span></h1>
          </div>
          <nav className="hidden md:flex gap-6 font-medium text-dark/80">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#categories" className="hover:text-primary transition-colors">Categories</a>
            <a href="#promotions" className="hover:text-primary transition-colors">Offers</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="hidden md:flex gap-3">
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-dark text-white overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
              alt="Fresh Groceries" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/40"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start">
            <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Your Neighborhood Mart
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
              Fresh Groceries, Fruits, Vegetables, Quality Meat & Pet Supplies
              <span className="block text-secondary mt-2">— All in One Place</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
              Discover the best quality daily essentials at unbeatable prices. Visit us today or order via WhatsApp!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-transform hover:scale-105">
                <MessageCircle size={20} />
                Contact on WhatsApp
              </a>
              <a href="#contact" className="bg-white text-dark px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-transform hover:scale-105">
                <MapPin size={20} />
                Visit Our Store
              </a>
              <a href={`tel:${CONTACT.phone}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-transform hover:scale-105">
                <Phone size={20} />
                Call Now
              </a>
            </div>
            <div className="mt-12 flex gap-4">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors"><Facebook size={28} /></a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors"><Instagram size={28} /></a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors"><MessageCircle size={28} /></a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-dark mb-6">About Zahra Cash & Carry</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Zahra Cash & Carry is a trusted neighborhood mart offering fresh groceries, fruits, vegetables, hygienic meat, and quality pet supplies.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our goal is to provide families with fresh, affordable, and high-quality daily essentials in one convenient place.
                </p>
                <div className="space-y-4">
                  {[
                    "Fresh fruits and vegetables daily",
                    "Hygienic meat and poultry",
                    "Affordable grocery prices",
                    "Pet supplies for your furry friends",
                    "Friendly customer service"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={24} />
                      <span className="text-dark font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Store Interior" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-3xl font-bold mb-1">100%</p>
                  <p className="font-medium">Freshness Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-bold text-dark mb-4">Our Product Categories</h3>
              <p className="text-gray-600 text-lg">Browse our wide selection of high-quality products. Contact us to check availability or place an order.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Grocery */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=1974&auto=format&fit=crop" alt="Grocery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h4 className="text-2xl font-bold text-white flex items-center gap-2"><ShoppingBasket /> Grocery Items</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">Daily Essentials</p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Rice, Flour & Sugar</li>
                    <li>• Cooking Oil & Ghee</li>
                    <li>• Tea, Coffee & Beverages</li>
                    <li>• Snacks & Frozen Foods</li>
                  </ul>
                  <a href={`https://wa.me/${CONTACT.whatsapp}?text=I'm interested in Grocery Items`} target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Ask on WhatsApp <ChevronRight size={18} />
                  </a>
                </div>
              </div>

              {/* Fruits */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1974&auto=format&fit=crop" alt="Fruits" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h4 className="text-2xl font-bold text-white flex items-center gap-2"><Apple /> Fresh Fruits</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-secondary mb-4 font-bold uppercase tracking-wide">Farm Fresh Fruits Available Daily</p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Apples & Bananas</li>
                    <li>• Mangoes & Oranges</li>
                    <li>• Grapes & Berries</li>
                    <li>• Seasonal Fruits</li>
                  </ul>
                  <a href={`https://wa.me/${CONTACT.whatsapp}?text=I'm interested in Fresh Fruits`} target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Ask on WhatsApp <ChevronRight size={18} />
                  </a>
                </div>
              </div>

              {/* Vegetables */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=1989&auto=format&fit=crop" alt="Vegetables" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h4 className="text-2xl font-bold text-white flex items-center gap-2"><Carrot /> Fresh Vegetables</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary mb-4 font-bold uppercase tracking-wide">Fresh Vegetables Delivered Daily</p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Potatoes & Onions</li>
                    <li>• Tomatoes & Spinach</li>
                    <li>• Cauliflower & Cabbage</li>
                    <li>• Seasonal Vegetables</li>
                  </ul>
                  <a href={`https://wa.me/${CONTACT.whatsapp}?text=I'm interested in Fresh Vegetables`} target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Ask on WhatsApp <ChevronRight size={18} />
                  </a>
                </div>
              </div>

              {/* Meat */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=1974&auto=format&fit=crop" alt="Meat" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h4 className="text-2xl font-bold text-white flex items-center gap-2"><Beef /> Fresh Meat</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-accent mb-4 font-bold uppercase tracking-wide">Hygienic & Freshly Cut Meat</p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Fresh Chicken</li>
                    <li>• Beef & Mutton</li>
                    <li>• Frozen Meat</li>
                    <li>• Special BBQ Cuts</li>
                  </ul>
                  <a href={`https://wa.me/${CONTACT.whatsapp}?text=I'm interested in Fresh Meat`} target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Ask on WhatsApp <ChevronRight size={18} />
                  </a>
                </div>
              </div>

              {/* Pet Supplies */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop" alt="Pet Supplies" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h4 className="text-2xl font-bold text-white flex items-center gap-2"><Dog /> Pet Supplies</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-secondary mb-4 font-bold uppercase tracking-wide">Everything for Your Pets</p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Dog & Cat Food</li>
                    <li>• Pet Snacks & Treats</li>
                    <li>• Pet Toys</li>
                    <li>• Grooming Accessories</li>
                  </ul>
                  <a href={`https://wa.me/${CONTACT.whatsapp}?text=I'm interested in Pet Supplies`} target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Ask on WhatsApp <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promotions Section */}
        <section id="promotions" className="py-20 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                  <span className="text-2xl">🔥</span>
                  <span className="font-bold tracking-wide uppercase">Special Offers This Week</span>
                </div>
                <h3 className="text-4xl font-bold mb-6">Save Big on Your Daily Essentials!</h3>
                <ul className="space-y-4 mb-8 text-lg">
                  <li className="flex items-center gap-3"><CheckCircle className="text-white" /> Discount on fresh chicken</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-white" /> Fruit bundle offers</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-white" /> Vegetable family packs</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-white" /> Pet food discounts</li>
                </ul>
                <a href={`https://wa.me/${CONTACT.whatsapp}?text=Tell me about this week's special offers!`} target="_blank" rel="noopener noreferrer" className="bg-white text-secondary px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg">
                  <MessageCircle size={24} />
                  Ask About Offers on WhatsApp
                </a>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" alt="Offer 1" className="rounded-2xl shadow-lg h-48 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=1974&auto=format&fit=crop" alt="Offer 2" className="rounded-2xl shadow-lg h-48 w-full object-cover mt-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-bold text-dark mb-4">Store Gallery</h3>
              <p className="text-gray-600 text-lg">Take a look inside Zahra Cash & Carry. Clean, organized, and fully stocked for you.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1974&auto=format&fit=crop" alt="Grocery Shelves" className="rounded-xl h-48 md:h-64 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" alt="Vegetable Section" className="rounded-xl h-48 md:h-64 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
              <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=1974&auto=format&fit=crop" alt="Meat Counter" className="rounded-xl h-48 md:h-64 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
              <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1974&auto=format&fit=crop" alt="Store Interior" className="rounded-xl h-48 md:h-64 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-bold text-dark mb-4">What Our Customers Say</h3>
              <p className="text-gray-600 text-lg">We pride ourselves on providing the best quality and service.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { text: "Fresh fruits and vegetables every day. Very good quality and reasonable prices.", author: "Ali R." },
                { text: "Best place for groceries and meat in the neighborhood. The staff is always helpful.", author: "Fatima S." },
                { text: "Great pet food options. I always find what I need for my cat here.", author: "Usman K." }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm relative">
                  <div className="flex text-secondary mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">"{testimonial.text}"</p>
                  <p className="font-bold text-dark">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-dark text-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="p-12 md:p-16 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h3>
                  <p className="text-gray-400 mb-10 text-lg">Have a question or want to place an order? We're just a message away.</p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full text-primary">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Store Location</h4>
                        <p className="text-gray-300">{CONTACT.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/20 p-3 rounded-full text-secondary">
                        <Phone size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Phone</h4>
                        <a href={`tel:${CONTACT.phone}`} className="text-gray-300 hover:text-white transition-colors">{CONTACT.phone}</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                        <MessageCircle size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                        <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-400 font-medium hover:text-green-300 transition-colors flex items-center gap-2">
                          Chat with us directly <ChevronRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-64 md:h-auto bg-gray-200 relative">
                  {/* Placeholder for Map - In a real app, use Google Maps iframe */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <div className="text-center p-6">
                      <MapPin size={48} className="mx-auto text-primary mb-4" />
                      <p className="text-xl font-bold text-white">Zahra Cash & Carry</p>
                      <p className="text-gray-400 mt-2">{CONTACT.address}</p>
                      <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors">Get Directions</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark border-t border-gray-800 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <ShoppingBasket className="text-primary h-6 w-6" />
              <span className="text-xl font-bold text-white">Zahra <span className="text-secondary">Cash & Carry</span></span>
            </div>
            <div className="flex gap-6">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><MessageCircle size={24} /></a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Zahra Cash & Carry. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
