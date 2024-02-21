"use client"

import { getPhotoById } from "@/utils/unsplash";
import { useEffect, useState } from "react";

type Props = {
    imageId: string;
}

const ImageDetails: React.FC<Props> = ({ imageId }) => {

    const [imageDetails, setImageDetails] = useState<ImageProps>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPhotoById(imageId) as ImageProps;
            setImageDetails(data);
        }

        fetchData();

    }, [])

    return (
        imageDetails && (
            <div>
                {imageDetails.id}
            </div>
        )
    )
}

export default ImageDetails