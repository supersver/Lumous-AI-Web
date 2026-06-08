import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import features from "@/data/features";

export default function Features() {
  return (
    <section id="features" className="py-20">
      <SectionHeading
        title="Built for teams"
        subtitle="Powerful abstractions for building, deploying, and collaborating with AI."
      />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    </section>
  );
}
