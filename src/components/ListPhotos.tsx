"use client"

import Image from "next/image";
import ImageDetails from "./ImageDetails";
import { Suspense, useEffect, useState } from "react";
import Loader from "./Loader";
import { searchPhotosByTerm } from "@/utils/unsplash";
import GridLoader from "./GridLoader";

interface Props {
  term: string
}

interface SearchResultsProps {
  total: number
  total_pages: number
  results: ImageProps[]
}

const ListPhotos: React.FC<Props> = ({ term }) => {

  const [imageId, setImageId] = useState<string>();
  const [data, setData] = useState<ImageProps[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await searchPhotosByTerm(term) as SearchResultsProps;
      setData(response.results);
      setLoading(false);
    }

    fetchData();
  }, [term])

  // TODO: Refactor this handle function
  const handleClick = (e: any) => {
    const event = e.target.id;
    setImageId(event);
  }

  return (
    <>
      {data ? (
        <>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {data.map((image) => (
              <div onClick={handleClick} key={image.id} className="col-span-1 h-40 md:h-52 relative rounded-md overflow-hidden">
                <Image
                  id={image.id}
                  src={image.urls.small}
                  alt={image.alt_description}
                  fill
                  sizes="(max-width: 767px) 50vw, 33vw"
                  className="object-cover object-center w-full h-full opacity-0 animate-entrance"
                  blurDataURL={image.urls.small}
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
          {imageId && (
            <div className="grid place-content-center absolute inset-0 flex-1 h-full bg-black bg-opacity-50">
              <Suspense fallback={<Loader />}>
                <ImageDetails imageId={imageId} />
              </Suspense>
            </div>
          )}
        </>
      ) : <GridLoader />}
    </>
  );
};

export default ListPhotos;
