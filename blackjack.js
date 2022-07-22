
const reducer = (a,b) => a + b;

const CalculateHand = hand=> {
    const getTotal= [];
    let AceQty = 0;

    hand.forEach((faceCard) => {
        let num = parseInt(faceCard);

    //switch cases:
    //if the card value is either 'Q', 'K' or 'J', the card number should equal to 10
        switch(true){
             case faceCard == 'Q' || faceCard == 'K' || faceCard == 'J' : num = 10
             getTotal.push(num)
             break;

    //case 2: determine the value for Face Card A
            case faceCard = 'A': AceQty++;
            let aceCheck = getTotal.reduce(reducer, 0);
            if(aceCheck < 12 && AceQty>=1)
            {
                num = 11;
                getTotal.push(num)
            }
            else 
             {
                num = 1;
                getTotal.push(num);
             }
             break;
             case faceCard <= 10 : getTotal.push(num)
             break;
            default:
        }
    })
    return getTotal;
}

    //comparing dealer hand to player hand to determine the winner between each player vs the dealer
    const calculateWinner = (theDealer, thePlayer) => {
        const dealerHand = theDealer.reduce(reducer, 0);

        thePlayer.forEach((item, idx) => {
            let playerHand = item.reduce(reducer);

            if(item.length >= 5 && playerHand <= 21)
            {
                console.log(`playerName + has won with 5 cards`)
            }
            else if(playerHand > dealerHand && playerHand <= 21)
            {
                console.log(`playerName + beats the dealer`)
            }
            else if(playerHand === dealerHand)
            {
                console.log(`playerName + tied with dealer`)
            }
            else
            {
                console.log(`dealer beats...`)
            }
        })
    }

    const getHand = hand => CalculateHand(hand);

    (gameStart = () => {
        const dealer = getHand(['6', '9']);

        const Andrew = getHand(['9','6','J']);
        const Billy  = getHand(['Q', 'K']);
        const Carla  = getHand(['2','9','K']);
        const Ndu    = getHand(['A','k', '10'])


        calculateWinner(dealer, [Andrew, Billy, Carla]);
    })();