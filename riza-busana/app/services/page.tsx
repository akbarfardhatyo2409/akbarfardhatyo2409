import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Riza Busana Exclusive',
  description: 'Professional tailoring services for men, women, and children including office wear, wedding gowns, and custom designs.',
};

export default function ServicesPage() {
  const whatsappNumber = '6282390789595';

  const services = [
    {
      title: "Men's, Women's & Children's Clothing",
      description: "We specialize in creating custom-tailored clothing for the entire family. From everyday wear to special occasions, each piece is crafted with meticulous attention to detail, ensuring perfect fit and lasting quality. Our experienced tailors work closely with you to bring your vision to life.",
      features: [
        "Custom measurements for perfect fit",
        "Wide selection of premium fabrics",
        "Traditional and modern designs",
        "Alterations and repairs available",
      ],
      icon: "👔",
    },
    {
      title: "Office Wear for Men & Women",
      description: "Professional attire that makes a statement in the workplace. We create sophisticated office wear that combines style, comfort, and professionalism. Whether you need formal suits, business casual outfits, or corporate uniforms, we deliver excellence in every stitch.",
      features: [
        "Business suits and blazers",
        "Formal shirts and blouses",
        "Corporate uniforms",
        "Professional alterations",
      ],
      icon: "💼",
    },
    {
      title: "Kebaya / Wedding Gown",
      description: "Make your special day unforgettable with our exquisite wedding attire. We design and create stunning kebaya and wedding gowns that reflect your unique style and personality. From traditional elegance to modern sophistication, we bring your dream dress to life with exceptional craftsmanship.",
      features: [
        "Custom wedding gown design",
        "Traditional kebaya tailoring",
        "Bridal party attire",
        "Fittings and adjustments included",
      ],
      icon: "👰",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F9E8C9] to-[#C9A24F]/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-[#000000] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Services
          </h1>
          <div className="w-24 h-1 bg-[#C9A24F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Discover our comprehensive range of tailoring services designed to meet all your fashion needs
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Icon/Image Side */}
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-[#F9E8C9] to-[#C9A24F]/30 rounded-full flex items-center justify-center text-9xl shadow-xl">
                    {service.icon}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1">
                  <h2
                    className="text-3xl md:text-4xl font-bold text-[#000000] mb-6"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#C9A24F] mb-4">What We Offer:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#C9A24F] mr-3 text-xl">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello, I would like to consult about ${service.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BA5A] transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                  >
                    Consult Now via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9E8C9]/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#000000] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Our Process
            </h2>
            <div className="w-24 h-1 bg-[#C9A24F] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              From consultation to final fitting, we ensure a seamless experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your needs and preferences' },
              { step: '02', title: 'Measurement', desc: 'Precise measurements for perfect fit' },
              { step: '03', title: 'Creation', desc: 'Expert craftsmanship in action' },
              { step: '04', title: 'Fitting', desc: 'Final adjustments and delivery' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-[#C9A24F]/20 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#000000] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today for a free consultation
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              'Hello, I would like to inquire about your tailoring services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A24F] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#F9E8C9] hover:text-[#000000] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </main>
  );
}
