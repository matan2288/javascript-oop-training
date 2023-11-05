//* OOP Way with Polymorphism
class Employee {
    constructor(baseSalary, overtime, rate) {
        this.baseSalary = baseSalary;
        this.overtime = overtime;
        this.rate = rate;
    }

    getWage() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}

class HourlyEmployee extends Employee {
    constructor(overtime, rate) {
        super(3000, overtime, rate); // Salaried base salary is $3000
    }
}

class SalariedEmployee extends Employee {
    constructor() {
        super(5000, 0, 0); // Salaried employees have no overtime and rate
    }

    // Overriding the getWage method for SalariedEmployees
    getWage() {
        return this.baseSalary; // Salaried employees don't get overtime pay
    }
}

const hourlyEmployee = new HourlyEmployee(10, 20); // Overtime hours: 10, Rate: $20/hour
const salariedEmployee = new SalariedEmployee();

function calculateTotalWage(employee) {
    // The getWage method behaves differently based on the employee type (polymorphism)
    return employee.getWage();
}

console.log(calculateTotalWage(hourlyEmployee)); // Output: $5000 (base salary) + $200 (overtime) = $5200
console.log(calculateTotalWage(salariedEmployee)); // Output: $5000 (base salary)