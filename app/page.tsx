import PopularsSection from "@/components/homepage/PopularsSection";
import ShowCase from "@/components/homepage/ShowCase";
import { getGenres, getPopularsAnimes } from "@/lib/fetchFns";
import { Suspense } from "react";

export default async function Home() {
  const popularAnimes = await getPopularsAnimes();

  return (
    <div>
      <ShowCase animes={popularAnimes}/>

      <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-lg bg-slate-200"></div>}>
        <PopularsSection/>
      </Suspense>
    </div>
  );
}
