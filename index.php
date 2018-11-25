<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<!-- Etape 1 : Interface de jeu -
Etape 2 : Définir qui est le joueur 1 -
Etape 3 : Définir deck et off l'autre -
Etape 4 : Au clique, sortir une carte au hasard et enregistrer la valeur en bdd. -
Etape 5: Enregistrer historique de cartes jouées
Etape 6 : Il y a 5 cartes par manches, a la fin des 5 cartes, additionner toutes les valeurs et définir qui a gagné la première manche. Une partie se déroule en trois manche. -->



<div id="choosePlayer">
    <button class="btn btn-primary">Je suis le joueur 1</button>
</div>

<div id="battleground">

    <div id="player1">
        <h4>PLAYER 1</h4>
        <img src="img/hidden.png" alt="">
        <button id="chooseCardPlayer1" class="btn btn-primary">Choisir sa carte</button>
    </div>

    <div class="j1card">

    </div>

    <div class="j2card">

    </div>



    <div id="player2">
        <h4>PLAYER 2</h4>
        <img src="img/hidden.png" alt="">
        <button id="chooseCardPlayer2" class="btn btn-primary">Choisir sa carte</button>

    </div>


</div>







<script src="https://www.gstatic.com/firebasejs/5.5.6/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.5.5/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.5.5/firebase-firestore.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="script.js"></script>
</body>
</html>