import React from 'react'
import Gifs from 'components/Gifs/Gifs'

export default function Detail ( { params } ) {
    const title = localStorage.getItem('Titulo')
    const url = localStorage.getItem('url') 

    return <>
        <Gifs id={params.id} url={url} title={title}/>
    </>
}