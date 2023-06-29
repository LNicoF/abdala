const empleado = ( () => {

    class CEmpleado {
        name
        joinYear
        salary
        address

        constructor( name, joinYear, salary, address ) {
            this.name     = name
            this.joinYear = joinYear
            this.salary   = salary
            this.address  = address
        }

        getYearsAfterJoin() {
            return new Date().getFullYear() - this.joinYear
        }

        livesOnWallStreet() {
            return this.address.endsWith( 'WallStreet' )
        }
    }

    return { CEmpleado }

} )() ;