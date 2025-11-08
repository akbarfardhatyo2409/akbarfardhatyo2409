import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: "Men's, Women's & Children's Clothing",
      description: "Custom-tailored clothing for the entire family, crafted with precision and care.",
      icon: "👔",
    },
    {
      title: "Office Wear for Men & Women",
      description: "Professional attire that combines style and comfort for your workplace needs.",
      icon: "💼",
    },
    {
      title: "Kebaya / Wedding Gown",
      description: "Elegant traditional and modern wedding attire designed for your special day.",
      icon: "👰",
    },
  ];

  const whatsappNumber = '6282390789595';
  const message = encodeURIComponent('Hello, I would like to order custom tailoring services.');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9E8C9] via-[#F9E8C9]/80 to-[#C9A24F]/30 pt-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#C9A24F] rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-[#C9A24F] rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#C9A24F]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#000000] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Riza Busana Exclusive
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-4">
              High-Quality Custom Tailoring
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              for Men, Women, and Children
            </p>
            <div className="inline-block bg-[#C9A24F] text-white px-6 py-3 rounded-lg mb-12 shadow-lg">
              <p className="text-lg font-semibold">Customer Satisfaction is Our Priority</p>
            </div>
            <div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#000000] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#C9A24F] transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center space-x-8 text-6xl opacity-20">
            <span>✂️</span>
            <span>🧵</span>
            <span>📏</span>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#000000] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#C9A24F] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer a wide range of tailoring services to meet all your fashion needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#F9E8C9]/30 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#C9A24F]/20"
              >
                <div className="text-6xl mb-4 text-center">{service.icon}</div>
                <h3
                  className="text-2xl font-bold text-[#000000] mb-4 text-center"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-center">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`I'm interested in ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#C9A24F] text-white px-6 py-3 rounded-lg hover:bg-[#000000] transition-colors duration-300 font-medium"
                  >
                    Consult Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border-2 border-[#C9A24F] text-[#C9A24F] px-8 py-3 rounded-full hover:bg-[#C9A24F] hover:text-white transition-all duration-300 font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9E8C9]/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#000000] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-[#C9A24F] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                Quality Craftsmanship
              </h3>
              <p className="text-gray-700">
                Every stitch is made with precision and attention to detail
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                Premium Materials
              </h3>
              <p className="text-gray-700">
                We use only the finest fabrics for lasting quality
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#000000] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                Customer Satisfaction
              </h3>
              <p className="text-gray-700">
                Your happiness is our top priority in every project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#000000] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Ready to Create Your Perfect Outfit?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today and let's bring your vision to life
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A24F] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#F9E8C9] hover:text-[#000000] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
