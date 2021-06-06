import React from 'react'
import Gifs from '../Gifs/Gifs'
import 'assets/css/List.css'

function ListaDeGifs({gifs}){
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

export default React.memo(ListaDeGifs, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
})
