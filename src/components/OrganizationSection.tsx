import Image from "next/image";
import { FaQuoteLeft, FaHeart, FaEye, FaStar } from "react-icons/fa";

const OrganizationSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-[72px] py-[80px] space-y-[60px]">
      {/* Top Section: Testimonial */}
      <div className="flex gap-[60px]">
        {/* Left: Testimonial */}
        <div className="flex-1 space-y-4">
          <FaQuoteLeft className="text-blue-900 text-4xl" />
          <h2 className="text-6xl font-bold leading-snug">
            Together, we can <br /> change lives for the b...
          </h2>
          <p className="text-gray-600 text-lg">
            Every action counts when we unite for a greater cause. Your support helps bring hope,
            dignity, and opportunity to those who need it most. Together, we can rewrite stories and
            uplift lives.
          </p>
          <div>
            <p className="font-semibold">George Henry</p>
            <p className="text-base text-gray-500">Donor</p>
          </div>

          {/* Carousel Dots */}
          <div className="flex space-x-2 mt-2">
            <div className="w-2.5 h-2.5 bg-blue-900 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <Image
            src="/placeholder.png" // replace with your actual image
            width={500}
            height={400}
            alt="Children with balloons"
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Section: About */}
      <div className="grid grid-cols-2 gap-[60px] items-start">
        {/* Left: Mission / Vision / Values */}
        <div className="space-y-6">
          <h3 className="text-4xl font-bold">About our Organization</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaHeart className="text-blue-900 text-4xl mt-1" />
              <div>
                <h3 className="font-bold">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  We are committed to creating meaningful change through compassion and action. Our mission is to uplift communities by addressing urgent needs and empowering individuals to thrive.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEye className="text-blue-900 text-4xl mt-1" />
              <div>
                <h3 className="font-bold">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  We envision a world where every individual has equal access to opportunity, dignity, and support — a world driven by empathy, equity, and collective progress.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaStar className="text-blue-900 text-4xl mt-1" />
              <div>
                <h3 className="font-bold">Our Values</h3>
                <p className="text-gray-600 text-lg">
                 We believe in integrity, inclusiveness, and sustainable impact. Our core values guide every decision we make: compassion in service, accountability in action, and collaboration for long-term change.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Two stacked images */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/placeholder2.png" // replace with your actual image
            width={300}
            height={250}
            alt="Child behind gate"
            className="rounded-xl object-cover w-full h-full"
          />
          <Image
            src="/placeholder3.png" // replace with your actual image
            width={300}
            height={250}
            alt="Kids in corridor"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
