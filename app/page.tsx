import { BrandStory } from "@/components/sections/brand-story";
import { FeaturedDrinks } from "@/components/sections/featured-drinks";
import { Hero } from "@/components/sections/hero";
import { InstagramPreview } from "@/components/sections/instagram-preview";
import { LocationTeaser } from "@/components/sections/location-teaser";
import { ReviewHighlights } from "@/components/sections/review-highlights";

// Home page section order per SPEC.md §5.
export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedDrinks />
      <BrandStory />
      <ReviewHighlights />
      <InstagramPreview />
      <LocationTeaser />
    </main>
  );
}
