import readlineSync from 'readline-sync';

export function readLine() {

let  readlineSync = require('readline-sync');
let  userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');

};
