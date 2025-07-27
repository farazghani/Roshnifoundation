import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
    return(
        <div className="w-full bg-white shadow-sm flex items-center justify-between">

            <div className="flex items-center">
           <Image
         src="/logo.png"
         alt="Roshni Foundation Logo"
         width={166}
         height={66}
          className="rounded-[10px] object-cover"
         />
         </div>

         <div className="inline-flex items-center justify-center px-5 py-4 gap-10">
          <Link href="/" className="text-[#525560] font-roboto text-base font-medium">Home</Link>
            <Link href="/about" className="text-[#525560] font-roboto text-base font-medium">About</Link>
            <Link href="/contact" className="text-[#525560] font-roboto text-base font-medium">Contact</Link>
            <Link href="/donate" className="text-[#525560] font-roboto text-base font-medium">Donate</Link>
            </div>

            <div className="w-[190px] h-[102px] flex-shrink-0 bg-[#213E8C] flex justify-center items-center">
            <p className="text-white font-roboto text-[25.833px] font-normal leading-[120%]">
              Donate
            </p>
           </div>
        </div>

        
    )
}