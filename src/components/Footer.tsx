import { FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-12 bg-white border-t">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left - Logo + Newsletter */}
        <div className="flex-1">
          <Image src="/logo.png" alt="Roshni Foundation Logo" width={160} height={40} className="mb-4" />
          <p className="text-sm text-gray-700 mb-4 max-w-md">
            Stay informed about our latest features and releases by joining our newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter email address"
              className="border px-4 py-2 rounded w-full sm:w-72"
            />
            <button className="border px-5 py-2 rounded bg-white hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our organization.
          </p>
        </div>

        {/* Middle - Links */}
        <div className="flex-1">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>About Us</li>
            <li>Our Impact</li>
            <li>Get Involved</li>
            <li>Contact Us</li>
            <li>Donate</li>
          </ul>
        </div>

        {/* Right - Socials */}
        <div className="flex-1">
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a
                href="https://www.instagram.com/foundation.roshni?igsh=dW1xdGFocDE1eW5y&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@RoshniTheRaysFoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaYoutube /> YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025 Roshni Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

