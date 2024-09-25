import Faqs from "@/components/blocks/content/Faqs";
import ServicesList from "@/components/blocks/content/ServicesList";
import Testimonial from "@/components/blocks/content/Testimonial";
import HeroUnit from "@/components/blocks/hero/HeroUnit";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroUnit />
      <ServicesList
        title="Our services"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Testimonial />
      <Faqs />
    </div>
  );
}
