$(function () {

    var playerActive = ""
    const player_one = "X"
    const player_two = "O"
    carré = document.querySelectorAll(".case")
    tour = 0
    playerActive = player_one


    // SWITCH ENTRE JOUEUR 1 ET JOUEUR 2
    $(".case").one("click", function () {
        if (playerActive == player_one) {
            $(this).append(player_one)
            return console.log(playerActive = player_two)
        }
        else (playerActive == player_two)
        $(this).append(player_two)
        return console.log(playerActive = player_one)
    });

    // MATCH NUL
    $(".case").one("click", function () {
        tour++
        console.log(tour)
        if (tour > 8) {
            return alert("MATCH NUL")
        }
        else { }
    });











































})