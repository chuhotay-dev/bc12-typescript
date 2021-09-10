/**
 * Introduce TS
 */

const sum = (a: number, b: number): void => console.log(a + b);
sum(1, 3);

/**
 * Basic Types
 */

// constant
const BIRTH_YEAR = 2000;
// BIRTH_YEAR = 3000; => ERR

// string
// let fullName: string;
let fullName = 'Chu Ho Tay'; // inferred type
fullName = 'Huy Hoang'; // ok
// fullName = 1; => ERR

// number
// let age: number;
let age = 20;
age = 21; // ok
// age = false => ERR

// boolean
// let isMarried: boolean;
let isMarried = false;

// any
let notSure: any = false;
notSure = 'ok';
