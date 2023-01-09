var arr = ["A", "B", "C", "D"];

console.log(arr[2]); //Read
arr[2] = "3"; //Update
console.log(arr.length);
arr.push("E");
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(`
${arr[i]}`);
}
