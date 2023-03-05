const Manager = require('../lib/Manager');

describe('The manager', () => {
    describe('Manager', ()=> {
        it('should create an object with the properties from the Manager subclass', () => {
            const manager = new Manager('Bob', '4', 'bob@bob.com', '7');

            expect(manager.name).toEqual('Bob');
            expect(manager.id).toEqual('4');
            expect(manager.email).toEqual('bob@bob.com');
            expect(manager.officeNumber).toEqual('7');
        });
    });

    describe('getRole function from Manager class', () => {
        it('should return the Managers role at the company', () => {
            expect(new Manager('Bob', '4','bob@bob.com', '7').getRole().toBe('Manager'));
        });
    });

    describe('officeNumber function form the Manager class', () => {
        it('should return the Managers office number', () => {
            expect(new Manager('Bob', '4','bob@bob.com', '7').getOfficeNumber().toBe('7'));
        });
    });
});
