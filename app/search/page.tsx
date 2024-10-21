import React, { Suspense } from "react";
import Searchbar from "@/components/Searchbar";
import SearchDisplayContainer from "./SearchDisplayContainer";
import SpinnerIcon from "@/components/icons/Spinner";

type Props = {
  searchParams: {
    query: string;
  };
};

const SearchPage = async ({ searchParams }: Props) => {
  return (
    <div className="w-[90%] mx-auto max-w-[2000px]">
      <Searchbar defaultSearchValue={searchParams.query} />

      {searchParams.query && (
        <Suspense
          fallback={
            <div className="flex h-[calc(100vh-250px)] w-screen items-center justify-center md:h-full md:w-full">
              <SpinnerIcon />
            </div>
          }
        >
          <SearchDisplayContainer searchQuery={searchParams.query} />
        </Suspense>
      )}
    </div>
  );
};

export default SearchPage;
