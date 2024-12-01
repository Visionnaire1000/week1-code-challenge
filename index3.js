
function calculateSalary() {
    const basicSalary = parseFloat(prompt("Enter the basic salary: "));
    const benefits = parseFloat(prompt("Enter the total benefits: "));

    
    const PAYEE_TAX_RATE = 0.1;
    const NHIF_DEDUCTION = 1000; 
    const NSSF_RATE = 0.06; 

    const grossSalary = basicSalary + benefits;

    const payeeTax = grossSalary * PAYEE_TAX_RATE;

    const nhifDeductions = NHIF_DEDUCTION;

    const nssfDeductions = basicSalary * NSSF_RATE;


    const totalDeductions = payeeTax + nhifDeductions + nssfDeductions

    const netSalary = grossSalary - totalDeductions;


    console.log(`Basic Salary: Ksh ${basicSalary}`);
    console.log(`Benefits: Ksh ${benefits}`);
    console.log(`Gross Salary: Ksh ${grossSalary}`);
    console.log(`Payee Tax: Ksh ${payeeTax}`);
    console.log(`NHIF Deductions: Ksh ${nhifDeductions}`);
    console.log(`NSSF Deductions: Ksh ${nssfDeductions}`);
    console.log(`Total Deductions: Ksh ${totalDeductions}`);
    console.log(`Net Salary: Ksh ${netSalary}`);
}


calculateSalary();
