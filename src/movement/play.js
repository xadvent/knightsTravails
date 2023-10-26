import clearBoard  from '../building/clearBoard'
import { findPathBFS, moveKnight } from '../BFS/getPath';
import autopath from '../autopath';

export default function (x, y, endX, endY) {
    window.addEventListener('DOMContentLoaded', async function () {
        let path = findPathBFS(x, y, endX, endY);
        autopath(x, y, endX, endY);

        window.addEventListener('click', async function (e) {
            if (e.target.id === 'knight') {
                await moveKnight(path)
                    .then(() => {
                        this.window.removeEventListener('click', this);
                        clearBoard();
                        // Storing X and Y coordinates of the knight at the END of the path so it's not automatically moved
                        x = endX;
                        y = endY;
                        autopath(x, y, endX, endY);
                        window.addEventListener('click', this);
                    });
            }
            else if (e.target.classList.contains('square')) {
                clearBoard();

                // const position = e.target.classList[2];
                const values = getLocation(e.target.classList[2])

                // Re-assign PATH
                path = findPathBFS(values.x, values.y, endX, endY);
                autopath(values.x, values.y, endX, endY);
                window.addEventListener('click', this);
            }
        });
    });
}

function getLocation(input){
    const regex = /C(\d+)R(\d+)/;
    const match = input.match(regex) || [];
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);

    return {
        x: x,
        y: y
    }
}