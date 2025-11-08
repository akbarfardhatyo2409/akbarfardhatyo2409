'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, this would send to a backend API
    // For now, we'll redirect to WhatsApp with the message
    const whatsappNumber = '6282390789595';
    const message = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F9E8C9] to-[#C9A24F]/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-[#000000] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-[#C9A24F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#000000] mb-8"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Get In Touch
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A24F] rounded-full flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-2">Our Location</h3>
                    <p className="text-gray-700">
                      Jl. Beringin No.12<br />
                      Kelurahan Padang Tiakar
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xl">
                    📱
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/6282390789595"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C9A24F] hover:text-[#000000] transition-colors text-lg font-medium"
                    >
                      0823 9078 9595
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Click to chat with us</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C9A24F] rounded-full flex items-center justify-center text-white text-xl">
                    🕐
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-2">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/6282390789595?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BA5A] transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#F9E8C9]/30 to-white rounded-lg p-8 shadow-xl">
              <h2
                className="text-3xl font-bold text-[#000000] mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Send Us a Message
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! Your message has been sent via WhatsApp.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24F] focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24F] focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24F] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your tailoring needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#000000] text-white px-8 py-4 rounded-lg hover:bg-[#C9A24F] transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9E8C9]/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#000000] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Visit Our Store
            </h2>
            <div className="w-24 h-1 bg-[#C9A24F] mx-auto"></div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817!2d100.3644!3d-0.9493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTYnNTcuNSJTIDEwMMKwMjEnNTEuOCJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riza Busana Exclusive Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
