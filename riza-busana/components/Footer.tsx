import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold text-[#C9A24F] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Riza Busana
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              High-quality custom tailoring for men, women, and children. Customer satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C9A24F]">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#C9A24F] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C9A24F]">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Jl. Beringin No.12</p>
              <p>Kel. Padang Tiakar</p>
              <p className="mt-3">
                <a
                  href="https://wa.me/6282390789595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A24F] transition-colors duration-300"
                >
                  WhatsApp: 0823 9078 9595
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Riza Busana Exclusive. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
