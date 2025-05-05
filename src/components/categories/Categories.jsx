import { NavLink } from "react-router-dom";

const Categories = ({data}) => {

    return (

            <div role="tablist" className="tabs tabs-border">
                {
                    data.map(datas => (<NavLink 
                        to={`/category/${datas.category}`} 
                        key={datas.category} 
                        role="tab" 
                        className={({isActive}) => `tab transition-all ease-in-out duration-100 ${isActive ? 'tab-active' : ''}`}>{datas.category}</NavLink>))
                }
            </div>
    );
};

export default Categories;