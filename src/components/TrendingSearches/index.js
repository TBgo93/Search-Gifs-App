import {useState, useEffect} from 'react'
import getTrendingSearch from 'services/getTrendingSearch'

export default function TrendingSearches() {
    const [trending, setTrending] = useState([])
    
    useEffect(() => {
        getTrendingSearch().then(setTrending)
    }, [])

    return <>
        <ul className="listTrending">
            {
                trending.slice(0, 10).map(element => 
                    <li key={element}>
                        <a href={`/search/${element}`}>{element}</a>
                    </li>)
            }
        </ul>
    </>
}
