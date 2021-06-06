import React from 'react'
import 'assets/css/Home.css'
import Logo from 'assets/img/logo.png'
import SearchSuggestions from 'components/SearchSuggestions/SearchSuggestions'
import SearchFrom from 'components/SearchForm/SearchFrom'

export default function Home(){
    const lastSearchKeyword = localStorage.getItem('lastSearchKeyword')
    return (
        <>
            <img className="Logo" alt="Logo" src={Logo} />
            <h2>Bienvenido al buscador de Gif's</h2>
            <SearchFrom />
            <SearchSuggestions keyword={lastSearchKeyword}/>
            <h4>Ultima Busqueda:</h4>
            <a className="link" href={`/search/${lastSearchKeyword}`}>{lastSearchKeyword}</a>
        </>
    )
}