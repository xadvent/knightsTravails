import './style.css';
import makeBoard from './building/makeBoard';
import play from './movement/play';

makeBoard();
play(1, 1, 5, 5);