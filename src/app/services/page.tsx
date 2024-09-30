import HeroUnit from "@/components/blocks/hero/HeroUnit";
import UnderConstruction from "@/components/layout/UnderConstruction";
import data from "./page.json";

export default function Page() {
  return (
    <div>
      <HeroUnit {...data.hero} />
      <UnderConstruction />
    </div>
  );
}
