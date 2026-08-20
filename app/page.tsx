import ConstructionScroll from '@/components/ConstructionScroll';
import ExpandingSlider from '@/components/ExpandingSlider';
import FounderSection from '@/components/FounderSection';
import PropertySearch from '@/components/PropertySearch';
import ProcessSection from '@/components/ProcessSection';
import ReviewsSection from '@/components/ReviewsSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ConstructionScroll />
      <ExpandingSlider />
      <FounderSection />
      <PropertySearch />
      <ProcessSection />
      <ReviewsSection />
    </main>
  );
}
