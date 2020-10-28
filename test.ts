
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
class Person1{
    name1:string;
    constructor(name1:string){
        this.name1=name1;
    }
    getName():string{
        return this.name1;
    }
    setName(name1:string):void{
        this.name1=name1;
    }
}
var per=new Person1("Sherry");
console.log('My name is: '+per.getName());
per.setName('Tom');
console.log('My name is: '+per.getName());


//class and inherit
class Person {
    public name:string;
    static age:number;   //static property
    constructor(name:string){
        this.name=name;
    }
    run1():string{
        return this.name+' is running';
    }
    static run2():number{
        return this.age;
    }

}

class Web extends Person{
    constructor(name:string){
        super(name);  //initialize the constructor of parent class
    }
}
var m=new Web("Wang");
m.run1();
console.log(m.run1());

/*abstract class and abstract method
abstract class cannot be instanced.
abstract method is only in abstract class.
abstract method does not include detailed implementation.
The child class must implement the abstract method in abstract class.
*/
abstract class Animal{
    title:string;
    constructor(title:string){
        this.title=title;
    }
    abstract eat():any;
}

class Dog extends Animal{
    constructor(title:string){
        super(title);
    }
    eat():string{
        return this.title+' eat e';
    }
}
var v=new Dog('Peggy');
console.log(v.eat());



interface FullName{
    firstName:string;
    lastName:String
}

function printName(name:FullName):void{
    console.log(name.firstName+' and '+name.lastName);
}

printName({firstName:'Felix', lastName:'wang'});


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

function getData<T> (value:T):T{
    return value;
}

getData<number>(123);
console.log(getData<number>(123));


//Generics class

class MinClass<T>{
    public list:T[]=[];
    add(value:T):void{
        this.list.push(value);
    }

    Min():T{
        var min=this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(min>this.list[i]){
                min=this.list[i];
            }
        }
        return min;
    }
}
 var m1=new MinClass<Number>();
 m1.add(4);
 m1.add(7);
 m1.add(3);
 console.log(m1.Min());

 var m2=new MinClass<string>();
 m2.add('b');
 m2.add('g');
 m2.add('r');
 console.log(m2.Min());


 //interface Generics
interface ConfigFn<T>{
    (value:T):T;
    
}

function getData2<T>(value:T):T{
    return value;
}
var myGetData:ConfigFn<string>=getData2;

myGetData('ser');
console.log(myGetData('ser'));



/*
class User{
    username:string|undefined;
    password:string|undefined;
}

class MySqlDb{

    add(user:User):boolean{
        console.log(user.username+'--'+user.password);
        if(user.username!=null ||user.username!=undefined)
            return true;
        else
            return false;
    }
}

var user=new User();
user.username='Bob';
user.password='12345';
var sql=new MySqlDb();
sql.add(user);
*/


class MySqlDb<T>{

    add(info:T):boolean{
        console.log(info);
        if(user.username!=null ||user.username!=undefined)
            return true;
        else
            return false;
    }
}
class User{
    username:string|undefined;
    password:string|undefined;
}

var user=new User();
user.username='Bob';
user.password='12345';
var sql=new MySqlDb<User>();
sql.add(user);




import { getDbData as getD, save } from './modules/db'

getD();
console.log(getD());
save();


//decorator   can extend the methods and properties of the class
function decoratorName(params:any){
    console.log(params);
    params.prototype.apiUrl='xxxx';
}

@decoratorName
class HttpClient2{
    constructor(){}
    getData2(){};
}

var http:any=new HttpClient2();
console.log(http.apiUrl);



//class decorator

function logClass(target:any){
    console.log(target);
    return class extends target{
        apiUrl:any='I am the apiUrl in decorator';
        getData3(){
            this.apiUrl=this.apiUrl+'....';
            console.log(this.apiUrl);
        }
    }
}

@logClass
class httpClient3{
    public apiUrl:string|undefined;
    constructor(){
        this.apiUrl='I am the apiUrl of constructor';
    }
    getData3(){
        console.log(this.apiUrl);
    }
}

var htt=new httpClient3();
htt.getData3();



//property decorator

function logProperty(params:any){
    return function(target:any,attr:any){
        console.log(target);
        console.log(attr);
        target[attr]=params;
    }
}

class httpClient4{
    @logProperty("http://seek.com.au")
    public url:string|undefined;
    constructor(){
    }
    getData4(){
        console.log(this.url);
    }
}

var http4=new httpClient4();
http4.getData4();