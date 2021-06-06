import {API_KEY, API_URL} from './settings'

export default async function getSearchSuggestions( keyword  = null ) {
    if(keyword === null){
        keyword = ''
    }
    const url = `${API_URL}/tags/related/'${keyword}'?api_key=${API_KEY}`

    const res = await fetch(url)
    const response = await res.json()
    const { data } = response
    const nameArray = data.map(element => {
        const {name} = element
        return name
    })
    return nameArray

}