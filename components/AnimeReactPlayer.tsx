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
    <>
      {url.length > 0 ? (
        <div>
          {isClient&& (
            <ReactPlayer
              url={url}
              playing={false}
              controls={true}
              width='100%'
              height='300px'
            />
          )}
        </div>
      ) : null}
    </>
  );
}

export default AnimeReactPlayer