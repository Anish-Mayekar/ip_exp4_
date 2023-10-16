const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }+

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Student extends Person {
  constructor(firstName, lastName, rollNumber) {
    super(firstName, lastName);
    if (rollNumber === 0) {
      throw new Error('Roll number cannot be zero.');
    }
    this.rollNumber = rollNumber;
  }

  getStudentInfo() {
    return `Roll Number: ${this.rollNumber}, Name: ${this.getFullName()}`;
  }

  getFullName() {
    return super.getFullName() + ' (Student)';
  }
}

rl.question('Enter student\'s first name: ', (firstName) => {
  rl.question('Enter student\'s last name: ', (lastName) => {
    rl.question('Enter student\'s roll number: ', (rollNumberStr) => {
      const rollNumber = parseInt(rollNumberStr);

      try {
        const student = new Student(firstName, lastName, rollNumber);
        console.log('Student Full Name:', student.getFullName());
        console.log('Student Info:', student.getStudentInfo());
      } catch (error) {
        console.error('Error:', error.message);
      }

      rl.close();
    });
  });
});
