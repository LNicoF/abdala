'use strict'

/**
 * @param { number } size
 * @param { number } nSpawned
 * @param { ( x, y, value ) => void } onChanged
 * @param { ( x, y, value ) => void } onMerged
 */
const Grid = ( size, nSpawned, onChanged, onMerged ) => {
    // console.log( 'Grid( %s, %s, %s )', size, nSpawned, onChanged )
    const spawnChances = Object.freeze({
        1024: 1,
        2: .9,
        4: .1,
    } )

    /** @type { Array< Array< { put(), fill(), clear(), unlock(), getValue() } } > > */
    let grid = Array( size )

    /** @returns number */
    const getRandomValue = () => {
        console.log( 'Grid::_getRandomValue()' )
        let bottom = 0 ;
        for ( const [ key, value ] of Object.entries( spawnChances ) ) {
            console.log( key, value )
            bottom += value
            const rand = Math.random()
            if ( rand <= bottom ) {
                return parseInt( key )
            }
        }
        return parseInt( Object.keys( spawnChances )[ 0 ] )
    }

    /**
     * @param { number } size
     * @returns number
     */
    const getRandomIndex = ( size ) => {
        // console.log( 'Grid::_getRandomIndex( %s )', size )
        return parseInt( Math.random() * 100 ) % size
    }

    /** @returns void */
    const generateGrid = () => {
        // console.log( 'Grid::_generateGrid()' )
        for ( let y = 0 ; y < size ; ++y ) {
            grid[ y ] = Array( size )
            for ( let x = 0 ; x < size ; ++x ) {
                grid[ y ][ x ] = Cell( ( value ) => onChanged( x, y, value ) )
            }
        }
    }

    const spawn = ( x = -1, y = -1, onSpawned = ()=>{} ) => {
        let _x = x, _y = y
        // console.log( 'Grid::_spawn( %s, %s, %s )', x, y, onSpawned )
        if ( x == -1 ) _x = getRandomIndex( size )
        if ( y == -1 ) _y = getRandomIndex( size )
        // console.log( 'spawning on %s %s', _x, _y )
        grid[ _y ][ _x ].fill( getRandomValue(), onSpawned )
    }

    const fillGrid = () => {
        // console.log( 'Grid::_fillGrid()' )
        let count = 0
        while ( count < nSpawned ) {
            spawn( -1, -1, () => { ++count } )
        }
    }

    const isInsideSqr = ( x, y ) => {
        return x != -1 && x != size &&
               y != -1 && y != size
    }

    const _move = ( x, y, dir, dm ) => {
        // console.log( '_move( %s, %s, %s )', x, y, dir.toString() )
        if (
            ( x == dm.fx + dir.x && dir.x != 0 ) ||
            ( y == dm.fy + dir.y && dir.y != 0 ) ||
            !isInsideSqr( x, y )
        ) {
            return
        }

        // console.log( 'starting...' )
        let from = grid[ y ][ x ]
        let to   = grid[ y + dir.y ][ x + dir.x ]

        if ( from.getValue() == null )
            return

        // console.log( 'moving...' )
        let gotMerged = false
        from.shift( to, ()=>{ gotMerged = true }, onMerged )

        if ( !gotMerged )
            return false

        _move( x + dir.x, y + dir.y, dir, dm )
        return true
    }

    const _endMovement = () => {
        for ( const row of grid ) {
            for ( const cell of row ) {
                cell.unlock()
            }
        }
    }

    let res = {
        /**
         * @param { number } x
         * @param { number } y
         * @param { () => void } onSpawned
         */
        spawn( x = -1, y = -1, onSpawned = ()=>{} ) {
            // console.log( 'Grid::spawn( %s, %s, %s )', x, y, onSpawned )
            spawn( x, y, onSpawned )
        },

        /**
         * @param { { x, y } } dir
         */
        move( dir ) {
            // console.log( 'Grid::move( { x: %s, y: %s } )', dir.x, dir.y )
            const dm = DirMovement[ dir.toString() ].upTo( size )
            // console.log( dm )

            let movedAny = false
            // Move cell by cell
            for ( let x = dm.fx ; x != dm.tx ; x += dm.jx ) {
                for ( let y = dm.fy ; y != dm.ty ; y += dm.jy ) {
                    const gotMoved = _move( x, y, dir, dm )
                    if ( gotMoved )
                        movedAny = true
                }
            }

            _endMovement()

            if ( !movedAny )
                return

            // spawnNext
            let done = false
            while ( !done ) {
                spawn( -1, -1, () => { done = true } )
            }
        },

        getValueAt( x, y ) {
            return grid[ y ][ x ].getValue()
        },
    }

    generateGrid()
    fillGrid()

    return res
}
