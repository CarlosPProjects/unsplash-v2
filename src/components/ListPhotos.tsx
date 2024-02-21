"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import Loader from "./Loader";
import { cn } from "@/utils/utils";
import ImageDetails from "./ImageDetails";

interface Props {
  data: ImageProps[]
}

const ListPhotos: React.FC<Props> = ({ data }) => {
  const [list, setList] = useState<ImageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openDetails, setOpenDetails] = useState<boolean>();

  useEffect(() => {
    const fetchPhotos = async () => {
      setList(data);
      setLoading(false);
    };

    fetchPhotos();
  }, []);

  const handleClick = () => {
    setOpenDetails(true);
  }
  return (
    <div className={cn("w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4", loading ? "flex" : "grid")}>
      {loading ? (
        <Loader />
      ) : (
        list.map((image) => (
          <div onClick={handleClick} key={image.id} className="col-span-1 h-40 md:h-52 relative rounded-md overflow-hidden">
            <Image
              src={image.urls.small}
              alt={image.alt_description}
              fill
              sizes="(max-width: 767px) 50vw, 33vw"
              className="object-cover object-center w-full h-full opacity-0 animate-entrance"
              blurDataURL={image.urls.small}
              placeholder="blur"
            />
            {openDetails && (
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <Suspense>
                  <ImageDetails imageId={image.id} />
                </Suspense>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ListPhotos;
