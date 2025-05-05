import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CoffeeCard from "../coffeCard/CoffeeCard";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const coffe = useLoaderData()
    const [cofes, setCofes] = useState([])
    const {categoryName} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (categoryName) {
            const fillterByCategory = [...coffe].filter(coffee => coffee.category === categoryName)
            setCofes(fillterByCategory)
        }else{
            setCofes(coffe.slice(0,6))
        }
    },[coffe,categoryName])

    const handleClick = () =>{
        navigate('coffees')
        // setCofes(coffe) ami judi aktar modda sob data dakata chai. thala ai vaba dakhta hobaa 
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    cofes.map(coffes => <CoffeeCard key={coffes.id} coffes={coffes}></CoffeeCard>)
                }
            </div>
            <button onClick={handleClick} className="btn btn-neutral">View All</button>
        </>
    );
};

export default CoffeeCards;