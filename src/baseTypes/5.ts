/* 
  How do you declare a variable in TypeScript that can accept either a string or a number (union type)?
  And also declare a variable that can accept only one of two string values: 'enable' or 'disable' (literal type)?
*/

let union: string | number;
let literal: "enable" | "disable";
