import React from "react";

function Card(props){
    return(
        <div className="app-card">
            <div className="card-properties" style={{fontFamily:"cursive"}}>
             <p>{props.key}</p>
             <div>{props.date}</div>
             <div>{props.quote}</div>
             <b>{props.by}</b>
            </div>
        </div>
    )
}
export default Card;