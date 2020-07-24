$(function () {

    var playerActive = ""
    const player_one = "X"
    const player_two = "O"
    playerActive = player_one
    tour = 0


    // SWITCH ENTRE JOUEUR 1 ET JOUEUR 2
    $(".case").on("click", function () {
        cell = $(this).html()
        if (cell != "") {
            return console.log("case occupée")
        }
        else {
            if (playerActive == player_one) {
                $(this).append(player_one)
                tour++
                return console.log(playerActive = player_two, tour)
            }
            else (playerActive == player_two)
            $(this).append(player_two)
            tour++
            return console.log(playerActive = player_one, tour)
        }
    });


    // CONDITION WINNING & MATCH NUL
    $(".case").click(function () {
        var case1 = $("#1").html()
        var case2 = $("#2").html()
        var case3 = $("#3").html()
        var case4 = $("#4").html()
        var case5 = $("#5").html()
        var case6 = $("#6").html()
        var case7 = $("#7").html()
        var case8 = $("#8").html()
        var case9 = $("#9").html()
        if (tour == 9) {
            return console.log("MATCH NUL")
        }
        else if (tour >= 5) {
            if ((case1 == case2 && case2 == case3 && case1 == player_one) ||
                (case4 == case5 && case5 == case6 && case4 == player_one) ||
                (case7 == case8 && case8 == case9 && case7 == player_one) ||
                (case1 == case4 && case4 == case7 && case1 == player_one) ||
                (case2 == case5 && case5 == case8 && case2 == player_one) ||
                (case3 == case6 && case6 == case9 && case3 == player_one) ||
                (case1 == case5 && case5 == case9 && case1 == player_one) ||
                (case7 == case5 && case5 == case3 && case7 == player_one)) {
                return console.log("JOUEUR 1 GAGNANT")
            }
            else if ((case1 == case2 && case2 == case3 && case1 == player_two) ||
                (case4 == case5 && case5 == case6 && case4 == player_two) ||
                (case7 == case8 && case8 == case9 && case7 == player_two) ||
                (case1 == case4 && case4 == case7 && case1 == player_two) ||
                (case2 == case5 && case5 == case8 && case2 == player_two) ||
                (case3 == case6 && case6 == case9 && case3 == player_two) ||
                (case1 == case5 && case5 == case9 && case1 == player_two) ||
                (case7 == case5 && case5 == case3 && case7 == player_two)) {
                return console.log("JOUEUR 2 GAGNANT")
            }
            else { }
        }
        else { }
    });


    // RESET
    $("#reset").click(function () {
        case1 = $("#1").html("")
        case2 = $("#2").html("")
        case3 = $("#3").html("")
        case4 = $("#4").html("")
        case5 = $("#5").html("")
        case6 = $("#6").html("")
        case7 = $("#7").html("")
        case8 = $("#8").html("")
        case9 = $("#9").html("")
        tour = 0
        playerActive = player_one
    });









































})