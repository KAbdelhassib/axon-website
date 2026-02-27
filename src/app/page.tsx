import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { CloudPartners } from "@/components/sections/CloudPartners";
import { ImageShowcase } from "@/components/sections/ImageShowcase";
import { TabbedPlatform } from "@/components/sections/TabbedPlatform";
import { ParallaxFeature } from "@/components/sections/ParallaxFeature";
import { StatsSection } from "@/components/sections/StatsSection";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { IndustrySection } from "@/components/sections/IndustrySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FeaturedResources } from "@/components/sections/FeaturedResources";
import { CTASection } from "@/components/sections/CTASection";
import { FullScreenParallax } from "@/components/sections/FullScreenParallax";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <ScrollProgress />
      
      {/* Screen 1: Full-screen hero with parallax background */}
      <HeroSection />
      
      {/* Screen 2: Video showcase with YouTube embed */}
      <VideoShowcase />
      
      {/* Screen 3: Platform features with tabbed interface */}
      <TabbedPlatform />
      
      {/* Scrolling logo ticker */}
      <TrustBar />
      
      {/* Screen 4: Full-screen parallax photo divider */}
      <FullScreenParallax 
        image="/images/data-visualization.jpeg"
        title="Redefine What's Possible"
        subtitle="Transform complex spatial data into powerful insights that drive real business outcomes"
      />
      
      {/* Screen 5: Image showcase with parallax scroll effects */}
      <ImageShowcase />
      
      {/* Screen 6: Full-screen parallax photo divider */}
      <FullScreenParallax 
        image="/images/nova.png"
        title="Built for Enterprise"
        subtitle="Enterprise-grade infrastructure with unmatched performance and reliability"
        overlay="primary"
      />
      
      {/* Screen 7: Performance features with parallax images */}
      <ParallaxFeature />
      
      {/* Screen 8: Stats with animated counters */}
      <StatsSection />
      
      {/* Screen 9: Cloud partners */}
      <CloudPartners />
      
      {/* Screen 10: Full-screen parallax photo divider */}
      <FullScreenParallax 
        image="/images/screenshot-demo.png"
        title="Trusted Worldwide"
        subtitle="Leading organizations across every industry rely on AXON"
      />
      
      {/* Screen 11: Industry solutions */}
      <IndustrySection />
      
      {/* Screen 12: Customer testimonials */}
      <TestimonialsSection />
      
      {/* Screen 13: Resources */}
      <FeaturedResources />
      
      {/* Screen 14: Call to action */}
      <CTASection />
    </main>
  );
}

