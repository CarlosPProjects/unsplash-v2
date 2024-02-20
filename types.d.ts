interface UserProps {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string | null;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
}

interface ImageProps {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
    };
    links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
    };
    likes: number;
    user: UserProps;
}