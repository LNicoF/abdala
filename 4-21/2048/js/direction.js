/**
 * @param { -1 | 0 | 1 } x
 * @param { -1 | 0 | 1 } y
 */
const Dir = ( x, y ) => {
    return {
        x: x,
        y: y,
        toString() { return `_${ this.x }_${ this.y }` },
    }
}

const Dirs = {
    DOWN:  Dir(  0,  1 ),
    LEFT:  Dir( -1,  0 ),
    RIGHT: Dir(  1,  0 ),
    UP:    Dir(  0, -1 ),
}

let DirMovement = { }

DirMovement[ Dirs.UP.toString() ] = {
    upTo( size ) {
        return {
        //  from   to        jump
            fx: 0, tx: size, jx: 1,
            fy: 1, ty: size, jy: 1,
        }
    }
}

DirMovement[ Dirs.DOWN.toString() ] = {
    upTo( size ) {
        return {
            fx: 0,        tx: size, jx: 1,
            fy: size - 2, ty: -1,   jy: -1,
        }
    }
}

DirMovement[ Dirs.LEFT.toString() ] = {
    upTo( size ) {
        return {
            fx: 1, tx: size, jx: 1,
            fy: 0, ty: size, jy: 1,
        }
    }
}

DirMovement[ Dirs.RIGHT.toString() ] = {
    upTo( size ) {
        return {
            fx: size - 2, tx: -1,   jx: -1,
            fy: 0,        ty: size, jy: 1,
        }
    }
}
