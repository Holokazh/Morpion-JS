$(function () {

    
    var player1 = document.querySelector("#player1")
    var player2 = document.querySelector("#player2")

    $(".case").click(function(){
        $(this).append("X")
    })
    
    
    $(".case").click(function(){
        $(this).append("O")
    })

})