#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
const ans:{numberone:number,
numbertwo:number,
oprator: string} = await inquirer.prompt([{
    type: "number",
    name: "numberone",
    message: "Enter the first number"
},
{type:"number",
name:"numbertwo",
    message:"Enter the second number"},
{type:"list",
name: "oprator",
message: "Enter your operator",
choices:["+","-","*","/"]},
])
const{ numberone, numbertwo, oprator}= ans;
let result 
switch (oprator) {
    case "+":
        result = numberone + numbertwo;
        break;
    case "-":
        result = numberone - numbertwo;
        break;
    case "*":
        result = numberone * numbertwo;
        break;
    case "/":
        result = numberone / numbertwo;
        break;
    default:
        console.log("choose correct oprator");
                  
}
console.log(chalk.yellow(`${numberone} ${oprator} ${numbertwo}= ${result}`));