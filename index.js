// Write your solution in this file!
let employee = {
    name: 'SamSpeedy',
    streetAddress: 'Abuja Nigeria',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
    
};

function deleteFromEmployeeByKey(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
};