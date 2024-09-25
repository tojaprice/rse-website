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
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Testimonial />
      <Faqs />
    </div>
  );
}
