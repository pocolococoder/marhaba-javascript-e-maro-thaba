const profile = {
    name: 'Rahim',
    age: 28,
    city : 'Dhaka',
};
for(const key in profile){
    const value = profile[key];
    console.log(key,value);
}