import { FaRocket, FaHandHoldingUsd, FaGlobeAsia } from "react-icons/fa";

const stats = [
  {
    icon: <FaRocket className="text-blue-600 text-5xl md:text-6xl" />,
    value: "12+",
    label: "Projects Completed",
  },
  {
    icon: <FaHandHoldingUsd className="text-blue-600 text-5xl md:text-6xl" />,
    value: "10",
    label: "Monthly Donors",
  },
  {
    icon: <FaGlobeAsia className="text-blue-600 text-5xl md:text-6xl" />,
    value: "2",
    label: "Partners in India",
  },
];

const StatsSection = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-12 justify-between items-center gap-10 md:gap-0">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center gap-3 text-center">
          <div>{stat.icon}</div>
          <div className="text-4xl md:text-6xl font-bold">{stat.value}</div>
          <p className="text-gray-600 font-medium leading-tight text-base md:text-lg">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
