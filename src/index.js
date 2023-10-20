import './style.css';
import makeBoard from './building/makeBoard';
import clearBoard from './building/clearBoard';
import { findPathBFS, moveKnight } from './BFS/getPath';
import { placeKnight } from './movement/moveIMG';
import autopath from './autopath';

makeBoard();

// change figures below to change starting and ending positions

window.addEventListener('DOMContentLoaded', async function () {
    const endX = 5;
    const endY = 5;
    let x = 1;
    let y = 1;
    let path = findPathBFS(x, y, endX, endY);
    placeKnight(x, y);
    autopath(x, y, endX, endY);

    window.addEventListener('click', async function (e) {
        if (e.target.id === 'knight') {
            await moveKnight(path)
                .then(() => {
                    this.window.removeEventListener('click', this);
                    clearBoard();
                    x = endX;
                    y = endY;
                    path = findPathBFS(x, y, endX, endY);
                    placeKnight(x, y);
                    autopath(x, y, endX, endY);
                    window.addEventListener('click', this);
                });
        }
        else if (e.target.classList.contains('square')) {
            const regex = /C(\d+)R(\d+)/;
            const position = e.target.classList[2];
            const match = position.match(regex) || [];
            const x = parseInt(match[1], 10);
            const y = parseInt(match[2], 10);
            placeKnight(x, y);
            clearBoard();
            path = findPathBFS(x, y, endX, endY);
            autopath(x, y, endX, endY);
            window.addEventListener('click', this);
        }
    });
});


/*
    moveKnight is contained within findPathBFS and is called when the path is found.
    moveKnight takes the path array and moves the knight to each position in the array.
    moveKnight should be called after the path is found (returned by findPathBFS).

    placeKnight SHOULD be called when a square is clicked. It takes the x and y coordinates of the square
    Might only start movement when the knight is clicked for placeKnight

    Should change findpathBFS to return the path array and then call moveKnight on the path array
        This allows for 
        - better testing of the path array
        - better testing of moveKnight
        - and allows for the path to be displayed before the knight moves
        - also allows for the path to be displayed without the knight moving
*/