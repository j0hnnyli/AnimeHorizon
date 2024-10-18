import AnimeRatingStars from "@/components/AnimeRatingStars";
import AnimeReactPlayer from "@/components/AnimeReactPlayer";
import { getAnime } from "@/lib/fetchFns";
import ShowLessMoreText from "@/components/ShowLessMoreText";
import Image from "next/image";
import { FaRibbon } from "react-icons/fa"
import Characters from "@/components/Characters";
import { Suspense } from "react";
import SectionLoadingSkeletion from "@/components/SectionLoadingSkeletion";
import Recommendations from "@/components/Recommendations";

type Props = {
  params: {
    id: number;
  };
};

const AnimePage = async ({ params }: Props) => {
  const {
    id,
    title,
    images,
    about,
    youtubeUrl,
    genres,
    rating,
    rated,
    producers,
    year,
    licensors,
    themes
  } = await getAnime(params.id);

  return (
    <div className="text-white">
      <div className="relative h-[50vh]">
        <Image
          src={images.large}
          alt={title}
          fill
          objectFit="cover"
          className=""
        />
        <div className="absolute w-full h-full backdrop-blur-lg"></div>

        <Image
          src={images.large}
          alt={title}
          width={250}
          height={150}
          className="relative z-20 h-full w-[400px] mx-auto"
        />
      </div>

      <div className=" w-[80%] mx-auto mt-10 flex">
        <div className="w-[70%]">
          <h2 className="text-animehorizon_orange text-4xl font-bold mb-3">{title}</h2>

          <div className="mb-3">
            {genres.map((genre) => (
                <span 
                  key={genre} 
                  className="mr-2"
                >
                  {genre}
                </span>
                )
              )
            }
          </div>

          <AnimeRatingStars rating={rating}/>

          <button 
            className="flex items-center border-2 border-animehorizon_orange text-animehorizon_orange py-1 px-3 hover:text-white hover:bg-animehorizon_orange my-3"
          >
            <FaRibbon className="mr-3"/>
            <span>ADD TO WATCHLIST</span>
          </button>
          
          <ShowLessMoreText text={about} className="mb-3"/>
          
          <div className="">
            <div className="w-full flex items-center justify-between py-2 border-b border-gray-300">
              <h3>Producers</h3>
              <div className="max-w-[50%] text-right">
                {producers.length ? producers.map((producer) => <span key={producer} className="ml-2">{producer}</span>) : '-'}
              </div>
            </div>

            <div className="w-full flex items-center justify-between py-2 border-b border-gray-300">
              <h3>Content Advisory</h3>
              <div className="max-w-[50%]">
                {rated}
              </div>
            </div>
            
            <div className="w-full flex items-center justify-between py-2 border-b border-gray-300">
              <h3>Year</h3>
              <div className="max-w-[50%]">
                {year}
              </div>
            </div>
           
            <div className="w-full flex items-center justify-between py-2 border-b border-gray-300">
              <h3>Themes</h3>
              <div className="max-w-[50%]">
                {themes.map((theme) => <span key={theme} className="ml-2">{theme}</span>)}
              </div>
            </div>
            
            <div className="w-full flex items-center justify-between py-2 border-b border-gray-300">
              <h3>Liscensors</h3>
              <div className="max-w-[50%]">
                {licensors.map((licensor) => <span key={licensor} className="ml-2">{licensor}</span>)}
              </div>
            </div>

          </div>

        </div>

        <div>
          <AnimeReactPlayer url={youtubeUrl}/>
        </div>
      </div>
      
      <Suspense fallback={<SectionLoadingSkeletion className="h-[410px] mt-10 w-[80%]"/>}>
        <Characters id={id}/>
      </Suspense>

      <Recommendations id={id}/>
    </div>
  );
};

export default AnimePage;
