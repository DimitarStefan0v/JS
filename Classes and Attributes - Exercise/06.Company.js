class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input!');
        } else if (salary <= 0) {
            throw new Error('Invalid input!');
        }

        const employee = {
            name,
            salary,
            position
        };

        if (this.departments[department] == undefined) {
            this.departments[department] = [];
        }

        this.departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestAvgSalary = 0;
        let bestDepartment = {};
        for (let department in this.departments) {
            let tempAvgSalary = 0;

            for (let employee of this.departments[department]) {
                tempAvgSalary += employee.salary;
            }

            let avgSalary = tempAvgSalary / this.departments[department].length;
            if (avgSalary >= bestAvgSalary) {
                bestAvgSalary = avgSalary;
                bestDepartment = {};
                bestDepartment[department] = this.departments[department];
                bestDepartment[department].sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => b.salary - a.salary);
            }
        }
        let output = `Best Department is: ${Object.keys(bestDepartment)}\nAverage salary: ${bestAvgSalary.toFixed(2)}`;

        for(let department in bestDepartment) {
            for(let employee of bestDepartment[department]) {
                output += `\n${employee.name} ${employee.salary} ${employee.position}`;
            }
        }
        
        return output;
    }
}

let company = new Company();
company.addEmployee("Stanimir", 2000, "engineer", "Construction");
company.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
company.addEmployee("Slavi", 500, "dyer", "Construction");
company.addEmployee("Stan", 2000, "architect", "Construction");
company.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
company.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
company.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(company.bestDepartment());