import { FaRocket, FaHandHoldingUsd, FaGlobeAsia } from "react-icons/fa";

const stats = [
  {
    icon: <FaRocket className="text-blue-600 text-6xl" />,
    value: "12+",
    label: "Projects Completed",
  },
  {
    icon: <FaHandHoldingUsd className="text-blue-600 text-6xl" />,
    value: "10",
    label: "Monthly Donors",
  },
  {
    icon: <FaGlobeAsia className="text-blue-600 text-6xl" />,
    value: "2",
    label: "Partners in India",
  },
];

const StatsSection = () => {
  return (
    <section className="flex w-[1440px] h-[296.118px] px-[112px] py-[60px] justify-between items-start mx-auto">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center gap-[13px] text-center">
          <div>{stat.icon}</div>
          <div className="text-6xl font-bold">{stat.value}</div>
          <p className="text-gray-600 font-medium leading-tight text-lg">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
