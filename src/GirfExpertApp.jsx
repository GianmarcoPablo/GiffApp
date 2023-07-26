import { useState } from "react";
import {AddCategory,GifGrid} from "./components";

const GirfExpertApp = () => {
    const [categories, setCategories] = useState([]);

   

    const obtenerCategoria = (valor) => {
        
        const exists = categories.find((category) => category.toLowerCase() === valor.toLowerCase());
        if (exists){
            alert("Ya existe la categoria");
            return;
        }

        setCategories([valor, ...categories]);
    };

    return (
        <>
            <h1>GirfExpertApp</h1>

            <AddCategory 
                obtenerCategoria={obtenerCategoria}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    );
};

export default GirfExpertApp;
