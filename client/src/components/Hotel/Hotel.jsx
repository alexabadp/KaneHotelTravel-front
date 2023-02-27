import React from "react";

const Hotel = (props) => {
    return (
        <div>
            {props.image}
            {props.name}
            {props.rating}
            {props.description}
        </div>
    )
}

export default Hotel;