"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { searchPhotosByTerm } from "@/utils/unsplash";
import GridLoader from "./GridLoader";

interface Props {
  term: string;
}

interface SearchResultsProps {
  total: number;
  total_pages: number;
  results: ImageProps[];
}

const ListPhotos: React.FC<Props> = ({ term }) => {
  // const [imageId, setImageId] = useState<string>();
  const [data, setData] = useState<ImageProps[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = (await searchPhotosByTerm(term)) as SearchResultsProps;
      setData(response.results);
    };

    fetchData();
  }, [term]);

  return (
    <>
      {data ? (
        <>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((image) => (
              <a
                key={image.id}
                href={image.urls.full}
                target="_blank"
                className="col-span-1 h-72 relative rounded-md overflow-hidden cursor-pointer group"
              >
                <Image
                  id={image.id}
                  src={image.urls.regular}
                  alt={image.alt_description}
                  fill
                  sizes="(max-width: 767px) 50vw, 33vw"
                  className="object-cover object-center w-full h-full opacity-0 animate-entrance group-hover:scale-110 transition-all duration-300"
                  blurDataURL={image.urls.small}
                  placeholder="blur"
                />
              </a>
            ))}
          </div>
        </>
      ) : (
        <GridLoader />
      )}
    </>
  );
};

export default ListPhotos;
