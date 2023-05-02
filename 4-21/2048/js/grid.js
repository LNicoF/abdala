/** @param { number } length */
const Grid = ( length, initialSize, onChangeCb = (x,y,n)=>{} ) => {
    const initialValues = [ 2, 4 ] // possible generated values
    let grid = Array( length ) // grid matrix
    // Generates a random index for length l
    const genIdx = ( l = length ) => parseInt( Math.random() * 100 ) % l

    const spawn = ( ifTrue = ()=>{} ) => {
        let done = false
        while ( !done ) {
            let i = genIdx( initialValues.length )
            let x = genIdx()
            let y = genIdx()
            grid[ y ][ x ].fillIfEmpty( initialValues[ i ], () => {
                done = true
                ifTrue()
            } )
        }
    }

    /** @param { { x, y } } dir */
    const move = ( dir ) => {
        //  from    to           jump
        let fx = 0, tx = length, jx = 1
        let fy = 0, ty = length, jy = 1

        // FIX
        if ( dir.x > 0 ) fx = length - 2, tx = -1, jx = -1
        else if ( dir.x < 0 ) fx = 1

        if ( dir.y > 0 ) fy = length - 2, ty = -1, jy = -1
        else if ( dir.y < 0 ) fy = 1

        console.info( `iterating on x from ${ fx } to ${ tx }` )
        console.info( `iterating on y from ${ fy } to ${ ty }` )

        // Move cell by cell
        for ( let x = fx ; x != tx ; x += jx ) {
            for ( let y = fy ; y != ty ; y += jy ) {
                grid[ y ][ x ].shift( grid[ y + dir.y ][ x + dir.x ] )
            }
        }

        // spawn()
    }

    const generateMatrix = () => {
        for ( let y = 0 ; y < length ; ++y ) {
            grid[ y ] = Array( length )
            for ( let x = 0 ; x < length ; ++x ) {
                grid[ y ][ x ] = Cell( ( n ) => onChangeCb( x, y, n ) )
            }
        }
    }

    const fill = () => {
        let n = 0
        while ( n < initialSize )
            spawn( () => { ++n } )
    }

    const construct = () => {
        generateMatrix()
        fill()
    }
    construct()

    return {
        /** @param { { x, y } } dir */
        move( dir ) { move( dir ) }
    }
}