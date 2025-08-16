import Header from "@/components/Header";
// src/pages/gallery.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const images = [
  { src: "/g1.jpg", alt: "Mother’s Day Celebration" },
  { src: "/g3.png", alt: "Republic Day Celebration" },
  { src: "/g4.png", alt: "Christmas Celebration" },
  { src: "/g5.jpg", alt: "Student Painting Competition" },
  { src: "/g6.jpg", alt: "Daily Life at Roshni" },
  { src: "/g7.jpg", alt: "Daily Life at Roshni" },
  { src: "/g8.jpg", alt: "Daily Life at Roshni" },
  { src: "/g9.jpg", alt: "Daily Life at Roshni" },
  { src: "/g10.jpg", alt: "Daily Life at Roshni" },
  { src: "/g11.jpg", alt: "Daily Life at Roshni" },
  { src: "/g12.jpg", alt: "Daily Life at Roshni" },
  { src: "/g13.jpg", alt: "Daily Life at Roshni" },
  { src: "/g14.jpg", alt: "Daily Life at Roshni" },
  { src: "/g15.jpg", alt: "Daily Life at Roshni" },
  { src: "/g16.jpeg", alt: "Daily Life at Roshni" },
  { src: "/g17.jpg", alt: "Daily Life at Roshni" },
  { src: "/g18.jpg", alt: "Daily Life at Roshni" },
  { src: "/g19.jpg", alt: "Daily Life at Roshni" },
  { src: "/g20.jpg", alt: "Daily Life at Roshni" },
  { src: "/g21.jpg", alt: "Daily Life at Roshni" },
  { src: "/g22.jpg", alt: "Daily Life at Roshni" },
  { src: "/g23.jpg", alt: "Daily Life at Roshni" },
  { src: "/g24.jpg", alt: "Daily Life at Roshni" },
  { src: "/g25.jpeg", alt: "Daily Life at Roshni" },
  { src: "/g26.jpeg", alt: "Daily Life at Roshni" },
  { src: "/g27.jpeg", alt: "Daily Life at Roshni" },
  { src: "/g28.jpeg", alt: "Daily Life at Roshni" },
  { src: "/group .jpg", alt: "Daily Life at Roshni" }

];

export default function Gallery() {
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
            Our Gallery
          </motion.h1>
          <p className="text-lg md:text-xl">
            A glimpse of moments, celebrations, and everyday life at Roshni Foundation.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative w-full h-64 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
}
