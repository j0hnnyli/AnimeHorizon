import PopularsSection from "@/components/homepage/PopularsSection";
import FantasySection from "@/components/homepage/FantasySection";
import ActionSection from "@/components/homepage/ActionSection";
import HorrorSection from "@/components/homepage/HorrorSection";
import { HomePageData } from "@/lib/fetchFns";
import ShowCase from "@/components/homepage/ShowCase";

export default async  function Home() {
  const {popular, fantasy, horror, action} = await HomePageData()

  return (
    <div className="max-w-[2000px] mx-auto">
      <ShowCase animes={popular}/>
      <PopularsSection popularAnimes={popular}/>
      <FantasySection fantasyAnimes={fantasy}/>
      <ActionSection actionAnimes={action} />
      <HorrorSection horrorAnimes={horror}/>
    </div>
  );
}
