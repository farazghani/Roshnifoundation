import Image from "next/image";

export default function HeroSection(){
return(
    <div className="w-full h-[838px] flex-shrink-0">
     <Image
    src="/HS1.png" 
    alt="Hero"
    width={1440}
    height={838}
    className="w-full h-full object-cover aspect-[720/419]"
  />
</div>
)
}