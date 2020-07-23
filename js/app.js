$(function () {

    var player_one = 1
    var player_two = 2
    var tour = 1

    $(".case").click(function(){
        if (player_one == tour) {
            $(this).append("X")
            return tour = 2;
        }
        else (player_two == tour)
            $(this).append("O")
            return tour = 1;
    });

})