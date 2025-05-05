import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Heading from '../../Heading/Heading';
import Categories from '../../categories/Categories';


const Home = () => {

    const data = useLoaderData()

    return (
        <>
            <Banner></Banner>
            <Heading title={'Browse coffees by category'} subTitle={'choose your desired coffee category to browse through specific coffees that fit in your taste'}></Heading>
            <Categories data={data} />
            <Outlet></Outlet>
        </>
    );
};

export default Home;