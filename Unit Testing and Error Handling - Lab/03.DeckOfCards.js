function printDeckOfCards(cards) {
    const result = [];

    for (let card of cards) {
        const face = card.slice(0, -1);
        const suit = card[card.length - 1];
        try {
            result.push(createCard(face, suit));
        } catch (error) {
            console.log('Invalid card: ' + card);
            return;
        }
    }

    console.log(result.join(' '));

    function createCard(face, suit) {
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (validFaces.includes(face) == false) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        if (Object.keys(suits).includes(suit) == false) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);

printDeckOfCards(['5S', '3D', 'QD', '1C']);