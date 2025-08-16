"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const GoodActionsSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 max-w-7xl px-6 md:px-12 py-12 md:py-20 mx-auto">
      {/* Left: Image */}
      <motion.div
        className="w-full md:w-1/2"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/image2.png"
          alt="Children"
          width={600}
          height={500}
          className="rounded-lg object-cover w-full h-auto"
        />
      </motion.div>

      {/* Right: Content */}
      <motion.div
        className="w-full md:w-1/2"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex justify-start md:justify-end">
          <Image
            src="/1.svg"
            alt="Section Logo"
            width={64}
            height={64}
            className="mb-4"
          />
        </div>

        <h2 className="text-3xl md:text-6xl font-bold mb-4">
          Transforming Good Intentions into Good Actions
        </h2>
        <p className="text-gray-600 mb-10 text-base md:text-lg">
          We believe in turning compassion into impact. By connecting you with
          trusted causes, we make it easy to support the change you want to see.
          Your generosity becomes a force for real progress.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {[
            "Choose your cause",
            "Register on our website",
            "Donate the amount you like",
            "Stay tuned about cause",
          ].map((text, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-2"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
            >
              <div className="text-white bg-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {idx + 1}
              </div>
              <p className="text-sm md:text-md font-semibold">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GoodActionsSection;

