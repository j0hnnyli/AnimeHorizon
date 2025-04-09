import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import AnimeCard from "./AnimeCard"
import { ParsedAnimeType } from "@/lib/types/ParsedAnimeType"

type Props = {
  array : ParsedAnimeType[]
}

const CarouselComponent = ({array} : Props) => {

  return (
    <Carousel 
      opts={{
        slidesToScroll: 2,
        dragFree: true
      }} 
      className=""
    >
      <CarouselContent className=''>
        {array.map((anime) => (
            <CarouselItem key={anime.id} className='basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/7'>
              <AnimeCard 
                anime={anime}
                key={anime.id}
                id={anime.id} 
                title={anime.title}
                url={anime.images.large}
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <div className="absolute top-1/2 left-2 hidden md:flex items-center justify-center">
        <CarouselPrevious 
          className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-animehorizon_orange hover:text-white" 
        />
      </div>
      <div className="absolute top-1/2 right-2 hidden md:flex items-center justify-center">
        <CarouselNext 
          className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-animehorizon_orange hover:text-white" 
        />
      </div>
    </Carousel>
  )
}

export default CarouselComponent