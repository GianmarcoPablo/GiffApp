import React from 'react'

const GifGridItem = ({title,url}) => {
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
            <a
                href    ={url}
                target='_blank' 
            >
                enlace  
            </a>
        </div>
    )
}

export default GifGridItem