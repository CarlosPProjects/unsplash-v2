import { getListPhotos, searchPhoto } from "@/utils/unsplash"

const Gallery = async() => {

    const search = await searchPhoto('office');

    console.log(search)

  return (
    <div>Gallery</div>
  )
}

export default Gallery