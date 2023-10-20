import './style.css';
import makeBoard from './building/makeBoard';
import { findPathBFS, moveKnight } from './BFS/getPath';
import { moveImg } from './movement/moveIMG';

makeBoard();
moveImg(1,1);
findPathBFS(1,1,5,5)



/*
    moveKnight is contained within findPathBFS and is called when the path is found.
    moveKnight takes the path array and moves the knight to each position in the array.
    moveKnight should be called after the path is found (returned by findPathBFS).

    moveImg SHOULD be called when a square is clicked. It takes the x and y coordinates of the square
    Might only start movement when the knight is clicked for moveIMG

    Should change findpathBFS to return the path array and then call moveKnight on the path array
        This allows for 
        - better testing of the path array
        - better testing of moveKnight
        - and allows for the path to be displayed before the knight moves
        - also allows for the path to be displayed without the knight moving
        


    The following code is for testing purposes only. It should be removed when the project is complete.
        PS: I'm not sure if this is the best way to test the code. I'm open to suggestions.
        PSPS: I'm not sure if this is the best way to write the code. I'm open to suggestions.
        PSPSPS: I'm not sure if this is the best way to write the comments. I'm open to suggestions.

        PSPSPSPS: the test code is not working as intended. I'm open to suggestions.


// const regex = /C(\d+)R(\d+)/;
// const allSquares = document.querySelectorAll('.square')
// allSquares.forEach(square => {
//     square.addEventListener('click', function (e) {
//         if (document.querySelector('#knight') !== null) {
//             clearBoard();
//         } else {
//             const position = e.target.classList[2];
//             const match = position.match(regex);
//             const x = parseInt(match[1]);
//             const y = parseInt(match[2]);
//             console.log(x,y)
//             findPathBFS(x, y, 5, 5);
//         }
//     })

// })

*/