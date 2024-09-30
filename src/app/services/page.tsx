import HeroUnit from "@/components/blocks/hero/HeroUnit";
import UnderConstruction from "@/components/layout/UnderConstruction";
import data from "./page.json";
import GridList from "@/components/blocks/content/GridList";

export default function Page() {
  return (
    <div>
      <HeroUnit {...data.hero} />
      <GridList {...data.gridList} />
    </div>
  );
}
