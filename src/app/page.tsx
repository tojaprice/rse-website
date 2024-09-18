import Faqs from "@/components/blocks/content/Faqs";
import ServicesList from "@/components/blocks/content/ServicesList";
import Testimonial from "@/components/blocks/content/Testimonial";
import HeroUnit from "@/components/blocks/hero/HeroUnit";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroUnit />
      <ServicesList />
      <Testimonial />
      <Faqs />
    </div>
  );
}
