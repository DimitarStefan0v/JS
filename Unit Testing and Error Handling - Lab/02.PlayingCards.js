function createCard(face, suit) {
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (validFaces.includes(face) == false) {
        throw new Error('Invalid face');
    }

    if (Object.keys(suits).includes(suit) == false) {
        throw new Error('Invalid suit');
    }

    return {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }
}

const cardOne = createCard('A', 'S');
console.log(cardOne.toString());

const cardTwo = createCard('10', 'H');
console.log(cardTwo.toString());

const cardThree = createCard('1', 'C');
console.log(cardThree.toString());