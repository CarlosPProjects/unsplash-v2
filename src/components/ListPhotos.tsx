"use client";

import { ImageProps } from "@/types/Image";
import { getListPhotos } from "@/utils/unsplash";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { cn } from "@/utils/utils";

const ListPhotos = () => {
  const [list, setList] = useState<ImageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getListPhotos();
      setList(data);
      setLoading(false);
    };

    fetchPhotos();
  }, []);

  return (
    <div className={cn("w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4", loading ? "flex" : "grid")}>
      {loading ? (
        <Loader />
      ) : (
        list.map((image) => (
          <div key={image.id} className="col-span-1 h-52 relative rounded-md overflow-hidden">
            <Image
              src={image.urls.small}
              alt={image.alt_description}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover object-center w-full h-full opacity-0 animate-entrance"
              blurDataURL={image.urls.small}
              placeholder="blur"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ListPhotos;
