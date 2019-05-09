$(document).ready(function () {
    var myTurn;
    var computerTurn;
    var mark = "";
    var result;
    var whosTurn = 0;
    var finalTurn;  
    

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
        winningPosibilities(myTurn);
    });

    // function computersTurn() {
    //     var compMark = false;
    //     while (compMark === false) {
    //         var compMove = (Math.random() * 10).toFixed();
    //         var move = $("#a" + compMove).html();
    //         if (move === $("#a") {
    //             $("#a" + compMove).html(computerTurn);
    //             compMark = true;
    //             finalTurn=computerTurn;
    //         }
    //     }
    // }
    // function winningPos(){
    //     for(var i=0; i<array.length;i++){
    //         for(var j=0; j<array[i].length;j++){
    //             if(array[i][j]==array[i][i+j]){
    //                 alert ("winner");

    //             }
    //             return true;
    //         }
    //     }
    // }
    function winningPosibilities(playerMove) {
        var winning = false;
        if (playerTurn(1, 2, 3, playerMove) || playerTurn(4, 5, 6, playerMove) || playerTurn(7, 8, 9, playerMove) ||
            playerTurn(1, 4, 7, playerMove) || playerTurn(2, 5, 8, playerMove) || playerTurn(3, 6, 9, playerMove) ||
            playerTurn(1, 5, 9, playerMove) || playerTurn(3, 5, 7, playerMove))
            {
                winning = true;
                alert("Player " + playerMove + " wins!");
            }
            
        // }else{
            
        //     alert("There is no winner! It's a DRAW!");
            
        // }
    }

    function playerTurn(a1, a2, a3, playerMove) {
        var playerMark = false;
        if (putMark(a1) == playerMove  && putMark(a2) == playerMove  && putMark(a3) == playerMove ) {
            playerMark = true;
        }
        return playerMark;
    }

    function putMark(nr) {
        return $("#a" + nr).text();
    }
    function refreshBtn(){
        $(".click").val() = " ";
    }
    
    $(".btn").click(function(){
        refreshBtn();
    });


});