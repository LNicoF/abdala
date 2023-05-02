/**
 * @param { -1 | 0 | 1 } x
 * @param { -1 | 0 | 1 } y
 */
const Dir = ( x, y ) => {
    return {
        x: x,
        y: y,
    }
}

const DIRS = {
    DOWN:  Dir(  0,  1 ),
    LEFT:  Dir( -1,  0 ),
    RIGHT: Dir(  1,  0 ),
    UP:    Dir(  0, -1 ),
}