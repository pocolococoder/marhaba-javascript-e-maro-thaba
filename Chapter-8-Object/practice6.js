const cricketer = {
    position: 4,
    specialty : 'Batter',
    age : 24,
    runs : 8000,
}

console.log(cricketer.position);
console.log(cricketer['runs']);

cricketer.position = 1;
cricketer['runs'] = 9000;

console.log(cricketer.position);
console.log(cricketer.runs);