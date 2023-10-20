import Knight from '../img/knight.svg';
const newKnight = new Image();
newKnight.src = Knight;
newKnight.id = 'knight';

export function placeKnight(x, y) {
    const square = document.querySelector('.C' + x + 'R' + y + '');
    square.appendChild(newKnight)

    if (!square.classList.contains('target')) {
        square.classList.remove('red')
    }
}