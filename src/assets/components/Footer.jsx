import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ added

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black pt-16 pb-6">
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <img src="./images/RMSCO_steel.jpeg" alt="RMSCO" className="h-12 mb-4" />
          <p className="text-gray-400 leading-relaxed text-sm">
            RMSCO is a trusted name in delivering high-quality steel Products
            for power, infrastructure, Solar & Heavy-Industrial sectors since 1970.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">

            <li>
              <Link to="/" className="hover:text-black transition block w-full">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-black transition block w-full">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-black transition block w-full">
                Products
              </Link>
            </li>

            <li>
              <Link to="/industries" className="hover:text-black transition block w-full">
                Industries
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-black transition block w-full">
                Contact
              </Link>
            </li>

          </ul>
        </div> 

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Steel Manufacturing</li>
            <li>Custom Fabrication</li>
            <li>Industrial Supply</li>
            <li>Infrastructure Solutions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          
          <div className="space-y-3 text-gray-400 text-sm">
            
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>D-80 Road - 7, Vishwakarma Industrial Area, Jaipur, Rajasthan - 302013</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 99290 63443</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@rmscoindia.com</span>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg">
            <FaLinkedin className="cursor-pointer hover:text-blue-500 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
            <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} RMSCO. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;