import HeroUnit from "@/components/blocks/hero/HeroUnit";
import data from "./page.json";

export default function GetQuote() {
  return (
    <div>
      <HeroUnit {...data.hero} />
    </div>
  );
}
