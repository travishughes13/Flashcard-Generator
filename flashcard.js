// Note: In order to create a basic card, you must ask a question and answer it
// Note: In order to make a cloze card, you must make a statement followed by the cloze deletion

// This section is for the variables to create the card
var basic = '';
var cloze = '';

var basicCards = [];
var clozeCards = [];

// This section parses user input
function basicMaker () {
            for (var i = 3; i < process.argv.length; i++) {
            basic = basic + process.argv[i] + ' ';
            };
        };

function clozeMaker () {
            for (var i = 3; i < process.argv.length; i++) {
            cloze = cloze + process.argv[i] + ' ';
            };
        };

// This section creates the cards
function BasicCard(front, back) {
        this.front = basicString[0];
        this.back = basicString[1];
};

function ClozeCard(full, cloze, partial) {
    this.full = full;
    this.cloze = cloze;
    this.partial = partial;
};

// This creates basic cards
if (process.argv[2].toUpperCase() === 'BASIC') {
    basicMaker();
    basicString = basic.split('\? ');
    var newBasicCard = new BasicCard();
    basicCards.push(newBasicCard);
    console.log('Front: ' + newBasicCard.front);
    console.log('Back: ' + newBasicCard.back);
}

// This creates the cloze cards
if (process.argv[2].toUpperCase() === 'CLOZE') {
    clozeMaker();
    clozeString = cloze.split('\. ');
        if (clozeString.length < 2) {
            console.log('Ya done stepped in it now, son');
        }
        else {
            full = clozeString[0];
            cloze = clozeString[1];
            partial = full.split(cloze)[1];
            var newClozeCard = new ClozeCard(full, cloze, partial);
            clozeCards.push(newClozeCard);
            console.log('Full: ' + newClozeCard.full);
            console.log('Cloze: ' + newClozeCard.cloze);
            console.log('Partial: ' + newClozeCard.partial);
        }
}