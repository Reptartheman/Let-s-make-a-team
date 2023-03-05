// class creates a template for an object
// the constructor will create and start an instance of the object

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };
    // the next lines contain functions that will allow us to grab the parameters from the class above.
    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee";
    }
};

module.exports = Employee;


