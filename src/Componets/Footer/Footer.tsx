import {
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaLinkedinIn,
  FaBehance,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0b1c3f] text-white px-6 mt-8 py-12 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Contact */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src="https://newtackserviceplatform.com/public/front/images//flogo.webp" alt="Fixhero Logo" className="w-40 h-10" />
            
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <div className="bg-[#1e3057] rounded-md p-4 flex items-start gap-4 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
              <FaPhoneAlt className="text-xl mt-1 text-orange-400" />
              <div>
                <p className="text-sm text-gray-300">Call Us</p>
                <p className="font-bold text-lg">(+684) 555-0102</p>
              </div>
            </div>
            <div className="bg-[#1e3057] rounded-md p-4 flex items-start gap-4 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
              <FaEnvelope className="text-xl mt-1 text-orange-400" />
              <div>
                <p className="text-sm text-gray-300">Email Us</p>
                <p className="font-bold text-lg">info@example.com</p>
              </div>
            </div>
            <div className="bg-[#1e3057] rounded-md p-4 flex items-start gap-4 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
              <FaMapMarkerAlt className="text-xl mt-1 text-orange-400" />
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p className="font-bold text-lg">2972 Westheimer 96 Rd.</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <div className="hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1  w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white">
              <FaFacebookF />
            </div>
            <div className="hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white">
              <FaInstagram />
            </div>
            <div className="hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white">
              <FaTimes />
            </div>
            <div className="hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white">
              <FaLinkedinIn />
            </div>
            <div className="hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white">
              <FaBehance />
            </div>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h3 className="text-lg font-bold border-l-4 border-orange-400 pl-2 mb-4">About Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Company History</li>
            <li>Our Team</li>
            <li>Our Projects</li>
            <li>Work Process</li>
            <li>Pricing Plan</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold border-l-4 border-orange-400 pl-2 mb-4">Useful Information</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Contact Us</li>
            <li>Our Team</li>
            <li>Cost Calculator</li>
            <li>Testimonials</li>
            <li>Pricing Plan</li>
            <li>Faq</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold border-l-4 border-orange-400 pl-2 mb-4">Additional Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Latest News</li>
            <li>Our Services</li>
            <li>General Repairs</li>
            <li>Our Projects</li>
            <li>Work Process</li>
            <li>Service Area</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="mt-12 bg-[#1e3057] px-6 py-6 rounded-md flex flex-col md:flex-row items-center justify-between">
        <p className="text-white text-lg font-semibold">
          Get Free Estimate. <span className="text-gray-300 font-normal">Our online scheduling and payment system is safe</span>
        </p>
        <button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold">
          REQUEST WITH ONLINE FORM
        </button>
      </div> */}

      {/* Bottom */}
      <div className="text-gray-400 text-sm mt-8 text-center md:text-left md:flex md:justify-between">
        <p>© 2025 Fixhero. Designed By RSTheme.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <span>Sitemap</span>
          <span>•</span>
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms of use</span>
        </div>
      </div>
    </footer>
  );
}
