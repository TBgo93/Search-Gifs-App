import React, {useState} from 'react'
import {useLocation} from 'wouter'

export default function SearchFrom() {
    const [keyword, setKeyword] = useState('')
    const [path, redirection] = useLocation()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(keyword !== ''){
            redirection(`${path}search/${keyword}`)
        }else{
            alert("Debes completar el campo de busqueda")
        }
    }
    const handleChange = event => {
        setKeyword(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={keyword} placeholder="Buscador..."/>
            <button>Buscar</button>
        </form>
    )
}