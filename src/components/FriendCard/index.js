import React  from "react";
import "./style.css";

function FriendCard(props) {
    return (
        <div className={`card ${props.wrong ? "loss":""}`} onClick={() => props.handleClick(props.id)}>
            <div className="img-container">
                <img alt={props.id} src={props.image} />
            </div>
            <span onClick={() => props.handleClick(props.id)} className="spin"></span>
        </div>
    )
}
/* card */

export default FriendCard;