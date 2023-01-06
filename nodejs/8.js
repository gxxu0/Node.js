var name = 'gxxu0';
var letter = 'Dear ' + name + ' Hoo ooh ooh ooh ooh ' + name + '\n Hoo ooh ooh ooh Stay ' + name + ' in the middle Like ' + name + ' you a little';
console.log(letter);

console.log('\n[Template Literal]');
var letter = `Dear ${name}
Hoo ooh ooh ooh ooh ${name} Hoo ooh ooh ooh Stay 
${name} in the middle Like ${name} you a little ${2 + 3}`;
console.log(letter);