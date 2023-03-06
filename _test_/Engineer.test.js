const Engineer = require('../lib/Engineer');

describe('The Engineer', () => {
    describe('Engineer', () => {
        it('should create an object with the properties from the Engineer subclass', () => {
            const engineer = new Engineer('Sarah', '005', 'Sarah@bob.com', 'Sarah_codes')

            expect(engineer.name).toEqual('Sarah');
            expect(engineer.id).toEqual('005');
            expect(engineer.email).toEqual('Sarah@bob.com');
            expect(engineer.github).toEqual('Sarah_codes');
        });
    });

    describe('getRole fuction from the Engineer subclass', () => {
        it('should return the Engineers role at the company', () => {
            expect(new Engineer('Sarah', '005', 'Sarah@bob.com','Sarah_codes').getRole()).toBe('Engineer');
        });
    });

    describe('getGitHub fuction from the Engineer subclass', () => {
        it('should return the Engineers github username', () => {
            expect(new Engineer('Sarah', '005', 'Sarah@bob.com','Sarah_codes').getGithub()).toBe('Sarah_codes');
        });
    });
});