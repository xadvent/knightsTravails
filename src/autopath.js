import { findPathBFS, markRed } from "./BFS/getPath";
import { placeKnight } from "./movement/moveIMG";

export default function (x, y, endX, endY){
    const path = findPathBFS(x, y, endX, endY)
    placeKnight(x, y)
    markRed(path)

    return path
}