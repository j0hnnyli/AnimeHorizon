import Image from 'next/image'
import { getCharacters } from '@/lib/fetchFns'

type Props = {
  id: number
}

const Characters = async ({id} : Props ) => {
  const characters = await getCharacters(id)

  return (
    <div className='w-[90%] mx-auto my-10'>
      <h2 className='text-2xl'>
        <span className='text-animehorizon_orange font-bold'>Characters :</span>
        <span className='ml-2'>{characters.length}</span>
      </h2>
      <div className='max-h-[400px] overflow-auto grid grid-cols-6 justify-between items-center gap-5'>
        {characters.map(({image, name, role, id}) => (
          <CharacterCard
            key={id}
            image={image}
            name={name}
            role={role}
          />
        ))}
      </div>
    </div>
  )
}

function CharacterCard({image, name, role} : {image: string, name: string, role: string}){
  return (
    <div className='w-full h-[200px]'>
      <div className='h-[80%]'>
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className='w-full h-full'
        />
      </div>

      <div>
        <h3 className='text-animehorizon_orange font-bold text-sm w-full'>{name}</h3>
        <p>{role}</p>
      </div>

    </div>
  )
}

export default Characters