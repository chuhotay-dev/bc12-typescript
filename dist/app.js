"use strict";
var dog = {
    name: 'Dog',
    age: 2,
    greeting: function () {
        console.log('Gâu gâu');
    },
};
var Animal = (function () {
    function Animal(name, age, text) {
        this.name = name;
        this.age = age;
        this.text = text;
    }
    Animal.prototype.greeting = function () {
        console.log(this.text);
    };
    return Animal;
}());
