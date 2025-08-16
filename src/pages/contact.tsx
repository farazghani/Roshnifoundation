
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
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
            Contact Us
          </motion.h1>
          <p className="text-lg md:text-xl">
            We’d love to hear from you. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Email</h3>
            <p className="text-gray-700">theraysfoundation.roshni@gmail.com</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Phone</h3>
            <p className="text-gray-700">+91 8851907558</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Address</h3>
            <p className="text-gray-700">Salarpur, Noida, Delhi NCR</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Send Us a Message
          </h2>
          <form
            action="mailto:roshnifoundation@example.org"
            method="POST"
            encType="text/plain"
            className="space-y-6 bg-white p-8 rounded-xl shadow"
          >
            <div>
              <label className="block text-left text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
}
