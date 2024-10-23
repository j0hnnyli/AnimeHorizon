import { Suspense } from "react";
import ShowCase from "@/components/homepage/ShowCase";
import PopularsSection from "@/components/homepage/PopularsSection";
import FantasySection from "@/components/homepage/FantasySection";
import SectionLoadingSkeletion from "@/components/SectionLoadingSkeletion";
import ActionSection from "@/components/homepage/ActionSection";
import HorrorSection from "@/components/homepage/HorrorSection";

export default function Home() {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Suspense fallback={ <SectionLoadingSkeletion className="w-full h-[80vh] m-0"/> }>
        <ShowCase />
      </Suspense>

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
