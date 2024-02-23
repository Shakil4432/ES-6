const peoples = [
  { name: "Rakib", age: 23 },
  { name: "joshim", age: 25 },
  { name: "Rahil", age: 36 },
];
let sum = 0;
for (const people of peoples) {
  sum = sum + people.age;
}
console.log(sum);

const result = peoples.reduce((a,p) =>a + p.age,0);

console.log(result);
