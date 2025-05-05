import { useEffect, useState } from "react";
import Heading from "../../Heading/Heading";
import { getAllFavoriteCoffee, removeFavortie } from "../../../utils";
import CoffeeCard from "../../coffeCard/CoffeeCard";


const DeshBoard = () => {
    const [coffee, setCoffee] = useState([])

    useEffect(() =>{
        const favorite = getAllFavoriteCoffee();
        setCoffee(favorite)
    },[])

    const handleRemove = id =>{
        removeFavortie(id)
        const favorite = getAllFavoriteCoffee();
        setCoffee(favorite)
    }
    return (
        <>
           <div>
            <Heading
                title={`Welcome to DashBoard`}
                subTitle={`Manage coffees that you have previously added as favorite. You can view or remove them from here.`}
                />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    coffee.map(coffes => <CoffeeCard handleRemove={handleRemove} key={coffes.id} coffes={coffes}></CoffeeCard>)
                }
            </div>


               
        </>
    );
};

export default DeshBoard;