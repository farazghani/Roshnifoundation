// src/pages/about.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function About() {
  return (
   <div>
    <Header />
    <div className="min-h-screen bg-gray-50 flex flex-col">
  {/* Hero Section */}
  <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        About Roshni Foundation
      </motion.h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto">
        Lighting the path of education, empowerment, and equality.
      </p>
    </div>
  </section>

  {/* Introduction */}
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-6 space-y-6 text-gray-700">
      <p>
        India is a growing economy with rising demand for computer and IT skills. 
        However, development has often sidelined marginalized sections of society. 
        To address this, <span className="font-semibold">Roshni – The Rays Foundation</span> 
        was founded on <span className="font-semibold">14th March 2014 by Mr. Mansoor Alam</span>, 
        with the vision to deliver inclusive education and uplift underprivileged communities.
      </p>
      <p>
        Starting in Salarpur, a slum area near Delhi-NCR, the foundation has been committed 
        to bringing marginalized children into the educational fold, ensuring that they receive 
        quality education and opportunities for holistic growth.
      </p>
    </div>
  </section>

  {/* Chairman Message */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <div className="relative w-full h-64">
        <Image
          src="/about1.jpeg"
          alt="Chairman"
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">From the Chairman</h2>
        <p className="text-gray-700 mb-4">
          “It is my foremost aim to deliver quality education to all deprived sections 
          of Indian society. Our vision is to ensure that underprivileged communities 
          receive qualitative education so they can thrive in modern India.”
        </p>
        <p className="font-semibold">— Mansoor Alam, Founder & Chairman</p>
      </div>
    </div>
  </section>

  {/* Secretary Message */}
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Message from the Secretary</h2>
        <p className="text-gray-700 mb-4">
          “While literacy has improved in India, we still face a wide gap in quality 
          education, especially between male and female literacy rates. Our mission is to 
          bridge this gap and ensure equal access to education for every child, regardless 
          of gender or background.”
        </p>
        <p className="font-semibold">— Faiza Mansoor, Secretary</p>
      </div>
      <div className="relative w-full h-64 order-1 md:order-2">
        <Image
          src="/about2.jpeg"
          alt="Secretary"
          fill
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  </section>

  {/* Aims & Objectives */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Aims & Objectives</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Quality Education</h3>
          <p>Spreading quality education with focus on IT skills, moral values, and critical thinking.</p>
        </div>
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Cultural Importance</h3>
          <p>Celebrating diversity through events and ensuring secular, inclusive growth.</p>
        </div>
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Skill Development</h3>
          <p>Establishing training centers to empower low-skilled youth with better livelihood opportunities.</p>
        </div>
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Women Empowerment</h3>
          <p>Providing special training and self-defense programs to empower women.</p>
        </div>
      </div>
    </div>
  </section>

  {/* Sponsor a Child CTA */}
 <section className="py-16 bg-blue-800 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">Sponsor a Child</h2>
  <p className="max-w-2xl mx-auto mb-8">
    With just <span className="font-semibold">₹500 per month</span> or{" "}
    <span className="font-semibold">₹6,000 per year</span>, you can transform a
    child’s future by giving them access to quality education and vocational
    training.
  </p>
  <Link
    href="/contact"
    className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
  >
    Become a Sponsor
  </Link>
</section>

  {/* Gallery */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-10">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="relative w-full h-60">
          <Image src="/group .jpg" alt="Mother's Day Event" fill className="rounded-xl object-cover" />
        </div>
        <div className="relative w-full h-60">
          <Image src="/g14.jpg" alt="Independence Day" fill className="rounded-xl object-cover" />
        </div>
        <div className="relative w-full h-60">
          <Image src="/g34.jpeg" alt="Student Painting Competition" fill className="rounded-xl object-cover" />
        </div>
      </div>
    </div>
  </section>
</div>
<Footer />
  </div>
  );
}
