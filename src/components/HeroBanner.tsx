import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[509px] mx-auto">
      {/* Background Image */}
     <Image
     src="/herobanner.png"
     alt="Children Background"
     fill
     sizes="100vw"
     className="object-cover rounded-lg"
     priority
     />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-[32px] font-bold leading-snug max-w-3xl">
          You can contribute to provide a place for <br />
          children with special needs!
        </h1>

        <div className="mt-6 flex gap-4">
          <button className="bg-yellow-400 text-black font-semibold py-2 px-5 rounded hover:bg-yellow-300 transition">
            Join as a volunteer
          </button>
          <button className="bg-white text-black font-semibold py-2 px-5 rounded hover:bg-gray-200 transition">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
