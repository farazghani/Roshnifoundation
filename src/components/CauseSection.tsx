import Image from "next/image";

const causes = [
  {
    title: "Clean Water for All",
    desc: "Safe drinking water is a basic right. Help us provide clean water to communities in need and prevent waterborne diseases.",
    image: "/1.png",
    goal: 12000,
    raised: 8000,
    donations: 14,
  },
  {
    title: "Improve Education",
    desc: "Education changes futures. Your gift can empower children with tools to learn, grow, and break the cycle of poverty.",
    image: "/2.png",
    goal: 15000,
    raised: 12000,
    donations: 25,
  },
  {
    title: "End Hunger",
    desc: "No one should sleep hungry. Join our mission to deliver food security and fight malnutrition across vulnerable regions.",
    image: "/3.png",
    goal: 200000,
    raised: 80000,
    donations: 6,
  },
];

const CausesSection = () => {
  return (
    <section className="flex flex-col w-[1440px] h-[895px] px-[72px] py-[120px] items-center gap-[34px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-5xl font-bold">Our Causes</h2>
        <button className="border border-black px-6 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
          MORE NEWS
        </button>
      </div>

      {/* Cards */}
      <div className="flex justify-between gap-8 w-full">
        {causes.map((cause, idx) => {
          const progress = Math.min((cause.raised / cause.goal) * 100, 100);

          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md w-[400px] overflow-hidden flex flex-col transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"
            >
              <Image
                src={cause.image}
                alt={cause.title}
                width={400}
                height={250}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl">{cause.title}</h3>
                  <p className="text-base text-gray-600 mt-2">{cause.desc}</p>
                </div>

                <div className="space-y-2">
                  {/* Progress bar */}
                  <div className="bg-gray-200 w-full h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-900 h-2"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-700">
                    <div>
                      <strong>Goal: </strong>${cause.goal.toLocaleString("en-US")}
                    </div>
                    <div>
                      <strong>Raised: </strong>${cause.raised.toLocaleString("en-US")}
                    </div>
                    <div>{cause.donations} donations</div>
                  </div>
                </div>

                <button className="mt-4 w-full bg-blue-900 text-white text-sm py-2 rounded-md hover:bg-blue-800 transition">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CausesSection;
