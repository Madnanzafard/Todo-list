#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;
let myPin = 1234;
let pinAnswer = await inquirer.prompt(
    [
        { name : "pin",
          message : "Enter Your pin number",
          type : "number",
        }
    ]
);
let todoLength = await inquirer.prompt(
    [
        {
            name : "length",
            meassage : "enter the length of todo list",
            tpye : "number",
        }
    ]
);
if (pinAnswer.pin === myPin) {
while(condition){
let addTask = await inquirer.prompt(
    [
        {
            name :"todo",
            message :"what you want to add in your todo list",
            type :"input",
        },
        {
            name : "addMore",
            message : "Do you want to add more ?",
            type : "confirm",
            defualt : "false",
        }
    ]
); 
        todos.push(addTask.todo);
        if (todos.length >= todoLength.length){
            console.log("Maximum todo list length reached");
            break;
        }
        condition = addTask.addMore;
        console.log(todos);   
                };   
} else {
    console.log("your pin is incorrect");
};