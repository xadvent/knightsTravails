import getSquare from "./getSquare";

export function getKnightMoves(x, y){
    var moves = [];
    var xMoves = [1, 2, 2, 1, -1, -2, -2, -1];
    var yMoves = [2, 1, -1, -2, -2, -1, 1, 2];

    for (var i = 0; i < xMoves.length; i++) {
        var newX = x + xMoves[i];
        var newY = y + yMoves[i];
        if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
            moves.push([newX, newY]);
        }
    }
    return moves;
}

export function showAllKnightMoves(arr){
    for(let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const square = getSquare(element[0], element[1]);
        square.classList.add('red');
    }
}