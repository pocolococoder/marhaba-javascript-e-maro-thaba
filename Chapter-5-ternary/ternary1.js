let price = 500;
let isLeader = false;

if(isLeader===true){
    price = 0;
}
else{
    price = price + 100;
}

price = isLeader===true ? 0 : price + 100;