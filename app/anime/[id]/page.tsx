import AnimeRatingStars from "@/components/AnimeRatingStars";
import AnimeReactPlayer from "@/components/AnimeReactPlayer";
import { getAnime } from "@/lib/fetchFns";
import ShowLessMoreText from "@/components/ShowLessMoreText";
import Image from "next/image";
import { Suspense } from "react";
import SectionLoadingSkeletion from "@/components/SectionLoadingSkeletion";
import Recommendations from "@/components/Recommendations";
import AddButton from "../AddButton";

type Props = {
  params: {
    id: number;
  };
};


const AnimePage = async ({ params }: Props) => {
  const anime = await getAnime(params.id);
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
  }  = anime;
  
  return (
    <div className="text-white max_width">
      <div className="relative h-[55vh] max-h-[700px]">
        <Image
          src={images.large}
          alt={title}
          fill
          objectFit="cover"
          className=""
        />
        <div className="absolute w-full h-full backdrop-blur-lg"></div>

        <div className="relative z-20 h-[100%] mx-auto">
          <Image
            src={images.large}
            alt={title}
            width={250}
            height={150}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      <div className="mt-10 flex flex-col lg:flex-row gap-3 px-3">
        <div className="w-full lg:w-[70%]">
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

          <AddButton id={id} anime={anime}/>
          
          <ShowLessMoreText text={about} className="mb-3"/>
          
          <div className="">
            <div className="w-full flex items-center justify-between py-2 border-b border-gray-300">
              <h3>Producers</h3>
              <div className="max-w-[70%] text-right">
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

        <div className="lg:w-[50%] lg:h-[250px] lg:my-0">
          <AnimeReactPlayer url={youtubeUrl}/>
        </div>
      </div>
      
      <Suspense fallback={<SectionLoadingSkeletion className="w-[90%]"/>}>
        <Recommendations id={id}/>
      </Suspense>
    </div>
  );
};

export default AnimePage;
