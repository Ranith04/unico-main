import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black py-16 sm:py-20 lg:py-28 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Brand & Social */}
          <div className="px-4 sm:px-0">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Image 
                src="/nav-icon.png" 
                alt="UNICO Logo" 
                width={120} 
                height={40} 
                priority 
                className="h-6 sm:h-8 w-auto" 
              />
            </div>
            
            {/* Tagline */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md">
              Your Trusted partner in AI solutions, creating smarter systems for smarter businesses.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/unico-international-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 4v7.6H8V8z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/unicointernational/?utm_source=qr&igsh=MXF4aWk3ZWhleTlyag%3D%3D#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Side - Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            
            {/* Sections Column */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Sections</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="#process" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Process</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Services</Link></li>
                <li><Link href="#benefits" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Benefits</Link></li>
                <li><Link href="#plans" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Plans</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Contact</Link></li>
              </ul>
            </div>
            
            {/* Pages Column */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Pages</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Home</Link></li>
                <li><span className="text-gray-400 text-xs sm:text-sm">Coming Soon</span></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">FAQ</Link></li>
              </ul>
            </div>
            
          </div>
        </div>
        
        {/* Bottom border and copyright */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center px-4 sm:px-0">
          <p className="text-gray-400 text-xs sm:text-sm">© 2024 UNICO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
