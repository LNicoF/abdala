/**
 * # TODO
 * - Separate view
 * - Decompose init
 * - Animation
 * - Define state management architecture
 */

const app = {
    nEmptySpaces: 0,
    size: 0,
    auxGrid: [],

    isLoseConditionMet() {
        if ( this.nEmptySpaces > 0 )
            return false

        const ag = this.auxGrid
        for ( let i = 0 ; i < this.size ; ++i ) {
            for ( let j = 1 ; j < this.size ; ++j ) {
                if ( ag[ i ][ j ] == ag[ i ][ j - 1 ] ) return false
                if ( ag[ j ][ i ] == ag[ j - 1 ][ i ] ) return false
            }
        }
        return true
    },

    isWinConditionMet( value ) { return value == 2048 },

    init( query, size, nGenerated ) {
        /** @type { HTMLElement } */
        const table = document.querySelector( query )
        this.size = size

        // Generate table fields
        for ( let i = 0 ; i < size ; ++i ) {
            const row = document.createElement( 'tr' )
            for ( let j = 0 ; j < size ; ++j ) {
                const col = document.createElement( 'td' )
                col.onclick = () => {
                    // console.log( `clicked on ${ j } ${ i }` )
                    this.grid.spawn( j, i, ()=>{} )
                }
                row.appendChild( col )
            }
            table.appendChild( row )
        }

        this.grid = Grid(
            size, nGenerated,
            ( x, y, n ) => { // onChanged
                console.log( 'app::onChange( %s, %s, %s )', x, y, n )
                // fill table cell
                let td = table.children[ y ].children[ x ]
                td.innerHTML = `<div> ${ n != null ? n : '&nbsp;' } </div`
                td.classList = [ `n-${ n }` ]

                if ( n == null )
                    ++this.nEmptySpaces
                else
                    --this.nEmptySpaces

                console.log( this.nEmptySpaces )

                if ( this.isWinConditionMet( n ) ) {
                    document.write( 'U won' )
                    console.log( 'U won' )
                } else if ( this.isLoseConditionMet( n ) ) {
                    document.write( 'U lost' )
                    console.log( 'U won' )
                }
            },
            () => { // onMerged
                console.log( 'merged' )
                ++this.nEmptySpaces
            }
        )

        // Add keyboard mappings
        const keyMappings = [
            {
                key: 'ArrowUp',
                action: () => { this.grid.move( Dirs.UP ) }
            },
            {
                key: 'ArrowDown',
                action: () => { this.grid.move( Dirs.DOWN ) }
            },
            {
                key: 'ArrowLeft',
                action: () => { this.grid.move( Dirs.LEFT ) }
            },
            {
                key: 'ArrowRight',
                action: () => { this.grid.move( Dirs.RIGHT ) }
            },
            {
                code: 'KeyL',
                action: () => {
                    console.log( 'l' )
                    document.querySelector( '.log' )
                            .classList
                            .toggle( 'hidden' )
                }
            }
        ]

        const _log = ( str ) => {
            document.querySelector( '.log' ).innerHTML += str + '<br>'
        }

        const _clear = () => {
            document.querySelector( '.log' ).innerHTML = ''
        }

        const KeyState = { DOWN: 0, UP: 1 }
        var state = KeyState.UP

        document.addEventListener( 'keyup', ( _event ) => {
            state = KeyState.UP
            // Bug: if the key released is not the one previously pressed,
            // it changes the state anyways. This is intentional
        } )

        document.addEventListener( 'keydown', ( event ) => {
            if ( state == KeyState.DOWN )
                return
            state = KeyState.DOWN
            for ( const mapping of keyMappings ) {
                if ( event.key === mapping.key || event.code === mapping.code ) {
                    mapping.action()

                    _clear()
                    this.auxGrid = []
                    for ( let i = 0 ; i < size ; ++i ) {
                        let str = ''
                        let row = []
                        for ( let j = 0 ; j < size ; ++j ) {
                            let n = this.grid.getValueAt( j, i )
                            str += `${ n ? n : 0 } `
                            row.push( n )
                        }
                        _log( str )
                        this.auxGrid.push( row )
                    }
                }
            }
        } )
    },
}
