import clearBoard from "./building/clearBoard";
import { moveKnight, findPathBFS, markRed } from "./BFS/getPath";
import { placeKnight } from "./movement/moveIMG";

export default function (x, y, endX, endY){
    const path = findPathBFS(x, y, endX, endY)
    placeKnight(x, y)
    markRed(path)
    return path

    // window.addEventListener('click', async function(e){
    //     if (e.target.id === 'knight'){
    //         await moveKnight(path)
    //         .then(() => {
    //             this.window.removeEventListener('click', this)
    //             clearBoard()
    //             autopath(endX, endY, x, y)
    //         })
    //     } 
    //     else if (e.target.classList.contains('square')){

    //         const regex = /C(\d+)R(\d+)/;
    //         const position = e.target.classList[2];
    //         const match = position.match(regex);
    //         const x = parseInt(match[1]);
    //         const y = parseInt(match[2]);
    //         placeKnight(x, y)
    //         clearBoard()
    //         autopath(x, y, endX, endY)
    //     }
    // })
}