import ListPhotos from "@/components/ListPhotos";
import { searchPhotosByTerm } from "@/utils/unsplash";
import { ImageProps } from "next/image";

export interface Props {
    params: {
        terms: string;
    };
}

interface SearchProps {
    total: number,
    total_pages: number,
    results: ImageProps[],
}

const ListPhotosByTerms: React.FC<Props> = async ({ params }) => {

    const term = params.terms;

    const data = await searchPhotosByTerm(term) as SearchProps

    return (
        <>
            {data && <ListPhotos data={data.results} />}
        </>
    )
}

export default ListPhotosByTerms