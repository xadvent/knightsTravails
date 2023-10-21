import './style.css';
import makeBoard from './building/makeBoard';
import play from './movement/play';

makeBoard();

// change figures below to change starting and ending positions
play(1, 1, 5, 5);

 
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