import Faqs from "@/components/blocks/content/Faqs";
import ServicesList from "@/components/blocks/content/ServicesList";
import Testimonial from "@/components/blocks/content/Testimonial";
import HeroUnit from "@/components/blocks/hero/HeroUnit";

import data from "./page.json";

export default function Home() {
  // console.log(data);

  return (
    <div className="bg-white">
      <HeroUnit {...data.hero} />
      <ServicesList {...data.services} />
      <Testimonial {...data.testimonial} />
      <Faqs {...data.faqBlock} />
    </div>
  );
}
