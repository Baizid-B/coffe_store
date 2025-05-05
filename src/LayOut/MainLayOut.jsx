import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/Header/NavBar";
import Footer from "../components/shared/Footer/Footer";
import { Toaster } from 'react-hot-toast';


const MainLayOut = () => {
    return (
        <>
            <div className="">
                <Toaster />
                <div className="pb-10">
                    <NavBar></NavBar>
                </div>
                <div className="min-h-[calc(100vh-215px)] container py-12 mx-auto px-6">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
                
            </div>
        </>
    );
};

export default MainLayOut;