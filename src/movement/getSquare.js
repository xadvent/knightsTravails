export default function(x, y){
    const format = 'C' + x + 'R' + y + '';
    const square = document.querySelector('.' + format);
    return square;
}