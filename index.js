// Write your solution in this file!

const employee = {
    name: "Steve", 
    streetAddress: "100 Union Ave",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = {...employee};
    updateEmployee[key] = value;
    return updateEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const updateEmployee = {...employee}
    delete updateEmployee[key]
    return updateEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}