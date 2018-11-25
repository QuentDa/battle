var config = {
    apiKey: "AIzaSyCwcHAWsGk5FVs5ak7ebxtV4u-nTNYqL88",
    authDomain: "battle-59360.firebaseapp.com",
    databaseURL: "https://battle-59360.firebaseio.com",
    projectId: "battle-59360",
    storageBucket: "",
    messagingSenderId: "620224174069"
};
firebase.initializeApp(config);

var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

var cards =
    {
        cards1: "1",
        cards2: "2",
        cards3: "3",
        cards4: "4",
        cards5: "5",
        cards6: "6",
        cards7: "7",
        cards8: "8",
        cards9: "9",
        cards10:"10"
    }

function Shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var Draw = [cards.cards1, cards.cards2, cards.cards3, cards.cards4, cards.cards5, cards.cards6, cards.cards7, cards.cards8, cards.cards9, cards.cards10];
Shuffle(Draw)

console.log('taille de la pioche', Draw.lenght)
let Deck1 = []
let Deck2 = []

for (let i = 0 ; i != 5 ; i++) { // Donner les 5 premières cartes à j1 dans le deck 1
    Deck1.push(Draw[i])
}

for (let i = 0 ; i != 5 ; i++) { // Donner les 5 dernières cartes à j2 dans le deck 2
    Deck2.push(Draw[i + 5])
}

console.log(Deck1)
console.log(Deck2)

let Deck1Played = []
let Deck2Played = []






db.collection("battle").doc("9yTs9INhhsYVify9lqif")
    .onSnapshot(function(doc) {

        values = doc.data()
        console.log(values)
        var j1CardPlay = db.collection("battle").doc("9yTs9INhhsYVify9lqif").update({
            j1CardPlay : Deck1[0]
        })

        console.log('La carte que va poser j1 ' + values.j1CardPlay)

        $('#choosePlayer').click(function () {
            db.collection("battle").doc("9yTs9INhhsYVify9lqif").update({
                player1: '1',
                turn : '1'
            })
            $('#chooseCardPlayer2').prop('disabled', true);
        })

        if (values.player1 == '') { //Si le player 1 n'est pas défini on affiche le bouton pour jouer
            $('#battleground').hide()
            $('#choosePlayer').show()
        }
        if (values.player1 == '1') { //Si le player 1 est défini on affiche le battleground
            $('#battleground').show()
            $('#choosePlayer').hide()
        }

        if (values.turn == '1') {
            $('#chooseCardPlayer1').prop('disabled', false);
            $('#chooseCardPlayer2').prop('disabled', true);
        }

        if (values.turn == '0') {
            $('#chooseCardPlayer2').prop('disabled', false);
            $('#chooseCardPlayer1').prop('disabled', true);
        }

        $('#chooseCardPlayer1').click(function () { //Quand on appuie sur le bouton du J1 on donne le tour au J2
            db.collection("battle").doc("9yTs9INhhsYVify9lqif").update({
                turn : '0'
            })

            $('.j1card').append('<img src="img/'+ values.j1CardPlay +'.png" >') //Afficher la carte du j1
            Deck1Played.push(Deck1[0])
            Deck1.splice(0,1)
            console.log('Le cimetière du j1   ' + Deck1Played)
            console.log('Le deck actuel du j1   ' + Deck1)


            $('#chooseCardPlayer1').prop('disabled', true);
            $('#chooseCardPlayer2').prop('disabled', false);
        })


        $('#chooseCardPlayer2').click(function () { //Quand on appuie sur le bouton du J2 on donne le tour au J1
            db.collection("battle").doc("9yTs9INhhsYVify9lqif").update({
                turn : '1'
            })
            $('#chooseCardPlayer2').prop('disabled', true);
            $('#chooseCardPlayer1').prop('disabled', false);
        })







})



