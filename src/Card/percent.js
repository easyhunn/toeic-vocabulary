import React from "react";

const MAX_WIDTH = 300;

const rowStyle = {
    width: MAX_WIDTH + "px",
    border: "3px solid gray",
    borderRadius: "3px"
}
const availableRowstyle = (percent) => {
    return {
        width: MAX_WIDTH * percent /100 + "px",
        border: "3px solid red",
        borderRadius: "0 4px 4px 0px"
    }
}

const Percent = ({percent}) => {
    return (
        <div>
            <div style={rowStyle}>
                <div style= {availableRowstyle(percent)}>
                </div>
            </div>
            {percent}%
        </div>
    );
}

export default Percent;