export default class Node {
    constructor(x, y, path = []){
        this.x = x;
        this.y = y;
        this.path = [...path, [x, y]];
    }
}