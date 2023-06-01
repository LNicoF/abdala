/** @param { ( value: number | null ) => void } onChanged */
const EmptyCellSt = ( onChanged ) => {
    // console.log( 'EmptyCellSt( %s )', onChanged )

    let res = {
        mark: 'empty',

        /**
         * @param { number } value
         * @param { () => void } onPut
         */
        put( value, onPut ) {
            if ( value == null )
                return this
            // console.log( 'EmptyCellSt::put( %s, %s )', value, onPut )
            res = FilledCellSt( value, ( n ) => {
                // console.log( 'EmptyCellSt::put( %s, %s ).onChanged( %s )', value, onPut, n )
                onChanged( n )
            } )
            onPut()
            return res
        },

        /**
         * @param { number } value
         * @param { () => void } onFilled
         */
        fill( value, onFilled ) {
            if ( value == null )
                return this
            // console.log( 'EmptyCellSt::fill( %s, %s )', value, onFilled )
            let res = this.put( value, ()=>{} )
            // console.log( res.mark )
            onFilled()
            return res
        },

        clear() {
            // console.log( 'EmptyCellSt::clear()' )
            return this
        },

        shift() {
            return this
        },

        unlock() {},

        /** @returns number | null */
        getValue() {
            return null
        },
    }

    onChanged( null )

    return res
}

/**
 * @param { number } rValue
 * @param { ( value: number | null ) => void } onChanged
 */
const FilledCellSt = ( rValue, onChanged ) => {
    // console.log( 'FilledCellSt( %s, %s )', rValue, onChanged )

    let value  = rValue
    let isLocked = false

    const merge = ( otherValue, onMerged ) => {
        if ( isLocked || otherValue != value )
            return
        // console.log( 'FilledCellSt::_merge( %s, %s )', otherValue, onMerged )
        value *= 2
        isLocked = true
        onMerged( value )
        onChanged( value )
    }

    let res = {
        mark: 'filled',

        put( rValue, onPut, onMerged ) {
            // console.log( 'FilledCellSt::put( %s, %s )', rValue, onPut )
            merge( rValue, ( value ) => {
                onPut( value )
                onMerged( value )
            } )
            return this
        },

        /** @param { () => void } onFilled */
        fill() {
            // console.log( 'FilledCellSt::fill()' )
            return this
        },

        clear() {
            // console.log( 'FilledCellSt::clear()' )
            return EmptyCellSt( onChanged )
        },

        shift( onto, onPut, onMerged ) {
            const proc = isLocked ? onto.fill : onto.put

            let res = this
            proc(
                value,
                () => {
                    res = this.clear()
                    onPut()
                },
                onMerged
            )
            return res
        },

        unlock() {
            isLocked = false
        },

        /** @returns number | null */
        getValue() {
            return value
        }
    }

    onChanged( value )

    return res
}

/** @param { ( value: number | null ) => void } onChanged */
const Cell = ( onChanged ) => {
    // console.log( 'Cell( %s )', onChanged )

    let state = EmptyCellSt( onChanged )

    /**
     * @param { string } method
     * @param { () => void } action
     */
    const logTransition = ( method, action ) => {
        console.log( `before( %s ) Cell::%s`, state.mark, method )
        action()
        console.log( `after( %s ) Cell::%s`, state.mark, method )
    }

    let res = {
        /**
         * @param { number } value
         * @param { () => void } onPut
         */
        put ( value, onPut, onMerged ) {
            // logTransition( `put( ${ value }, ${ onPut } )`, () => {
                state = state.put( value, onPut, onMerged )
            // } )
        },

        /**
         * @param { number } value
         * @param { () => void } onFilled
         */
        fill( value, onFilled ) {
            // logTransition( `fill( ${ value }, ${ onFilled } )`, () => {
                state = state.fill( value, onFilled )
            // } )
        },

        clear() {
            // logTransition( 'clear()', () => {
                state = state.clear()
            // } )
        },

        shift( onto, onPut, onMerged ) {
            // logTransition( `fill( ${ value }, ${ onFilled } )`, () => {
                state = state.shift( onto, onPut, onMerged )
            // } )
        },

        unlock() {
            state.unlock()
        },

        /** @returns number | null */
        getValue() {
            return state.getValue()
        }
    }

    return res
}
