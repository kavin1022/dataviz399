import { useEffect, useState } from "react"
import * as MdIcon from "react-icons/md";
import "./featuredInfo.css";

const PercentageChange = (props) => {
    const [percentageChange, setPercentageChange] = useState();
    const [positive, setPositive] = useState(true);

    const positiveStyle = {color: "green", fontSize: "1.4em", marginLeft:"10px", marginTop: "1px"};
    const negativeStyle = {color: "red", fontSize: "1.4em", marginLeft:"10px", marginTop: "1px"};

    useEffect(() => {
        const pc = (Math.round((props.dataAfter/props.dataBefore -1) * 100))
        setPercentageChange(pc);
        setPositive((pc > 0 ? true : false));
    }, [props.dataAfter, props.dataBefore])

    return(
        <>
            {positive && <>
                <span>{percentageChange}%</span>
                <MdIcon.MdArrowUpward style={positiveStyle}/>
            </>}

            {!positive && <>
                <span>{percentageChange}%</span>
                <MdIcon.MdArrowDownward style={negativeStyle}/>
            </>
            }
        </>
    )
}

export default PercentageChange;