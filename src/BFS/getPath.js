import { getKnightMoves } from "../movement/checkingMoves";

export class Node {
    constructor(x, y, path = []){
        this.x = x;
        this.y = y;
        this.path = [...path, [x, y]];
    }
}

export function findPathBFS(x, y, endX, endY){
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
            markRed(currentNode.path);
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

function markRed(arr){
    let count = 1;
    for(let index = 1; index < arr.length; index++) {
        const element = arr[index];
        const position ='C' + element[0] + 'R' + element[1] + '';
        const square = document.querySelector('.' + position);
        setTimeout(() => {
            square.classList.add('red');
            square.textContent = count++;
        }, 400 * index - 1);
    }
}