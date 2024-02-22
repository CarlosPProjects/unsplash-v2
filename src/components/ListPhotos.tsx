"use client"

import Image from "next/image";
import ImageDetails from "./ImageDetails";
import { Suspense, useState } from "react";
import Loader from "./Loader";

interface Props {
  data: ImageProps[]
}

const ListPhotos: React.FC<Props> = ({ data }) => {

  const [imageId, setImageId] = useState<string>();

  // TODO: Refactor this handle function
  const handleClick = (e: any) => {
    const event = e.target.id;
    setImageId(event);
  }

  return (
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
        <div className="grid place-content-center absolute inset-0 bg-black bg-opacity-50">
          <Suspense fallback={<Loader />}>
            <ImageDetails imageId={imageId} />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default ListPhotos;
