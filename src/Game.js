import React from "react";

class Game extends React.Component{

    deck;
    players = [];
    cardsOnBoard = [];

    constructor(props){
        super(props);
        this.deck = new Deck();

    }
    AddPlayer(player){
        this.players.push(player);
    }

    updateHands()
    {
        let i;
        var allCards;
        for(i=0;i<this.players.length;i++)
        {
            allCards = this.GetAllCurrentCards(i);
            
        }
    }

    GetAllCurrentCards(playerIndex)
    {
        var allCards = [];
        let i;
        for(i=0; i<this.cardsOnBoard.length; i++)
        {
            allCards.push(this.cardsOnBoard[i]);
        }
        allCards.push(this.players[playerIndex].card1);
        allCards.push(this.players[playerIndex].card2);

        return allCards;
    }
    GetWinner()
    {

    }

    render(){

    }
}

