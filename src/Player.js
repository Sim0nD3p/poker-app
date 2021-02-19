import React from "react";
import {Container, Paper, Typography} from "@material-ui/core";

class Player{

    name = "Nameless Player";
    card1;
    card2;

    constructor(name){
        this.name= name;
    }

    assignCards(card1, card2)
    {
        this.card1 = card1;
        this.card2 = card2;

    }

}