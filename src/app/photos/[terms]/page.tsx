import ListPhotos from "@/components/ListPhotos";
import { Suspense } from "react";

type Props = {
    params: {
        terms: string;
    };
}

const ListPhotosByTerms: React.FC<Props> = ({ params }) => {

    const term = decodeURIComponent(params.terms)

    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold">Results for: {term}</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <ListPhotos term={term} />
            </Suspense>
        </div>
    )
}

export default ListPhotosByTerms