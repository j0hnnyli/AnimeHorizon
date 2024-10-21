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
    <Carousel>
      <CarouselContent className='flex'>
        {array.map((anime) => (
            <CarouselItem key={anime.id} className='basis-1/6'>
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
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
  )
}

export default CarouselComponent