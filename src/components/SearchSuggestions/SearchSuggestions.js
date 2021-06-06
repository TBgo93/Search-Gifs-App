import React, {useState, useEffect} from 'react'
import getSearchSuggestions from 'services/getSearchSuggestions'
import 'assets/css/SearchSuggestions.css'

export default function SearchSuggestions({keyword}){
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        if(keyword === null) return
        getSearchSuggestions(keyword).then(setSuggestions)
    }, [keyword])
    
    if(keyword === null && localStorage.getItem('lastSearchKeyword') === null){
        return <></>
    }
    else{
        return <>
        <h5 id="title-suggestions">Sugerencias:</h5>
        <ul className="ListSuggestions">
            {
                suggestions.slice(0,5).map(element => 
                    <li key={element}>
                        <a href={`/search/${element}`}>{element}</a>
                    </li>
                )
            }
        </ul>
        <hr/>
    </>
    }
    
}