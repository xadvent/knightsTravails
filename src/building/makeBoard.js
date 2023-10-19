const chessBoard = document.getElementById('chess-board')

export default function makeBoard() {
    for(let i = 8; i > 0; i--){
        for(let j = 1; j <= 8; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            
            if((i + j) % 2 === 0){
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }
            square.classList.add('C' + j  + 'R' + i);
            chessBoard.appendChild(square);
        }
    }
}