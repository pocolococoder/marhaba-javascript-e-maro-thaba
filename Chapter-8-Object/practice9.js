const profile = {
    name : 'Rezwan',
    age: 26,
    city: 'Dhaka'
}
const profileKeys = Object.keys(profile);
const hasName  = profileKeys.includes('name');
console.log(hasName);