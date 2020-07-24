$(function () {

    var playerActive = ""
    const player_one = "X"
    const player_two = "O"
    playerActive = player_one
    tour = 0
    tourPlayerOne = document.querySelector(".p1")
    tourPlayerTwo = document.querySelector(".p2")
    tourPlayerOne.classList.toggle('active')


    ///// SWITCH ENTRE JOUEUR 1 ET JOUEUR 2 /////
    $(".case").on("click", function () {
        cell = $(this).html()
        if (cell != "") {
            return console.log("case occupée")
        }
        else {
            if (playerActive == player_one) {
                $(this).append(player_one)
                tour++
                return console.log(playerActive = player_two, tour),
                    tourPlayerTwo.classList.toggle("active"),
                    $(".p1.active").removeClass("active")
            }
            else (playerActive == player_two)
            $(this).append(player_two)
            tour++
            return console.log(playerActive = player_one, tour),
                tourPlayerOne.classList.toggle("active"),
                $(".p2.active").removeClass("active")
        }
    });

    ///// WINING AND MATCH NUL /////ddddddq
    function win(p1, p2, compteur) {
        var case1 = $("#1").html()
        var case2 = $("#2").html()
        var case3 = $("#3").html()
        var case4 = $("#4").html()
        var case5 = $("#5").html()
        var case6 = $("#6").html()
        var case7 = $("#7").html()
        var case8 = $("#8").html()
        var case9 = $("#9").html()
        if (compteur >= 5) {
            if ((case1 == case2 && case2 == case3 && case1 == p1) ||
                (case4 == case5 && case5 == case6 && case4 == p1) ||
                (case7 == case8 && case8 == case9 && case7 == p1) ||
                (case1 == case4 && case4 == case7 && case1 == p1) ||
                (case2 == case5 && case5 == case8 && case2 == p1) ||
                (case3 == case6 && case6 == case9 && case3 == p1) ||
                (case1 == case5 && case5 == case9 && case1 == p1) ||
                (case7 == case5 && case5 == case3 && case7 == p1)) {
                return alert("JOUEUR 1 GAGNANT" + clear())
            }
            else if ((case1 == case2 && case2 == case3 && case1 == p2) ||
                (case4 == case5 && case5 == case6 && case4 == p2) ||
                (case7 == case8 && case8 == case9 && case7 == p2) ||
                (case1 == case4 && case4 == case7 && case1 == p2) ||
                (case2 == case5 && case5 == case8 && case2 == p2) ||
                (case3 == case6 && case6 == case9 && case3 == p2) ||
                (case1 == case5 && case5 == case9 && case1 == p2) ||
                (case7 == case5 && case5 == case3 && case7 == p2)) {
                return alert("JOUEUR 2 GAGNANT" + clear())
            }
            else if (compteur == 9) {
                return alert("MATCH NUL" + clear())
            }
            else { }
        }
        else { }
    }

    $(".case").click(function () {
        return win(player_one, player_two, tour)
    });


    ///// RESET /////
    function clear() {
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
        $(".p1").addClass("active")
        $(".p2.active").removeClass("active")
    }

    $("#reset").click(function () {
        return clear()
    });






































})