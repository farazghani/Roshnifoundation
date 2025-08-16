import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[509px] mx-auto">
      {/* Background Image */}
      <Image
        src="/herobanner.png"
        alt="Children Background"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <h1 className="text-white text-xl sm:text-2xl md:text-[32px] font-bold leading-snug max-w-3xl">
          You can contribute to provide a place for{" "}
          <br className="hidden sm:block" />
          children with special needs!
        </h1>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
          <button className="bg-yellow-400 text-black font-semibold py-2 px-5 rounded hover:bg-yellow-300 transition w-full sm:w-auto">
            Join as a volunteer
          </button>
          <button className="bg-white text-black font-semibold py-2 px-5 rounded hover:bg-gray-200 transition w-full sm:w-auto">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

