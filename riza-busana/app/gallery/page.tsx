'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - in production, these would be actual images
  const galleryImages = [
    {
      id: 1,
      title: "Men's Formal Suit",
      category: "Men's Wear",
      src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    },
    {
      id: 2,
      title: "Women's Evening Dress",
      category: "Women's Wear",
      src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    },
    {
      id: 3,
      title: "Wedding Gown",
      category: "Bridal",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    },
    {
      id: 4,
      title: "Children's Outfit",
      category: "Children's Wear",
      src: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&q=80",
    },
    {
      id: 5,
      title: "Office Blazer",
      category: "Office Wear",
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    },
    {
      id: 6,
      title: "Traditional Kebaya",
      category: "Traditional",
      src: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&q=80",
    },
    {
      id: 7,
      title: "Men's Casual Shirt",
      category: "Men's Wear",
      src: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    },
    {
      id: 8,
      title: "Women's Business Suit",
      category: "Office Wear",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    },
    {
      id: 9,
      title: "Bridal Party Dress",
      category: "Bridal",
      src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
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
            Our Gallery
          </h1>
          <div className="w-24 h-1 bg-[#C9A24F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Explore our collection of beautifully crafted garments
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-80 bg-gradient-to-br from-[#F9E8C9] to-[#C9A24F]/30">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                        {image.title}
                      </h3>
                      <p className="text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-[#C9A24F] transition-colors z-10"
            aria-label="Close"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white text-4xl hover:text-[#C9A24F] transition-colors z-10"
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white text-4xl hover:text-[#C9A24F] transition-colors z-10"
            aria-label="Next"
          >
            ›
          </button>

          <div className="max-w-5xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[70vh]">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-[#C9A24F]">{galleryImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9E8C9]/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#000000] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Inspired by What You See?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us create something beautiful for you
          </p>
          <a
            href="https://wa.me/6282390789595?text=Hello%2C%20I%20would%20like%20to%20order%20custom%20tailoring%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#000000] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#C9A24F] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Order Now
          </a>
        </div>
      </section>
    </main>
  );
}
