'use server'

const { ACCESS_KEY, SECRET_KEY } = process.env;

export const getListPhotos = async () => {
    const apiURL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`

    const data = await fetch(apiURL)
        .then(res => res.json())

    return data;
}

export const searchPhoto = async (keyword: string) => {
    const apiURL = `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=office`

    const data = await fetch(apiURL)
        .then(res => res.json())

    return data
}