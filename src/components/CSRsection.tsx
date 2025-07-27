import Image from "next/image";

export default function CSRSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 py-12">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-[643px] h-[557px] flex-shrink-0 rounded-[83px] overflow-hidden">
          <Image
            src="/image1.png"
            alt="CSR Child 1"
            width={643}
            height={557}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="max-w-md text-black">
          <h2 className="text-2xl font-bold mb-4">
            Partner with Us to <br /> Create Lasting Impact
          </h2>
          <p className="text-sm mb-4">
            By partnering with us, you can enjoy visibility, receive impact
            reports, and align with your corporate goals.
          </p>
          <p className="text-sm font-semibold">Current CSR Partners:</p>
          <ul className="text-sm">
            <li>Company A</li>
            <li>Company B</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="max-w-md text-black">
          <h2 className="text-3xl font-bold mb-4">
            Partner with Us to <br /> Create Lasting Impact
          </h2>
          <p className="text-sm mb-4">
            By partnering with us, you can enjoy visibility, receive impact
            reports, and align with your corporate goals.
          </p>
          <p className="text-sm font-semibold">Current CSR Partners:</p>
          <ul className="text-sm">
            <li>Company A</li>
            <li>Company B</li>
          </ul>
        </div>
        <div className="w-[643px] h-[557px] flex-shrink-0 rounded-[83px] overflow-hidden">
          <Image
            src="/image2.png"
            alt="CSR Child 2"
            width={643}
            height={557}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
