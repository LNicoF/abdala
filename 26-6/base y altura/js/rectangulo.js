const rectangulo = ( () => {

    class CRectangulo {
        base
        altura

        constructor( base, altura ) {
            this.base   = base
            this.altura = altura
        }

        calcularArea() {
            return ( this.base * this.altura ) / 2
        }
    }

    return { CRectangulo }

})()