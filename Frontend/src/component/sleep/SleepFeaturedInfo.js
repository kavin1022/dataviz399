import "./SleepFeaturedInfo.css";

const SleepFeaturedInfo = (props) => {

    return(
        <div className="featuredItem">
    
            
            <div className="featuredContainer">
                <span className="featuredTitle">{props.title}</span>
                <span className="featuredValue">{props.value}</span>
            </div>
            

        </div>
    )
}

export default SleepFeaturedInfo;