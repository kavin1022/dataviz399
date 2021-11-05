import "./aFeaturedInfo.css";

const AFeaturedInfo = (props) => {

    return(
        <div className="featuredItem">
    
            
            <div className="featuredContainer">
                <span className="featuredTitle">{props.title}</span>
                <span className="featuredValue">{props.value}</span>
                <span className="featuredSub">{props.sub}</span>
            </div>
            

        </div>
    )
}

export default AFeaturedInfo;