import React from 'react'
import ListaDeGifs from 'components/ListaDeGifs/ListaDeGifs';
import useGifs from 'hooks/useGifs'
import 'assets/css/List.css'

export default function Resultados( {params} ){
    const { keyword } = params
    const { loading, gifs, page, setPage } = useGifs( { keyword } )

    const handleNextPage = () => setPage(page + 1)
    const handlePrevPage = () => setPage(page - 1)
    const handleStartPage = () => setPage(0)

    if(page < 0){
        setPage(0)
    }
    console.log(page)
    return <>
        {
        loading ? <span>Cargando...</span> : 
        <>
            <h3 id="title">{keyword.toUpperCase()}</h3>
            <ListaDeGifs gifs={gifs}/>
        </>
        }
        <div className="container-buttons">
            <button id="prevPage" onClick={handlePrevPage}>Prev Page</button>
            <button id="startPage" onClick={handleStartPage}>Inicio</button>
            <button id="nextPage" onClick={handleNextPage}>Next Page</button>
        </div>
        
    </>
}