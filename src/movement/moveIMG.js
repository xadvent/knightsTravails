import Knight from '../img/knight.svg';
import King from '../img/king.png'
import getSquare from './getSquare';
import Move from '../sounds/move-self.mp3'

const newKnight = new Image();
newKnight.src = Knight;
newKnight.id = 'knight';

const newKing = new Image();
newKing.src = King;
newKing.id = 'king';

var moveSound = new Audio(Move)
moveSound.id = 'moveSound'
moveSound.volume = 0.7
document.querySelector('#start-menu').appendChild(moveSound)

export function placeKnight(x, y) {
    const square = getSquare(x, y);
    square.appendChild(newKnight);
    document.querySelector('#moveSound').play()

    if (!square.classList.contains('target')) {
        square.classList.remove('red');
    }
}

export function placeTarget(x, y) {
    const square = getSquare(x, y);
    square.appendChild(newKing)
}