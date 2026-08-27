import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <img src="/img/logo.png" alt="Avishtra Realtors" className="h-20 w-auto mb-6" />
          <p className="text-black max-w-sm leading-relaxed">
            Award-winning architecture and luxury construction firm dedicated to engineering timeless landmarks across the globe.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold tracking-wider text-sm mb-6 text-[#142B6D]">NAVIGATION</h4>
          <ul className="space-y-4 text-black">
            <li><a href="#plots" className="hover:text-[#142B6D] transition-colors">Plots</a></li>
            <li><a href="#about" className="hover:text-[#142B6D] transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-[#142B6D] transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-[#142B6D] transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold tracking-wider text-sm mb-6 text-[#142B6D]">CONTACT</h4>
          <ul className="space-y-4 text-black">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#142B6D]" />
              <span>avishtrarealtors@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#142B6D]" />
              <span>+91 93637 26148</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#142B6D] mt-1 shrink-0" />
              <span>100 Landmark Ave, Suite 500<br/>New York, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-black">
        <p>&copy; 2026 All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#142B6D] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#142B6D] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
