'use client'
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

type Props = {
  url : string;
}

const AnimeReactPlayer = ({url} : Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        <>
          <ReactPlayer
            url={url}
            playing={false}
            controls={true}
            width={500}
            height={300}
          />
          {url === '' && <p className="text-red-500">Sorry Trailer not working for this anime</p>}
        </>
      )}
    </div>
  );
}

export default AnimeReactPlayer