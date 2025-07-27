import Image from "next/image";

const GoodActionsSection = () => {
  return (
    <section className="flex items-center gap-[60px] w-[1440px] px-[72px] py-[120px] mx-auto">
      {/* Left: Image */}
      <div className="w-1/2">
        <Image
          src="/image2.png" // ✅ Replace with your actual path
          alt="Children"
          width={600}
          height={500}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      {/* Right: Content */}
      <div className="w-1/2">
       <div className="flex justify-end">

        <Image
        src="/1.svg"
        alt="Section Logo"
        width={64} // equivalent to w-16
        height={64} // equivalent to h-16
        className="mb-4"
         />

        </div>

        <h2 className="text-6xl font-bold mb-4">
          Transforming Good Intentions into Good Actions
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          We believe in turning compassion into impact. By connecting you with trusted causes, we make it
          easy to support the change you want to see. Your generosity becomes a force for real progress.
        </p>

        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          {[
            "Choose your cause",
            "Register on our website",
            "Donate the amount you like",
            "Stay tuned about cause",
          ].map((text, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="text-white bg-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-lg font-bold">
                {idx + 1}
              </div>
              <p className="text-md font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoodActionsSection;
