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
    <Carousel opts={{
      slidesToScroll: 2,
      dragFree: true
    }}>
      <CarouselContent className='flex'>
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
      <CarouselPrevious className="hidden lg:flex"/>
      <CarouselNext className="hidden lg:flex"/>
    </Carousel>
  )
}

export default CarouselComponent