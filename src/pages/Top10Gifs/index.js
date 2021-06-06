import React, {useState, useEffect} from 'react'
import ListaDeGifs from "components/ListaDeGifs/ListaDeGifs";
import trendingGifs from 'services/getTrendingGifs'
import 'assets/css/TrendingGifs.css'

export default function Top10Gifs(){
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        trendingGifs().then(gifs => setGifs(gifs))
    }, [setGifs])

    return (
        <>
            <h2>Trending Gifs</h2>
            <hr />
            <ListaDeGifs gifs={gifs}/>
        </>
    )
}