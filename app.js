document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'car1',
            img: 'style/images/car1v2.png'
        },
        {
            name: 'car1',
            img: 'style/images/car1v2.png'
        },
        {
            name: 'car2',
            img: 'style/images/car2v2.png'
        },
        {
            name: 'car2',
            img: 'style/images/car2v2.png'
        },
        {
            name: 'car3',
            img: 'style/images/car3lt.png'
        },
        {
            name: 'car3',
            img: 'style/images/car3lt.png'
        },
        {
            name: 'car4',
            img: 'style/images/car4v2.jpg'
        },
        {
            name: 'car4',
            img: 'style/images/car4v2.jpg'
        },
        {
            name: 'car5',
            img: 'style/images/car7v2.jpg'
        },
        {
            name: 'car5',
            img: 'style/images/car7v2.jpg'
        },
        {
            name: 'car6',
            img: 'style/images/car6v2.png'
        },
        {
            name: 'car6',
            img: 'style/images/car6v2.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', ' style/images/sclt2.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('you found a match')
            cards[optionOneId].setAttribute('src', 'style/images/white4v3.png')
            cards[optionTwoId].setAttribute('src', 'style/images/white4v3.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'style/images/sclt2.png')
            cards[optionTwoId].setAttribute('src', 'style/images/sclt2.png')
            alert('try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations you found them all!'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }



    createBoard()



});