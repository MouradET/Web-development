const board = {
    player1: "X",
    player2: "O",
    currentTurn: "X"
}

const winning = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

function play(tegelNr) {
    console.log(tegelNr);
    if (board.currentTurn === board.player1) {
        document.getElementById(tegelNr).innerText = "X";
        board.currentTurn = board.player2;
    }
    else {
        document.getElementById(tegelNr).innerText = "O";
        board.currentTurn = board.player1;
    }

    //controle winnaar

    // for (let index = 0; index < winning.length; index++) {
    //     console.log(winning[index]);
    //     if (document.getElementById(winning[index][0]).innerText === board.player1.innerText &&
    //         document.getElementById(winning[index][1]).innerText === board.player1.innerText &&
    //         document.getElementById(winning[index][2]).innerText === board.player1.innerText) {
    //         console.log("PLayer X heeft gewonnen")
    //     }
    //     else if (
    //         document.getElementById(winning[index][0]).innerText === board.player2.innerText &&
    //         document.getElementById(winning[index][1]).innerText === board.player2.innerText &&
    //         document.getElementById(winning[index][2]).innerText === board.player2.innerText) {
    //         console.log("PLayer O heeft gewonnen");
    //     }   