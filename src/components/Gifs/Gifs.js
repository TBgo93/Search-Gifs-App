import React from 'react'
import 'assets/css/List.css'

export default function Gifs( {title, id, url} ) {

    const handleClick = () => {
        localStorage.setItem('Titulo', title)
        localStorage.setItem('url', url)
    }

    return <div className="OneGifs">
        <h5>{title}</h5>
        <a href={`/gifs/${id}`} onClick={handleClick}>
            <img src={url} alt={title}/>
        </a>
    </div>
}