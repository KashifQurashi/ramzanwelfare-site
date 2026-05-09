import Hero from "@/components/home/Hero";
import LiveAppeals from "@/components/home/LiveAppeals";
import QuickDonate from "@/components/home/QuickDonate";
import ImpactStats from "@/components/home/ImpactStats";
import Initiatives from "@/components/home/Initiatives";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import MediaUpdates from "@/components/home/MediaUpdates";
import LatestNews from "@/components/home/LatestNews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LiveAppeals />
      <QuickDonate />
      <ImpactStats />
      <Initiatives />
      <Testimonials />
      <BlogSection />
      <MediaUpdates />
      <LatestNews />
    </>
  );
}
