import './style.css';
import makeBoard from './building/makeBoard';
import clearBoard from './building/clearBoard';
import { findPathBFS } from './BFS/getPath';

makeBoard();
console.log(findPathBFS(2, 1, 5, 5))

setTimeout(() => {
    clearBoard()
}, 10000);

