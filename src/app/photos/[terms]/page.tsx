import ListPhotos from "@/components/ListPhotos";
import { searchPhotosByTerm } from "@/utils/unsplash";

type Props = {
    params: {
        terms: string;
    };
}

type SearchProps = {
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