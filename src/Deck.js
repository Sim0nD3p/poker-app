class Deck{

    suits = ["spades", "clubs", "hearts", "diamonds"];
    cards = [];

    constructor(){
        var i;
        var j;
        for(i=0; i<13; i++)
        {
            for(j=0;j<this.suits.length;j++)
            {
                this.cards.push(new Card(i+1, this.suits[j]));
            }
        }
        shuffle(this.cards)

    }


}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}