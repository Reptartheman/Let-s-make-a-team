// When testing we need to first bring in an instance of the class that we want to test
const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('Constuctor', () => {
        it('should create a new object that shows a name, id, and email', () => {
            const employee = new Employee('Bob','4', 'bob@bob.com');

            expect(typeof employee.name).toEqual('Bob')
            expect(typeof employee.id).toEqual('4')
            expect(typeof employee.email).toEqual('bob@bob.com')
        });
    });

    
})