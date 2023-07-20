// Write your solution in this file!
let employee = {
    name: "Gyan",
streetAddress: "1 Fielding pl",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key]=value;
    return updatedEmployee;

};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
   delete employee[key];
    return employee;
};
