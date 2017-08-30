var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];
var finalBonusStats = []

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

function calculatePercentage(employee) {

    var bonus = 0;
    var rating = employee.reviewRating;
    var number = employee.employeeNumber;
    var income = employee.annualSalary;

    if (rating <= 2) {
        bonus = 0;
    } else if (rating === 3) {
        bonus = 0.04;
    } else if (rating === 4) {
        bonus = 0.06;
    } else if (rating === 5) {
        bonus = 0.10;
    }

    if (number.length === 4) {
        bonus += 0.05;
    }

    if (income > 65000) {
        bonus -= 0.01;
    }

    if (bonus > 0.13) {
        bonus = 0.13;
    }

    if (bonus < 0)  {
        bonus = 0;
    }
    return bonus;
}
console.log(calculatePercentage(jem));

function calculateTotalComp(employee, bonusAmount){
    var totalComp = parseInt(employee.annualSalary) + bonusAmount;
    return totalComp;
}
console.log(calculateTotalComp(jem, 0.06));

function calculateTotalBonus(employee, bonus){
    var bonusAmount = parseInt(employee.annualSalary) * bonus;
    console.log(bonusAmount);
    return Math.round(bonusAmount);
}
console.log(calculateTotalBonus(jem, 0.062343));

function BonusStats(nameIn, bonusPercentageIn, 
    totalCompensationIn, totalBonusIn) {
        this.name = nameIn;
        this.bonusPercentage = bonusPercentageIn;
        this.totalCompensation = totalCompensationIn;
        this.totalBonus = totalBonusIn;
    }

function calculateBonusStats(employee) {
    var name = employee.name;
    var bonusPercentage = calculatePercentage(employee);
    var totalBonus = calculateTotalBonus(employee, bonusPercentage);
    var totalCompensation = calculateTotalComp(employee, totalBonus);

    return new BonusStats(name, bonusPercentage, totalCompensation, totalBonus);
}
console.log('BonusStats(jem)', calculateBonusStats(jem));

for (var i = 0; i < employees.length; i++) {
    finalBonusStats.push(calculateBonusStats(employees[i]));
}

console.log('final bonus stats ->', finalBonusStats);
