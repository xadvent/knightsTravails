import { getKnightMoves } from "../movement/checkingMoves";
import { placeKnight } from "../movement/moveIMG";

export class Node {
    constructor(x, y, path = []){
        this.x = x;
        this.y = y;
        this.path = [...path, [x, y]];
    }
}

export function findPathBFS(x, y, endX, endY){
    let start = '.C' + x + 'R' + y + '';
    document.querySelector(start).classList.add('start');

    let queue = [];
    queue.push(new Node(x, y));

    // Stop from revisiting nodes
    let visited = new Set();
    visited.add(x + ',' + y);

    // cont queue until empty
    while (queue.length > 0){
        let currentNode = queue.shift();

        // If matches, return path
        if(currentNode.x === endX && currentNode.y === endY){
            // markRed(currentNode.path);
            // moveKnight(currentNode.path)
            // UNCOMMENT FOR AUTORUN ^^

            return currentNode.path;
        }

        let moves = getKnightMoves(currentNode.x, currentNode.y);

        for(let move of moves){
            let [nextX, nextY] = move;

            // Check if already visited
            if(!visited.has(nextX + ',' + nextY)){
                visited.add(nextX + ',' + nextY);

                // Enqueue new position w/ updated path
                queue.push(new Node(nextX, nextY, currentNode.path));
            }
        }
    }
    return null; // return if there's no path to target
}

export function markRed(arr){
    let count = 1;
    for(let index = 1; index < arr.length; index++) {
        const element = arr[index];
        const position ='C' + element[0] + 'R' + element[1] + '';
        const square = document.querySelector('.' + position);
        square.classList.add('red');
        square.textContent = count++;
    }
}

export async function moveKnight(arr) {
    // let checkForDelete = document.querySelectorAll('#knight');
    // if (checkForDelete.length > 0) {
    //     checkForDelete.forEach(element => {
    //         element.remove();
    //     });
    // }

    let firstRun = true
    // running through from start to end - changing positions every 400ms
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(firstRun){
            firstRun = false;
            continue;
        }
        await new Promise(resolve => {
            setTimeout(() => {
                placeKnight(element[0], element[1]);
                resolve();
            }, 500);
        });
    }
}