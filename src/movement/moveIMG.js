import Knight from '../img/knight.svg';
import King from '../img/king.png'
import getSquare from './getSquare';

const newKnight = new Image();
newKnight.src = Knight;
newKnight.id = 'knight';

const newKing = new Image();
newKing.src = King;
newKing.id = 'king';

export function placeKnight(x, y) {
    const square = getSquare(x, y);
    square.appendChild(newKnight);

    if (!square.classList.contains('target')) {
        square.classList.remove('red');
    }
}

export function placeTarget(x, y) {
    const square = getSquare(x, y);
    square.appendChild(newKing)
}