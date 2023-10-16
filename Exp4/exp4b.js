
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  
   
    this.getFullName = () => {
      return this.firstName + ' ' + this.lastName;
    };
  }
  
  class PersonClass {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  
  
      this.getFullName = () => {
        return this.firstName + ' ' + this.lastName;
      };
    }
  
    // Arrow function method
    greet = () => {
      return `Hello, ${this.getFullName()}!`;
    };
  }
  
  
  const person1 = new Person('Alice', 'Johnson');
  const person2 = new PersonClass('Bob', 'Smith');
  
  console.log(' Constructor Function:', person1.getFullName());
  console.log('Class Declaration:', person2.getFullName());
  
  console.log('Arrow Function Method:', person2.greet());
  
  const personObjectLiteral = {
    firstName: 'Jane',
    lastName: 'Doe',
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
  
    introduce: function() {
      return `Hi, I'm ${this.getFullName()}.`;
    }
  };
  
  console.log('Object Literal Method:', personObjectLiteral.introduce());
  