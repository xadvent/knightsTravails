import './style.css';
import makeBoard from './building/makeBoard';
import { getKnightMoves, showKnightMoves } from './movement/checkingMoves';

makeBoard();
const arr = getKnightMoves(4,5);
showKnightMoves(arr);