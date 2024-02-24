import GridLoader from "@/components/GridLoader";
import ListPhotos from "@/components/ListPhotos";
import { Suspense } from "react";

type Props = {
    params: {
        terms: string;
    };
}

const ListPhotosByTerms: React.FC<Props> = ({ params }) => {

    const term = params.terms;

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold capitalize">{term}</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <ListPhotos term={term} />
            </Suspense>
        </div>
    )
}

export default ListPhotosByTerms