import Gif from "./Gif"
import useFecht from "../hooks/useFecht"

const ItemGif = ({categoria}) => {

    const {gifs} = useFecht(categoria)

    return (
        <div className='card'>
            {categoria}
            <div className="card-grid">
                {gifs?.map((item)=>(
                    <Gif
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default ItemGif