const profile = { 
    name: 'Rahim',
    age : 34,
    city : 'Dhaka'
};
const keys = Object.keys(profile);
for(const key of keys){
    console.log(key,profile[key]);
}