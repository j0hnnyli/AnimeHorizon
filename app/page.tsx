import PopularsSection from "@/components/homepage/PopularsSection";
import FantasySection from "@/components/homepage/FantasySection";
// import ActionSection from "@/components/homepage/ActionSection";
// import HorrorSection from "@/components/homepage/HorrorSection";
// import { HomePageData } from "@/lib/fetchFns";
import ShowCase from "@/components/homepage/ShowCase";

import { getPopularsAnimes } from "@/lib/fetchFns";
import { Suspense } from "react";
import SectionLoadingSkeletion from "@/components/SectionLoadingSkeletion";

export default async  function Home() {
  const {animes} = await getPopularsAnimes(1);
  // const {popular, fantasy, horror, action} = await HomePageData()

  return (
    <div className="max-w-[2000px] mx-auto">
      <ShowCase animes={animes}/>
      <PopularsSection popularAnimes={animes}/>
      <Suspense fallback={ <SectionLoadingSkeletion/> }>
        <FantasySection/>
      </Suspense>
      {/* <ActionSection actionAnimes={action} /> */}
      {/* <HorrorSection horrorAnimes={horror}/>   */}
    </div>
  );
}
