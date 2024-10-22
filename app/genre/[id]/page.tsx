import GenreDisplayContainer from "../../../components/displayContainers/GenreDisplayContainer";
import { Suspense } from "react";
import SpinnerIcon from "@/components/icons/Spinner";

type Props = {
  params: {
    id: number;
  };
  searchParams: {
    page: number;
    name: string;
  };
};

const GenrePage = ({ params, searchParams }: Props) => {

  return (
    <div className="w-[90%] mx-auto max-w-[2000px]">
      <h2 className="text-animehorizon_orange text-5xl my-10">
        {searchParams.name}
      </h2>

      <Suspense fallback={
        <div className="flex h-[calc(100vh-250px)] w-screen items-center justify-center md:h-full md:w-full">
          <SpinnerIcon />
        </div>
      }>
        <GenreDisplayContainer
          id={String(params.id)}
          page={searchParams.page}
          name={searchParams.name}
        />
      </Suspense>
    </div>
  );
};

export default GenrePage;
