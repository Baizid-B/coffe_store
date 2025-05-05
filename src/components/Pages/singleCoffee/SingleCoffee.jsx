import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import img2 from '../../../assets/nutrition.png'
import { addFavorite, getAllFavoriteCoffee } from "../../../utils";

const SingleCoffee = () => {
    const data = useLoaderData()
    const [coffee, setCoffee] = useState({})
    const [isFavorite,setIsFavorite] = useState(false)
    const {coffeeId} = useParams()

    const {id,name,image, description,category,origin,type,rating,popularity,making_process,ingredients,nutrition_info} = coffee || {};

    useEffect(()=>{
        const singleFindData = data.find(coffee => coffee.id === parseInt(coffeeId))
        setCoffee(singleFindData)

        const favorite = getAllFavoriteCoffee()
        const isExist = favorite.find(item => item.id == singleFindData.id)
        if (isExist) {
            setIsFavorite(true)
        }
    },[])

    const handleCoffee = coffee =>{
        addFavorite(coffee)
        setIsFavorite(true)
    }

    return (
        <div className="capitalize space-y-5">
            <h1 className="text-3xl">{description}</h1>

            <img className="md:w-[100%]" src={image} alt={name} />

            <div className="flex justify-between items-center my-8">
                <div><h1 className="text-2xl">{name}</h1></div>
                <div>
                    <button disabled={isFavorite} onClick={() => handleCoffee(coffee)} className="btn btn-warning text-black">Add favorite</button>
                </div>
            </div>
            <p><span className="font-semibold">popularity</span> - {popularity}</p>
            <p><span className="font-semibold">rating</span> - {rating}</p>
            <p><span className="font-semibold">Making Process</span> - {making_process}</p>
            
            <div className="flex justify-between">
                <div className="w-[60%] space-y-10">
                    <div>
                        <span className="font-semibold">ingredients</span>
                        <p>{ingredients && ingredients.map((ingredient,idx) => <li key={idx}>{ingredient}</li> )}</p>
                    </div>

                    <div>
                        <span className="font-semibold">nutrition_info</span>
                        <p>
                            {
                            nutrition_info && Object.keys(nutrition_info).map((item,idx) => <li key={idx} >{item} : {nutrition_info[item]}</li> )
                            }
                        </p>
                    </div>
                </div>

                <div className="w-[40%]">
                    <img className="" src={img2} alt="nutrition" />
                </div>
            </div>
        </div>
    );
};

export default SingleCoffee;