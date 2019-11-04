import React, { Component } from "react";
import FriendCard from "../FriendCard";
import Wrapper from "../Wrapper";
import Header from "../Header";
import friends from "../../friends.json";

class Board extends Component {
    state = {
        friends,
        score: 0,
        topScore: 0,
        ids: []
    };

    handleClick = id => {
        let {score, topScore, ids} = this.state;
        if(ids.indexOf(id) === -1) {
            this.setState({
                score: score + 1,
                topScore: score + 1 > topScore ? score + 1 : topScore,
                friends: this.shuffle(friends),
            });
            ids.push(id);
        } else {
            this.setState({
                friends,
                score: 0,
                ids:[],
            });
        }
    };

    resetGame = () => {
        this.setState({
            score: 0,ids:[]
        });
    }
    
    shuffle = array => {
        let count = array.length, temp, rand;
        while(count) {
            rand = Math.floor(Math.random() * count --);
            temp = array[count];
            array[count] = array[rand];
            array[rand] = temp;
        }
        return array;
    }

    render() {
        if(this.state.score === 12){
            return (
                <div>
                    <h2>Congrats! You won!</h2>
                    <button onClick={this.resetGame}>Play Again?</button>
                </div>
            );
        }
        return (
            <div>
                <Header score={this.state.score} highscore={this.state.topScore} />
                <Wrapper>
                    {this.state.friends.map(friend => (
                        <FriendCard 
                            key={friend.id}
                            id={friend.id}
                            wrong={friend.wrong}
                            image={friend.image}
                            handleClick={this.handleClick}
                        />
                    ))}
                </Wrapper>
            </div>
        )
    }
}

export default Board;