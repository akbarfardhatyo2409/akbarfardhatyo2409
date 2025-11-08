import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - Riza Busana Exclusive',
  description: 'Learn about Riza Busana Exclusive, your trusted tailoring partner in Padang Tiakar, where every stitch tells a story.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F9E8C9] to-[#C9A24F]/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-[#000000] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            About Us
          </h1>
          <div className="w-24 h-1 bg-[#C9A24F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Where craftsmanship meets passion
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=800&q=80"
                alt="Sewing workspace at Riza Busana Exclusive"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#000000] mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Our Story
              </h2>
              <div className="w-20 h-1 bg-[#C9A24F] mb-8"></div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Welcome to <span className="font-semibold text-[#C9A24F]">Riza Busana Exclusive</span>, 
                  your trusted partner in custom tailoring located in the heart of Kelurahan Padang Tiakar. 
                  We are dedicated to providing high-quality tailoring services that exceed expectations.
                </p>
                
                <p>
                  At Riza Busana Exclusive, we believe that <span className="font-semibold italic">every stitch tells a story</span>. 
                  Each garment we create is a testament to our commitment to excellence, attention to detail, 
                  and passion for the art of tailoring. Whether you're looking for everyday wear, professional 
                  office attire, or that perfect outfit for a special occasion, we bring your vision to life 
                  with precision and care.
                </p>
                
                <p>
                  Our experienced team of tailors combines traditional craftsmanship with modern techniques 
                  to deliver garments that not only fit perfectly but also reflect your unique style and 
                  personality. We work with premium fabrics and materials to ensure that every piece we 
                  create stands the test of time.
                </p>
                
                <p className="font-semibold text-[#000000]">
                  Customer satisfaction is our priority, and we take pride in building lasting relationships 
                  with our clients through quality work and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9E8C9]/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#000000] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Our Values
            </h2>
            <div className="w-24 h-1 bg-[#C9A24F] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h3
                className="text-2xl font-bold text-[#000000] mb-4 text-center"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Excellence
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                We strive for perfection in every garment we create, ensuring the highest standards 
                of quality and craftsmanship.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4 text-center">💖</div>
              <h3
                className="text-2xl font-bold text-[#000000] mb-4 text-center"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Passion
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Our love for tailoring drives us to continuously improve and deliver exceptional 
                results that exceed expectations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4 text-center">🤝</div>
              <h3
                className="text-2xl font-bold text-[#000000] mb-4 text-center"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Integrity
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                We build trust through honest communication, fair pricing, and delivering on our 
                promises every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#000000] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Our Expertise
            </h2>
            <div className="w-24 h-1 bg-[#C9A24F] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Years of experience in creating perfect garments for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '5000+', label: 'Garments Created' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div
                  className="text-5xl font-bold text-[#C9A24F] mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {stat.number}
                </div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
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
            Experience the Difference
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Visit us today and discover why our clients trust us with their most important garments
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#C9A24F] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#F9E8C9] hover:text-[#000000] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
