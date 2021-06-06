import {API_KEY, API_URL} from './settings'

export default async function trendingGifs() {
    const url = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=10&rating=g&lang=en`
    
    const res = await fetch(url)
    const response = await res.json()
    const { data } = response
    const gifs = data.map(img => {
        const {images, title, id} = img
        const { url } = images.fixed_height_small
        return {title, id, url}
    })
    return gifs
}