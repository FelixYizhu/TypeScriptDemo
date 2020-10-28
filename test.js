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
var Person1 = /** @class */ (function () {
    function Person1(name1) {
        this.name1 = name1;
    }
    Person1.prototype.getName = function () {
        return this.name1;
    };
    Person1.prototype.setName = function (name1) {
        this.name1 = name1;
    };
    return Person1;
}());
var per = new Person1("Sherry");
console.log('My name is: ' + per.getName());
per.setName('Tom');
console.log('My name is: ' + per.getName());
//class and inherit
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run1 = function () {
        return this.name + ' is running';
    };
    Person.run2 = function () {
        return this.age;
    };
    return Person;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    return Web;
}(Person));
var m = new Web("Wang");
m.run1();
console.log(m.run1());
/*abstract class and abstract method
abstract class cannot be instanced.
abstract method is only in abstract class.
abstract method does not include detailed implementation.
The child class must implement the abstract method in abstract class.
*/
var Animal = /** @class */ (function () {
    function Animal(title) {
        this.title = title;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(title) {
        return _super.call(this, title) || this;
    }
    Dog.prototype.eat = function () {
        return this.title + ' eat e';
    };
    return Dog;
}(Animal));
var v = new Dog('Peggy');
console.log(v.eat());
function printName(name) {
    console.log(name.firstName + ' and ' + name.lastName);
}
printName({ firstName: 'Felix', lastName: 'wang' });
/*
interface Config{
    type:string,
    url:string,
    data?:string,
    datatype:string
}

function ajax(config:Config){
    var xhr=new XMLHttpRequest();
    xhr.open(config.type,config.url,true);
    xhr.send(config.data);
    xhr.onreadystatechange= function(){
        if(xhr.readyState==4 && xhr.status==200){
            console.log('success');
            if(config.datatype=='json'){
                JSON.parse(xhr.responseText);
            }
            else{
                console.log(xhr.responseText);
            }
        }
    }
}

ajax({
    type:'get',
    url:'http://a.itying.com/api/productlist',
    datatype:'json'

})

*/
/*Generics
solve the reusability of class, function, interface etc.
Generics can support unspecific data type, but the return parameters should be consistant with input parameters
*/
// T stands for Generics
function getData(value) {
    return value;
}
getData(123);
console.log(getData(123));
//Generics class
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.Min = function () {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (min > this.list[i]) {
                min = this.list[i];
            }
        }
        return min;
    };
    return MinClass;
}());
var m1 = new MinClass();
m1.add(4);
m1.add(7);
m1.add(3);
console.log(m1.Min());
var m2 = new MinClass();
m2.add('b');
m2.add('g');
m2.add('r');
console.log(m2.Min());
function getData2(value) {
    return value;
}
var myGetData = getData2;
myGetData('ser');
console.log(myGetData('ser'));
