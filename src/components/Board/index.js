import React, { Component } from "react";
import FriendCard from "../FriendCard";
import Wrapper from "../Wrapper";

class Board extends Component {
    state = {
        score: 0,
        topScore: 0,
        idsPicked: []
    };

    render() {
        return (
            <div>
                {console.log("Board Loaded")};
                <Wrapper>
                    <FriendCard />
                </Wrapper>
            </div>
        )
    }
}

export default Board;