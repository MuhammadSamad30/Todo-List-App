#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";


let todoList = [];
let condition = true;

console.log(chalk.green.bold("Welcome to Todo List App from ( Muhammad samad! )"));
console.log(chalk.italic("Enter your first task"));

while (condition) {
  let addtodo = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: chalk.magenta("What task do you want to add?"),
    },
    {
      name: "addmore",
      type: "confirm",
      message: chalk.magenta("Do you want to add more tasks?"),
      default: false,
    },
  ]);
  const { task, addmore } = addtodo;
  console.log(addtodo);
  condition = addtodo.addmore;
  if (task) {
    todoList.push(task);
  } else {
    console.log(chalk.red("No Task Added"));
  }
}

if (todoList.length > 0) {
  todoList.forEach((task) => {
    console.log(task);
  });
} else {
  console.log(chalk.red("No tasks found!"));
}
