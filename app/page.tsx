import PopularsSection from "@/components/homepage/PopularsSection";
import ActionSection from "@/components/homepage/ActionSection";
import ShowCase from "@/components/homepage/ShowCase";
import { getPopularsAnimes } from "@/lib/fetchFns";
import { Suspense } from "react";
import SectionLoadingSkeletion from "@/components/SectionLoadingSkeletion";

export default async  function Home() {
  const {animes} = await getPopularsAnimes(1);

  return (
    <div className="max-w-[2000px] mx-auto">
      <ShowCase animes={animes}/>

      <PopularsSection animes={animes}/>
      
      <Suspense fallback={ <SectionLoadingSkeletion/> }>
        <ActionSection/>
      </Suspense>
    </div>
  );
}
