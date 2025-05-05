import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../coffeCard/CoffeeCard";
import { useState } from "react";
import sortBy from "sort-by";

const Coffees = () => {
    const data = useLoaderData()
    const [coffee,setCoffee] = useState(data)

    const handleSorted = sortBy =>{
        if (sortBy == 'popularity') {
            const sorted = [...data].sort((a,b) => b.popularity - a.popularity)
            setCoffee(sorted)
        }else if(sortBy == 'rating'){
            const sorted = [...data].sort((a,b) => b.rating - a.rating)
            setCoffee(sorted)
        }
    }
    return (
        <div>
            <div className="md:flex justify-between items-center my-8 space-y-7">
                <div>
                    <h1 className="text-2xl">Sort Coffee&apos;s by Popularity & Rating-&gt;</h1>
                </div>
                <div className="flex gap-5">
                    <button onClick={()=> handleSorted('popularity')} className="btn btn-warning text-black rounded-lg">Sort By Popularity</button>
                    <button onClick={()=> handleSorted('rating')} className="btn btn-warning text-black rounded-lg">Sort By Rating</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    coffee.map(coffes => <CoffeeCard key={coffes.id} coffes={coffes}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Coffees;