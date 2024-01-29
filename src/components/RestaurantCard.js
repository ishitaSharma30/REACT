import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } = resData?.info;
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-image" src={
                CDN_URL+resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>cost for two : {costForTwo}</h4>
        </div>
    )
};

export default RestaurantCard;