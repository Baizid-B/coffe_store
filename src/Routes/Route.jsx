import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Coffees from "../components/Pages/coffees/Coffees";
import DeshBoard from "../components/Pages/deshboard/DeshBoard";
import MainLayOut from "../LayOut/MainLayOut";
import CoffeeCards from "../components/CoffeeCards/CoffeeCards";
import SingleCoffee from "../components/Pages/singleCoffee/SingleCoffee";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:() => fetch('../categories.json'),
            children:[
              {
                path:'/',
                element:<CoffeeCards></CoffeeCards>,
                loader:() => fetch('../coffees.json')
              },
              {
                path:'/category/:categoryName',
                element:<CoffeeCards></CoffeeCards>,
                loader:() => fetch('../coffees.json')
              }
            ]
        },
        {
            path:'coffees',
            element:<Coffees></Coffees>,
            loader:() => fetch(`../coffees.json`)

        },
        {
          path:'Deshboard',
          element:<DeshBoard></DeshBoard>
        },
        {
          path:'/coffee/:coffeeId',
          element: <SingleCoffee></SingleCoffee>,
          loader:() => fetch(`../coffees.json`)

        }
      ]
    },
]);