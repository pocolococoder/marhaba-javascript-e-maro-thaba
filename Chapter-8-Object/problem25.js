const headphone = {
    brand: 'sony',
    price: '3000',
    color: 'red'
}
Object.freeze(headphone);

// Trying to change new property

headphone.warrenty = 2;
headphone.color1 = "green";
delete headphone.color;
console.log(headphone);