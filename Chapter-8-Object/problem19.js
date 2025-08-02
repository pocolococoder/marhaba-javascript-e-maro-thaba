const phone = {
    brand: 'Samsung',
    model: 'GalaxyS21',
    price: 85000
}
const keys = Object.keys(phone);
for(const key of keys){
    const value = phone[key];
    console.log(key, value)
}