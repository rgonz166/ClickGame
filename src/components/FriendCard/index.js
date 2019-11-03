import React  from "react";
import "./style.css";

function FriendCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.id} src={props.image} onClick={() => props.handClick(props.id)} />
            </div>
            <span onClick={() => props.handClick(props.id)} className="spin"></span>
        </div>
    )
}

export default FriendCard;