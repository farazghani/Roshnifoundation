// src/pages/donate.tsx
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Donate() {
  return (
    <div>
        <Header />
         <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Support Roshni Foundation
          </motion.h1>
          <p className="text-lg md:text-xl">
            Your kindness can unlock doors to education and hope.
          </p>
        </div>
      </section>

      {/* Donation Info */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Donate via Email
          </h2>
          <p className="text-gray-700 mb-6">
            Send us an email and our team will guide you through the donation process.  
            Even a small step can bring big change.
          </p>
          <a
            href="mailto:theraysfoundation.roshni@gmail.com?subject=Donation%20for%20Roshni%20Foundation&body=Hello%20Roshni%20Foundation,%0D%0A%0D%0AI%20would%20like%20to%20make%20a%20donation.%20Please%20share%20the%20details."
            className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Send Email to Donate
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Every Contribution Matters</h2>
        <p className="max-w-2xl mx-auto mb-8">
          With just <span className="font-semibold">₹500 per month</span>, you can 
          change a child’s life by giving them access to quality education.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
       </div>
       <Footer />
       </div>

  );
}
