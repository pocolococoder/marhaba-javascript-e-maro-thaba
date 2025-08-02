const numbers = {
    a: 10,
    b: 20,
    c:30,
    d:40
}
let sum = 0;
for(let key in numbers){
    sum += numbers[key];
}
console.log('Total sum is:',sum);
