import React, { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";
import { useFechGifs } from "../hooks/useFechGifs";

const GifGrid = ({ category  }) => {

    const {images,isLoading} = useFechGifs(category);
    
    return (
        <div>
            <h3>{category}</h3>
            {isLoading && <p>Cargando...</p>}
            <div className="card-grid">
                {images.map((image) => (
                    <GifGridItem
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </div>
    );
};  

export default GifGrid;
