import ConstructionScroll from '@/components/ConstructionScroll';
import FounderSection from '@/components/FounderSection';
import PropertySearch from '@/components/PropertySearch';
import ProcessSection from '@/components/ProcessSection';
import ReviewsSection from '@/components/ReviewsSection';
import { getApartments } from '@/lib/apartments';
import { getVillas } from '@/lib/villas';
import { getPlots } from '@/lib/plots';

export default function Home() {
  const allProperties = [
    ...getApartments().map(p => ({ ...p, propertyType: 'Apartments' })),
    ...getVillas().map(p => ({ ...p, propertyType: 'Villas' })),
    ...getPlots().map(p => ({ ...p, propertyType: 'Plots' }))
  ];

  return (
    <main className="relative min-h-screen">
      <ConstructionScroll />
      <FounderSection />
      <PropertySearch properties={allProperties} />
      <ProcessSection />
      <ReviewsSection />
    </main>
  );
}
