import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restraunt) => ( 
                    <RestaurantCard key={restraunt.info.id} resData={restraunt} />
    
                    ))
                }
            </div>
        </div>
    );
};

export default Body;