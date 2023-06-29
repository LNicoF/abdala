const index = ( () => {

const { Form } = form_processor
const { CEmpleado } = empleado

let employee

const outputEmployee = () => {
    let element = document.querySelector( '#empleado-form .output')
    element.textContent =`Name ${ employee.name }
Year of joining: ${ employee.joinYear }
Salary: ${ employee.salary }
Address: ${ employee.address }
Years from joining: ${ employee.getYearsAfterJoin() }`

    if ( employee.livesOnWallStreet() ) {
        element.textContent += `
Indeed, he lives on Wall Street`
    }
}

const updateEmployee = ( name, joinYear, salary, address ) => {
    if ( !( name && joinYear && salary && address ) ) {
        return
    }
    employee = new CEmpleado( name, joinYear, salary, address )
    outputEmployee()
}

const main = () => {
    let form = new Form( { 
        query: '#empleado-form',
        fields: [ 'name', 'join-year', 'salary', 'address' ],
        onFieldChange: ( _n, _v, form ) => {
            updateEmployee(
                form.getName(),
                form.getJoinYear(),
                form.getSalary(),
                form.getAddress()
            )
        },
        onSubmit: ( form ) => {
            updateEmployee(
                form.getName(),
                form.getJoinYear(),
                form.getSalary(),
                form.getAddress()
            )
        }
    } )
}

main() ;

})()