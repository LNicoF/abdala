const password = ( () => {

    class CPassword {
        length
        current

        constructor( length = 8 ) {
            this.length = length
        }

        generate() {
            this.current = ( Math.random() + 1 )
                .toString( 36 )
                .substring( 2, this.length + 2 )
            return this.current
        }

        isStrong() {
            try {
                return this.current.match( /[A-Z]/g ).length > 2
                    && this.current.match( /[a-z]/g ).length > 1
                    && this.current.match( /[0-9]/g ).length > 5
            } catch ( _ ) {
                return false ;
            }
        }
    }

    return { CPassword }
} )()