var number = [1, 4000, 2002, 4, 34]; //1억개라면?
var i = 0;
var sum = 0;
while (i < number.length) {
  console.log(number[i]);
  sum += number[i];
  i += 1;
}
console.log(`sum : ${sum}`);
