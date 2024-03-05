// what is scope in javascript

// So scope is three type
// 1) Globle
// 2) functional
// 3) and last one is block scope

let globlevariable = "globle";

greet();

function greet() {
  let functionvariable = "function";
  if (true) {
      let blockvariable = "block";
      console.log(blockvariable);
      console.log(functionvariable);
      console.log(blockvariable);
    }
    console.log(functionvariable);
    console.log(globlevariable);
}
console.log(globlevariable);