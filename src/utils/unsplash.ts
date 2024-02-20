'use server'

const { ACCESS_KEY, SECRET_KEY } = process.env;
const baseURL = 'https://api.unsplash.com'

export const getListPhotos = async () => {
    const apiURL = `${baseURL}/photos/?per_page=12&client_id=${ACCESS_KEY}`

    const data = await fetch(apiURL)
        .then(res => res.json())

    return data;
}

export const searchPhotosByTerm = async (keyword: string) => {
    const apiURL = `${baseURL}/search/photos/?per_page=12&client_id=${ACCESS_KEY}&query=${keyword}`

    const data = await fetch(apiURL)
        .then(res => res.json())

    return data
}

export const getPhotoById = async (id: string) => {
    const apiURL = `${baseURL}/photos/${id}?client_id=${ACCESS_KEY}`

    const data = await fetch(apiURL)
        .then(res => res.json())

    return data
}