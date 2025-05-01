import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative text-white overflow-hidden bg-black">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-center bg-cover opacity-10"
          style={{ 
            backgroundImage: 'url("/api/placeholder/1920/1080")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black" />
        
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }} 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-wider">
              <span className="inline-block relative">
                Contact
                <span className="absolute -bottom-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></span>
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto font-light">
              Every frame has a story. Let's discuss how to capture yours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info - 2 columns on md screens */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <h3 className="text-2xl font-serif mb-6 text-white">Studio Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-white/30 transition-all duration-300 mr-4">
                      <MapPin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-200">Studio Location</h4>
                      <p className="text-gray-500 mt-1">123 Photography Lane,<br />Paris, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-white/30 transition-all duration-300 mr-4">
                      <Phone className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-200">Contact Number</h4>
                      <p className="text-gray-500 mt-1">+33 (0) 1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-white/30 transition-all duration-300 mr-4">
                      <Mail className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-200">Email Address</h4>
                      <p className="text-gray-500 mt-1">hello@elenanoir.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-4 text-white">Working Hours</h3>
                <div className="space-y-2 text-gray-500">
                  <p className="flex justify-between border-b border-zinc-800 pb-2">
                    <span>Monday - Friday</span>
                    <span>9:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between border-b border-zinc-800 pb-2">
                    <span>Saturday</span>
                    <span>10:00 - 16:00</span>
                  </p>
                  <p className="flex justify-between border-b border-zinc-800 pb-2">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-5 text-white">Follow My Work</h3>
                <div className="flex space-x-4">
                  <a href="#" className="group">
                    <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-white/30 group-hover:bg-zinc-800 transition-all duration-300">
                      <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>
                  <a href="#" className="group">
                    <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-white/30 group-hover:bg-zinc-800 transition-all duration-300">
                      <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>
                  <a href="#" className="group">
                    <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-white/30 group-hover:bg-zinc-800 transition-all duration-300">
                      <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form - 3 columns on md screens */}
            <div className="md:col-span-3 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-lg blur" />
              <div className="relative bg-zinc-900/80 border border-zinc-800 p-8 rounded-lg">
                <h3 className="text-2xl font-serif mb-6 text-white">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 mb-6">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-serif text-white mb-2">Message Received</h4>
                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 text-white rounded-none focus:border-white/30 focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-gray-500"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 text-white rounded-none focus:border-white/30 focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-gray-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 text-white rounded-none focus:border-white/30 focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-gray-500"
                        placeholder="Photography Session Inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 text-white rounded-none focus:border-white/30 focus:outline-none focus:ring-0 transition-colors duration-300 placeholder-gray-500"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>
                    
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-none transition-all duration-300 flex items-center justify-center group disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/2 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/2 blur-3xl" />
    </section>
  );
};

export default Contact;