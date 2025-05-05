import toast from "react-hot-toast";

// get all coffe from local storage
    const getAllFavoriteCoffee = () =>{
        const all = localStorage.getItem('favorites')

        if (all) {
            const favorite = JSON.parse(all)

            return favorite;
        }else{
            console.log([]);
            return [];
        }
    }
// add a coffe to local storage
    const addFavorite = coffee =>{
        const favorite = getAllFavoriteCoffee()

        const isExist = favorite.find(item => item.id == coffee.id)
        if (isExist) {
            return toast.error('Already Exist Coffed!');
        }
        favorite.push(coffee)
        localStorage.setItem('favorites', JSON.stringify(favorite))
        toast.success('Successfully Added Coffee');
    }


// remove a coffe from local storage
    const removeFavortie = (id) =>{
        const favorite = getAllFavoriteCoffee()
        const remining = favorite.filter(item => item.id != id)
        localStorage.setItem('favorites', JSON.stringify(remining))
        toast.success('Successfully Remove');
    }

export { addFavorite, getAllFavoriteCoffee, removeFavortie};