import { getPopularsAnimes, getGenres } from "@/lib/fetchFns";
import { Suspense } from "react";
import ShowCase from "@/components/homepage/ShowCase";
import PopularsSection from "@/components/homepage/PopularsSection";
import FantasySection from "@/components/homepage/FantasySection";
import SectionLoadingSkeletion from "@/components/homepage/SectionLoadingSkeletion";
import ActionSection from "@/components/homepage/ActionSection";
import HorrorSection from "@/components/homepage/HorrorSection";

export default async function Home() {
  const popularAnimes = await getPopularsAnimes(1);

  return (
    <div>
      <ShowCase animes={popularAnimes}/>

      <Suspense fallback={ <SectionLoadingSkeletion/> }>
        <PopularsSection/>
      </Suspense>

      <Suspense fallback={ <SectionLoadingSkeletion/> }>
        <FantasySection />
      </Suspense>

      <Suspense fallback={ <SectionLoadingSkeletion/> }>
        <ActionSection />
      </Suspense>
      
      <Suspense fallback={ <SectionLoadingSkeletion/> }>
        <HorrorSection />
      </Suspense>
    </div>
  );
}
