// some other examples for map reduce and filter

const users = [
  { firstName: "Neha", lastName: "Sharma", age: 25 },
  { firstName: "Sanaya", lastName: "Kishori", age: 36 },
  { firstName: "Geeta", lastName: "Devi", age: 25 },
  { firstName: "Sangita", lastName: "Desai", age: 30 },
];

// list of full name of all the users

const output = users.map((x) => {
  return x.firstName + " " + x.lastName;
});

// console.log(output);

// how many people with particular unique age [25:2 36: 1 , 30: 1]

const output2 = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

// console.log(output2);

// find first name of all the people whose age is less than 30
const output3 = users.filter((x) => x.age < 30).map((x) => x.firstName);

// console.log(output3);

// doing same thing using reduce funtion

const output4 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output4);

// ---------- We can do chaining of theese function ----------
