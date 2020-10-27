"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var str = "Hello,wworld!";
console.log(str);
var num = "2334";
var isBeginner = true;
var number = 0;
var name1 = "Felix";
var sentense = 'My name is $ {name1}, I am a beginner in TypeScript';
console.log(sentense);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 123];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "assas";
//console.log(randomValue);
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(3));
function FullName(person) {
    console.log(person.firstName, person.lastName);
}
var p = {
    firstName: 'Felix',
    lastName: 'Wang'
};
FullName(p);
//define class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log('Good morning,', this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Sherry");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegate tasks');
    };
    return Manager;
}(Employee));
var mag1 = new Manager("Felix");
mag1.delegateWork();
mag1.greet();
console.log(mag1.employeeName);
var three_array = [1, 2, 3];
var five_array = __spreadArrays(three_array, [4, 5]);
console.log(five_array);
var colors = ["red", "green", "white"];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var i = colors_1[_i];
    console.log(i);
}
function run() {
    return '234';
}
run();
console.log(run());
var fun2 = function () {
    return 345;
};
fun2();
console.log(fun2());
function getInfo(name, age) {
    return 'name is:' + name + ',and age is:' + age;
}
console.log(getInfo('Felix', 18));
//Person class  include properties and constructor,  get,set    OOP
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var per = new Person("Sherry");
console.log('My name is: ' + per.getName());
per.setName('Tom');
console.log('My name is: ' + per.getName());
