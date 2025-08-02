const user = {
    username: 'john doe',
    email: 'john@esample.com',
    password: 'Old password'
};

Object.seal(user);

//Attempt to modify the object

user.password = "New Password";
user.age = 40;
delete user.email;
console.log(user);