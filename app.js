#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: 'Enter your sentence to count the word: '
    }
]);
const words = answer.sentence.trim().split(" ");
// print the aray of words to the console
console.log(words);
// print the word count of the  sentence to the console.
console.log(`Your sentence has ${words.length} words.`);
