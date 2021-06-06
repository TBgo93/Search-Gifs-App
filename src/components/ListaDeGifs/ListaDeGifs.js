import React from 'react'
import Gifs from '../Gifs/Gifs'
import 'assets/css/List.css'

export default function ListaDeGifs({gifs}){
        return <div className="List">
        {
            gifs.map(({id,title,url}) => 
                <Gifs 
                    key={id} 
                    title={title} 
                    id={id} 
                    url={url} 
                />
            )
        }
    </div>
}
