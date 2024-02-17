export interface UserProps {
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
