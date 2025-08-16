import { FC } from "react";
import { FaBookOpen, FaFaucet, FaClinicMedical, FaPeopleCarry } from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen className="text-blue-600 text-3xl" />,
    title: "Education",
    description: "Your gift can empower children with tools to learn.",
  },
  {
    icon: <FaFaucet className="text-blue-600 text-3xl" />,
    title: "Clean Water",
    description: "Safe drinking water is a basic right, help us provide it.",
  },
  {
    icon: <FaClinicMedical className="text-blue-600 text-3xl" />,
    title: "Health Care",
    description: "Everyone deserves access to medical facilities.",
  },
  {
    icon: <FaPeopleCarry className="text-blue-600 text-3xl" />,
    title: "Local communities",
    description: "Help us support families and individuals in finding shelter and stability.",
  },
];

const ImpactSection: FC = () => {
  return (
    <section className="w-full px-6 sm:px-12 py-12 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center sm:items-start gap-2">
            {feature.icon}
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
