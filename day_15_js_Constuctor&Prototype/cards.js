class Card {
    constructor(val, suit) {
        switch (val) {
            case 1:
                this.val = 'Ace';
                break;
            case 11:
                this.val = 'Jack';
                break;
            case 12:
                this.val = 'Queen';
                break;
            case 13:
                this.val = 'King';
                break
            default:
                this.val = val;
                break;
        };
        this.suit = suit;
    }
    toString() {
        return `Card {${this.val} of ${this.suit}}`;
    }
}
class Deck {
    constructor() {
        this.reset();
    }
    shuffle() {
        if (this.cards.length > 0) {
            for (let index = 0; index < this.cards.length; index++) {
                const randomNum = parseInt(Math.random() * (this.cards.length - 1));
                const temp = this.cards[randomNum];
                this.cards[randomNum] = this.cards[index];
                this.cards[index] = temp;
            }
        }
    }
    draw() {
        if (this.cards.length > 0) {
            const result = this.cards[0];
            this.cards = this.cards.slice(0, 1);
            return result;
            //return this.cards.shift();
        } else {
            return 'Please set the card first!';
        }
    }
    reset() {
        this.cards = [];
        const suitArr = ["clubs", "spades", "hearts", "diamonds"];
        for (let suit = 0; suit < suitArr.length; suit++) {
            for (let number = 1; number < 14; number++) {
                let num = '';
                switch (number) {
                    case 1:
                        num = 'Ace';
                        break;
                    case 11:
                        num = 'Jack';
                        break;
                    case 12:
                        num = 'Queen';
                        break;
                    case 13:
                        num = 'King';
                        break
                    default:
                        num = number + '';
                        break;
                };
                this.cards.push({
                    "suit": suitArr[suit],
                    "number": num
                });
            }
        }
    }
}
const aceOfSpades = new Card(1, 'spades');
const tenOfHearts = new Card(10, 'hearts');
const kingOfDiamonds = new Card(13, 'diamonds');
console.log(aceOfSpades.toString());
// returns 'Card { Ace of Spades }'
console.log(tenOfHearts.toString());
// returns 'Card { 10 of Hearts }'
console.log(kingOfDiamonds.toString());
// returns 'Card { King of Diamonds }'
const deck = new Deck();