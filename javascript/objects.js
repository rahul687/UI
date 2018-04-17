//constructor
var animal =
{
    color:'black',
    age:10,
    add:function(a,b){return a+b},
    sub:function(a,b){return parseInt(a)-parseInt(b)}


}

//literal
var car = new Object();
car.brand="audi";
car.color="red";

var bob = new Object();
bob.age=10
bob.setage= function(newAge){
    bob.age = newAge
}

var tony = new Object();
tony.age = 10
tony.setage=function(nAge){
    tony.age=nAge
}

var setage = function(newAge){
    this.age=newAge
}

var john = new Object()
john.age=20;
john.setage= setage