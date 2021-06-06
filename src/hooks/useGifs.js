import {useState, useEffect} from 'react'
import getGifs from 'services/getGifs'

const INITIAL_PAGE = 0

export default function useGifs ( { keyword } = { keyword : ''} ){
    const [loading, setLoading] = useState(false)
    const [loadingNextPage,setLoadingNextPage] = useState(false)
    const [gifs, setGifs] = useState([])
    const [page, setPage] = useState(INITIAL_PAGE)
    const keywordToUse = keyword || localStorage.getItem('lastSearchKeyword') || ''

    //Get gifs first time
    useEffect(() => {
        setLoading(true)
        getGifs( { keyword: keywordToUse } )
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            localStorage.setItem('lastSearchKeyword', keyword)
        })
    }, [keyword, keywordToUse, setGifs]) 

    //Get next or prev page gifs
    useEffect(() => {
        if(page < INITIAL_PAGE) return

        setLoadingNextPage(true)
        getGifs( { keyword: keywordToUse, page } )
        .then(nextGifs => {
            setGifs(nextGifs)
            setLoadingNextPage(false)
        })
    },[page, keyword, keywordToUse])

    return { loading, gifs, loadingNextPage, page, setPage }
}