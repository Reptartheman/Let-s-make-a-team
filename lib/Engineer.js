const Employee = require('./Employee');

// "extends": this allows us to create a child class of the Employee class
// "Child class": Inherits the methods from the parent. Which in this case is the 'Employee' class.
// "super": Is a method that allows us to build on top of or tweak some functionality
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    } 

    getRole() {
        return 'Engineer';
    };

    getGithub() {
        return this.github;
    };

}

module.exports = Engineer;