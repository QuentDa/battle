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

db.collection("battle").doc("9yTs9INhhsYVify9lqif")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
    })

var player1 =  db.collection("battle").doc("9yTs9INhhsYVify9lqif").player1
console.log(player1)


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


$('#choosePlayer').click(function () {
    db.collection("battle").doc("9yTs9INhhsYVify9lqif").update({
        player1: '1'
    })




    $('#choosePlayer').hide()
    $('#battleground').show()
})

$('#chooseCardPlayer2').prop('disabled', true);

$('#chooseCardPlayer1').click(function () {
    $('#chooseCardPlayer2').prop('disabled', false);
    $('#chooseCardPlayer1').prop('disabled', true);

})

$('#chooseCardPlayer2').click(function () {
    $('#chooseCardPlayer1').prop('disabled', false);
    $('#chooseCardPlayer2').prop('disabled', true);

})