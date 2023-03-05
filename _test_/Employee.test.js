// When testing we need to first bring in an instance of the class that we want to test
const Employee = require('../lib/Employee');


//line 6 starts the testing suite
describe('Employee class', () => {
    describe('Constuctor', () => {
        it('should create a new object that shows a name, id, and email', () => {
            const employee = new Employee('Bob','4', 'bob@bob.com');

            expect(employee.name).toEqual('Bob')
            expect(employee.id).toEqual('4')
            expect(employee.email).toEqual('bob@bob.com')
        });
    });

    describe('getName', () => {
        it('should return the persons name', () => {
            expect(new Employee('Bob', '4', 'bob@bob.com').getName()).toBe('Bob');
        });
    });

    describe('getId', () => {
        it('should return the id', () => {
            expect(new Employee ('Bob', '4', 'bob@bob.com').getId()).toBe('4');
        });
    });

    describe('getEmail', () => {
        it('should return the employee email', () => {
            expect(new Employee ('Bob', '4', 'bob@bob.com').getEmail()).toBe('bob@bob.com');
        });
    });

    describe('getRole', () => {
        it('should give the employees job', () => {
            expect(new Employee ('Bob', '4', 'bob@bob.com').getRole()).toBe('Employee');
        });
    });
});