import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import DownloadSection from "../components/DownloadSection";
import FrequentSection from "../components/FrequentSection";

export default function Main() {
  return (
    <main className="w-full">
      <Hero />
      <FeatureSection />
      <DownloadSection />
      <FrequentSection />
    </main>
  );
}
