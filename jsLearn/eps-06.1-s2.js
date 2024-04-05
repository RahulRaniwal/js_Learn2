// CALL BIND APPLY

let name1 = {
  firstName: "Rahul",
  lastName: "Raniwal",
};

let printFullName = function (hometown) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown);
};

printFullName.call(name1, "Delhi");

let name2 = {
  firstName: "Virat",
  lastName: "Kohli",
};

// call method (function borrowing)
printFullName.call(name2, "West Delhi");

// apply
printFullName.apply(name2, ["Dilli"]);

// bind
let printMyName = printFullName.bind(name2, "Dilli nahi Delhi");
console.log(printMyName);
printMyName();
