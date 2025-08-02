const adminUser = {
    username : 'admin',
    email: 'admin@example.com',
    role: 'superadmin'
};
Object.freeze(adminUser);

// Attempt to modify the object

adminUser.role = 'User';
delete adminUser.email;
console.log(adminUser);