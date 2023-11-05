//* Procedural Method (Without OOP)
let baseSalary = 30_00;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate)
}

//* OOP Way
let employee = {
    baseSalary: 30_00,
    overtime: 10,
    rate: 20,
    getWage: function (){
        return this.baseSalary + (this.overtime * this.rate)
    }
}
employee.getWage();