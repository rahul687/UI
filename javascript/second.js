console.log("hiiii");

alert("hiiii")

var a =10
undefined
a
10
var b = "10"
undefined
b
"10"
a==b
true
a===b
false


var a =5
if(a>10){
    console.log("i am good")
}else{
    console.log(" i am bad")
}

var a =5
if(a>15){
    console.log("i am good")
}else if(a>10){
    console.log(" a is greater than 5")
}else{
    console.log(" i am bad")
}

ar a =4
if(a%2==0){
    alert(" number is even")
}else{
    alert("number is odd")
}


var name="rahul"
var city="newyork"

if(name=="rahul" && city=="newyork"){
    console.log("Allow access")
}else if(name=="aakash"||name=="parul"){
    console.log(" dont allow")
}else{
    console.log(" i adont know")
}


function add(a,b){
    return a+b
}

function check(name,city){
    if(name=="rahul" && city=="newyork"){
        console.log("Allow access")
    }else if(name=="aakash"||name=="parul"){
        console.log(" dont allow")
    }else{
        console.log(" i adont know")
    } 
}

var a = [1,2,3,4]
a[0]

for(i=0;i<10;i++){
    console.log(i)
}