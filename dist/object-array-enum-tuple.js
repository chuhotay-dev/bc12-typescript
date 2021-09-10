"use strict";
var user = {
    name: 'Tay',
    age: 20,
    isLoggedIn: true,
    role: 1,
    account: {
        username: 'taych',
        password: '123456',
    }
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["CLIENT"] = 2] = "CLIENT";
})(Role || (Role = {}));
;
if (user.role === Role.ADMIN) {
    console.log('Admin');
}
else {
    console.log('Client');
}
var numbers = [];
numbers.push(1);
var rappers = ['Binz', 'Đen Vâu'];
var person = ['Tay', 2000, true];
