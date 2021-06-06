import {API_KEY, API_URL} from './settings'

export default async function getGifs( { limit = 10, keyword, page = 0 } = {} ){
    const url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`

    const res = await fetch(url)
    const response = await res.json()
    const { data } = response
    const gifs = data.map(img => {
        const {images, title, id} = img
        const { url } = images.fixed_width
        return {title, id, url}
    })
    return gifs
}