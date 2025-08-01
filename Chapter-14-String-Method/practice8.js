const sentence = " i am a good and hardworking person";
console.log(sentence.split(' '));

const friendStr = 'rahim,kahim,jarif,hablu,dablu,bablu';
const friends = friendStr.split(',');
console.log(friends);

const realFriend = ['rahim', 'karim', 'salim','jasim'];
console.log(realFriend.join('|'));

const first = 'abid';
const middle = 'khan';
const last  = 'Islam';

const name = first + middle + last;
console.log(name);

const str1 = 'Hello';
const str2= 'World';
const result = str1.concat(str2);
console.log(result);

const name1 = 'love';
const name2 = 'js';
const result1 = 'I love'.concat('','js');
console.log(result1);

const language = 'javascript Essentials';
const extractedPart  = language.substring(5,9);
console.log(extractedPart);
