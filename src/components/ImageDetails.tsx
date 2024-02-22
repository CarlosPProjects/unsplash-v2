import { getPhotoById } from "@/utils/unsplash";

type Props = {
    imageId: string;
}

const ImageDetails: React.FC<Props> = async ({ imageId }) => {

    const data = await getPhotoById(imageId) as ImageProps;

    return (
        <p>{data.description}</p>
    )

}

export default ImageDetails