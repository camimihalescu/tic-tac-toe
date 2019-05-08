$(document).ready(function () {
    var myTurn;
    var computerTurn;
    var mark = "";
    var count=0;
    var result;
    var whosTurn = 0;
    

    //Pick who I want to be X or O and show the message
    $(".pick").change(function () {
        result = $(".pick option:selected").val();
        if (result === "X") {
            myTurn = result;
            computerTurn = "O";
            $("#message").html("The " + myTurn + " marks the spot first!");
        } else {
            myTurn = result;
            computerTurn = "X";
            $("#message").html("The " + myTurn + " marks the spot first!");
        }
    });

    //marking the spots
    $(".click").on("click", function () {
     
        if (whosTurn === 0) {
            mark = $(this).html(myTurn);
            $("#message").html("The " + computerTurn + " marks the spot next!");
            whosTurn = 1;
        } else {
            mark = $(this).html(computerTurn);
            $("#message").html("The " + myTurn + " marks the spot next!");
            whosTurn = 0;
        }
    });
   



});