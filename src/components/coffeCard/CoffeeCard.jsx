import { Link, useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const CoffeeCard = ({coffes,handleRemove}) => {
    const {pathname} = useLocation()
    const {id,name,image,category,origin,type,rating,popularity} = coffes || {};

    return (
        <div className="card bg-base-100 shadow-sm my-8 relative">
            <Link to={`/coffee/${id}`}>
                <figure>
                    <img
                    className="w-full h-52 overflow-hidden"
                    src={image}
                    alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className=" text-2xl">{name}</h2>
                    <p>{category}</p>
                    <p>type - {type}</p>
                    <p>origin - {origin}</p>
                    <p>rating - {rating}</p>
                    <p>popularity - {popularity}</p>
                </div>
            </Link>
            {
                pathname == '/Deshboard' && <p onClick={() => handleRemove(id)} className="absolute cursor-pointer -top-3 -right-2 bg-warning p-2 rounded-full"><MdDeleteForever /></p>
            }
        </div>
    );
};

export default CoffeeCard;