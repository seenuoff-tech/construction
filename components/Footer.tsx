export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-widest mb-6"></h2>
          <p className="text-white/50 max-w-sm leading-relaxed">
            Award-winning architecture and luxury construction firm dedicated to engineering timeless landmarks across the globe.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold tracking-wider text-sm mb-6 text-gold-500">NAVIGATION</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold tracking-wider text-sm mb-6 text-gold-500">CONTACT</h4>
          <ul className="space-y-4 text-white/60">
            <li>info@company.com</li>
            <li>+1 (555) 123-4567</li>
            <li>100 Landmark Ave, Suite 500<br/>New York, NY 10001</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
        <p>&copy; 2026 All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
