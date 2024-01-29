import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filteredList = listOfRestaurant.filter(
                            (res)=> res.info.avgRating > 4
                            );
                            setListOfRestaurant(filteredList);
                    }}>

                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((restraunt) => ( 
                    <RestaurantCard key={restraunt.info.id} resData={restraunt} />
    
                    ))
                }
            </div>
        </div>
    );
};

export default Body;