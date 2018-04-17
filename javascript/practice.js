varcar=["jeep","wrangler",20,32.87, "xuv500",29]
undefined
vart= [" javascript", "need", "logic" ]
undefined


t.indexOf
ƒ indexOf() { [native code] }
t.indexOf(4)
-1
vara=["need to work hard for this "]
undefined
a.indexOf(to)
VM12185:1 Uncaught ReferenceError: to is not defined at <anonymous>:1:11
vara=["need" ,32,45, "to", "work", "hard",87,565,998.5676, "for", "this"]
undefined

a.length
11
vara=["need" ,32,45, "to", "work", "hard",87,565,998.5676, "for", "this"]
undefined
person.slice(3,5)
VM12222:1 Uncaught ReferenceError: person is not defined at <anonymous>:1:1
a.slice(3,5)
1.	(2) ["to", "work"]
a.splice(2,5,"555";"DELHI")
VM12236:1 Uncaught SyntaxError: missing ) after argument list
a.splice(2,5,"Noida";"DELHI")
VM12242:1 Uncaught SyntaxError: missing ) after argument list
t.splice(1,2,"angular","reactjs")
1.	(2) ["need", "logic"]
1.	0:"need"
2.	1:"logic"
3.	length:2
4.	__proto__:Array(0)


// OBJECT

var animal =
{
    color:'black',
    age:10,
    add:function(a,b){return a+b},
    sub:function(a,b){return a-b}
}
undefined
animal
{color: "black", age: 10, add: ƒ, sub: ƒ}
animal.add(2,3)
5
animal.sub(3-4)
NaN
animal.sub(3-1)
NaN
var animal =
{
    color:'black',
    age:10,
    add:function(a,b){return a+b},
    sub:function(a,b){return parseInt(a)-parseInt(b)}
}
undefined
animal.sub(4-3)
NaN
animal.sub(4,3)
1
var car = new Object();
car.brand="audi";
car.color="red";
"red"
car
{brand: "audi", color: "red"}
car.brand
"audi"
car["brand"]
"audi"
var bob = new Object();
bob.age=10
bob.setage= function(newAge){
    bob.age = newAge
}
ƒ (newAge){
    bob.age = newAge
}
bob
{age: 10, setage: ƒ}
bob.age
10
bob.setage(20)
undefined
bob.age
20
var setage = function(newAge){
    this.age=newAge
}

var john = new Object()
john.age=20;
john.setage= setage
ƒ (newAge){
    this.age=newAge
}
john
{age: 20, setage: ƒ}age: 49setage: ƒ (newAge)__proto__: Object
john.setage(49)
undefined
john
{age: 49, setage: ƒ}age: 49setage: ƒ (newAge)__proto__: Object


varcar=["jeep","wrangler",20,32.87, "xuv500",29]
undefined
varperson=["bhupesh","chotu","crash",983,838 ]
undefined
person.pop(3)
838
person.push(7474)
5
person.le
undefined
person.slice(0,2)
1.	(2) ["bhupesh", "chotu"]
1.	0:"bhupesh"
2.	1:"chotu"
3.	length:2
4.	__proto__:Array(0)
vart= [" javascript", "need", "logic" ,828,918,"THOR",1982,0182]
undefined
t.concat(person)
1.	(13) [" javascript", "need", "logic", 828, 918, "THOR", 1982, 182, "bhupesh", "chotu", "crash", 983, 7474]
1.	0:" javascript"
2.	1:"need"
3.	2:"logic"
4.	3:828
5.	4:918
6.	5:"THOR"
7.	6:1982
8.	7:182
9.	8:"bhupesh"
10.	9:"chotu"
11.	10:"crash"
12.	11:983
13.	12:7474
14.	length:13
15.	__proto__:Array(0)
person.concat(car,t)
1.	(19) ["bhupesh", "chotu", "crash", 983, 7474, "jeep", "wrangler", 20, 32.87, "xuv500", 29, " javascript", "need", "logic", 828, 918, "THOR", 1982, 182]
1.	0:"bhupesh"
2.	1:"chotu"



var nmbr =4
if(nmbr%2==0){
    alert(" number is even")
}else{
    alert("number is odd")
}
undefined
var nmbr =48766564
if(nmbr%2==1){
    alert(" number is even")
}else{
    alert("number is odd")
}
undefined
var nmbr =48766564
if(nmbr%2==0){
    console.log(" number is even")
}else{
    alert("number is odd")
}
VM88:3  number is even
undefined
var nmbr =48766564
if(nmbr%2==0){
    console.log(" number is even")
}else{
    console.lo("number is odd")
}
VM93:3  number is even
undefined
var nmbr =48766564
if(nmbr%6==1){
    console.log(" number is even")
}else{
    console.log("number is odd")
}
VM98:5 number is odd
undefined