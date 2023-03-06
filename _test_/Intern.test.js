const Intern = require('../lib/Intern');


describe('The Intern', () => {
    describe('Intern', () => {
        it('should create an object with the properties from the Intern subclass', () => {
            const intern = new Intern('Jimmy', '005', 'Jimmy@bob.com', 'Jimmy_codes')

            expect(intern.name).toEqual('Jimmy');
            expect(intern.id).toEqual('005');
            expect(intern.email).toEqual('Jimmy@bob.com');
            expect(intern.school).toEqual('Jimmy_codes');
        });
    });

    describe('getRole fuction from the Intern subclass', () => {
        it('should return the Interns role at the company', () => {
            expect(new Intern('Jimmy', '005', 'Jimmy@bob.com','Yale').getRole()).toBe('Intern');
        });
    });

    describe('getGitHub fuction from the Intern subclass', () => {
        it('should return the Interns github username', () => {
            expect(new Intern('Jimmy', '005', 'Jimmy@bob.com','Yale').getSchool()).toBe('Yale');
        });
    });
});
