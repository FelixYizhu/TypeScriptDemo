
const str:string="Hello,wworld!"
console.log(str)

let num:any="2334"

let isBeginner:boolean=true;

let number:number=0;

let name1:string="Felix";

let sentense:string='My name is $ {name1}, I am a beginner in TypeScript';

console.log(sentense)

let n:null=null;
let u:undefined=undefined;

let list1:number[]=[1,2,3];
let list2:Array<number>=[1,2,3];


let person1:[string, number]=['Chris', 123];


enum Color{Red=5, Green=6, Blue=7};

let c:Color=Color.Green;
console.log(c);

let randomValue:any=10;
randomValue=true;
randomValue="assas";

//console.log(randomValue);

function add(num1:number,num2?:number):number{
    if(num2)
        return num1+num2;
    else
        return num1
}
console.log(add(3))



interface Person{
    firstName:string;
    lastName:string;
}

function FullName(person:Person){
    console.log(person.firstName,person.lastName);
}

let p = {
    firstName: 'Felix',
    lastName: 'Wang'
};
FullName(p)


//define class
class Employee {
    public employeeName:string;
    constructor(name:string){
        this.employeeName=name;
    }
    greet(){
        console.log('Good morning,',this.employeeName)
    }
}

let emp1=new Employee("Sherry");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }
    delegateWork(){
        console.log('Manager delegate tasks');
    }
}
let mag1=new Manager("Felix");
mag1.delegateWork();
mag1.greet();
console.log(mag1.employeeName);

let three_array=[1,2,3];
let five_array=[...three_array,4,5];

console.log(five_array)

let colors:string[]=["red","green","white"];
for(let i of colors){
    console.log(i);
}

function run():string{
    return '234';
}
run();
console.log(run());

var fun2=function():number{
    return 345;
}
fun2();
console.log(fun2());

function getInfo(name:string, age:number):string{
    return 'name is:'+name+',and age is:'+age;
}
console.log(getInfo('Felix',18));


//Person class  include properties and constructor,  get,set    OOP
class Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name=name;
    }
}
var per=new Person("Sherry");
console.log('My name is: '+per.getName());
per.setName('Tom');
console.log('My name is: '+per.getName());

