const employee = {
    name: 'Sam',
    streetAddress: 'No Clue lane'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {
      ...employee,
      [key]: value
    };
  
    return updatedEmployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
      };


function deleteFromEmployeeByKey(employee, key) {
        // Create a new object using the spread operator
        const newEmployee = { ...employee };
      
        // Delete the property with the specified key from the new object
        delete newEmployee[key];
      
        // Return the new object without the identified key-value pair
        return newEmployee;
      }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee;
};
