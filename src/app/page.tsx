import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { FeaturedWork } from "@/components/featured-work";
import { Hero } from "@/components/hero";
import { ListingsSection } from "@/components/listings-section";
import { ProblemSection } from "@/components/problem-section";
import { ProcessSection } from "@/components/process-section";
import { ProofStrip } from "@/components/proof-strip";
import { ReelsSection } from "@/components/reels-section";
import { VideoTestimonials } from "@/components/video-testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ProblemSection />
      <FeaturedWork />
      <VideoTestimonials />
      <ListingsSection />
      <ReelsSection />
      <AboutSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
