
import HeroSection from "@/components/HeroSection";
import Header from "../components/Header";
import ImpactSection from "@/components/ImpactSection";
import GoodActionsSection from "@/components/GoodActionsSection";
import StatsSection from "@/components/StatsSection";
import OrganizationSection from "@/components/OrganizationSection";
import BlogNewsSection from "@/components/BlogNewsSection";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ImpactSection />
      <GoodActionsSection />
      <StatsSection />
      <OrganizationSection />
      <BlogNewsSection />
      <HeroBanner />
      <Footer />

    </div>
  );
}
