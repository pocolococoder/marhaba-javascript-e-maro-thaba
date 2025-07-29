const age = 25;
const price = 400;
if(age < 12){
    console.log("Free Khaite parbe")
}
else if(age >=60){
    const discount = (price / 100) * 50;
    const pay = price - discount;
    console.log(pay);
}
else{
    console.log(price);
}