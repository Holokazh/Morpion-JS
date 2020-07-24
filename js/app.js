$(function () {

    var playerActive = ""
    const player_one = "X"
    const player_two = "O"
    var tour = 0
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


    // CONDITION MATCH NUL
    $(".case").one("click", function () {
        var case1 = $("#1").html()
        var case2 = $("#2").html()
        var case3 = $("#3").html()
        var case4 = $("#4").html()
        var case5 = $("#5").html()
        var case6 = $("#6").html()
        var case7 = $("#7").html()
        var case8 = $("#8").html()
        var case9 = $("#9").html()
        tour++
        console.log(tour)
        if (tour == 9) {
            return alert("MATCH NUL")
        }
        else if (tour >= 5) {
            if ((case1 == case2 && case2 == case3 && case1 == player_one) ||
                (case4 == case5 && case5 == case6 && case4 == player_one) ||
                (case7 == case8 && case8 == case9 && case7 == player_one) ||
                (case1 == case4 && case4 == case7 && case1 == player_one) ||
                (case2 == case5 && case5 == case8 && case2 == player_one) ||
                (case3 == case6 && case6 == case9 && case3 == player_one) ||
                (case1 == case5 && case5 == case9 && case1 == player_one) ||
                (case7 == case5 && case5 == case3 && case7 == player_one) ) {
                return alert("JOUEUR 1 GAGNANT")
            }
            else if ((case1 == case2 && case2 == case3 && case1 == player_two) ||
                    (case4 == case5 && case5 == case6 && case4 == player_two) ||
                    (case7 == case8 && case8 == case9 && case7 == player_two) ||
                    (case1 == case4 && case4 == case7 && case1 == player_two) ||
                    (case2 == case5 && case5 == case8 && case2 == player_two) ||
                    (case3 == case6 && case6 == case9 && case3 == player_two) ||
                    (case1 == case5 && case5 == case9 && case1 == player_two) ||
                    (case7 == case5 && case5 == case3 && case7 == player_two) ) {
                return alert("JOUEUR 2 GAGNANT")
            }
            else { }
        }
        else { }
    });


    // CONDITION WINNING
    // $(".case").one("click", function () {
    //     if (case1 === player_one && case1 === case2 && case2 === case3) {
    //     return alert("JOUEUR 1 GAGNANT")
    //     }
    //     else (case1 == player_two && case1 == case2 && case2 == case3)
    //     return alert("JOUEUR 2 GAGNANT")
    // });










































})