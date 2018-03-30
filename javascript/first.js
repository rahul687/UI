string
number
boolean

var name="rahul"
var name="rahul"
undefined
name
"rahul"
var a = "javascript"
undefined
a
"javascript"

var b = "10"
var c = "true"

var d = 10;
var c = true;

var a = "rahul"
undefined
typeof(a)
"string"
var b =10
undefined
typeof(b)
"number"
var c = true
undefined
typeof(c)
"boolean"

///////
1+1
2
2-1
1
2*6
12
6/7
0.8571428571428571




undefined
var b = 20
undefined
a+b
30
var a = "rhaul"
undefined
var b = "    javascript"
undefined
a+b
"rhaul    javascript"
var d = " age of aakash is"
undefined
var e = 10
undefined
d+e
" age of aakash is10"
10+10+"10"
"2010"
"10"+10+10
"101010"
10+"10"+10
"101010"

/////////array/////
var a = [1,2,3,4,5,6,7]
var b = ["a","b","c"]
var c = [1,2,"a","rahul",3,4,"a",6,true,6,"a",1,2,3]

var a = [1,2,3,4,5,6,7]
undefined
a.length
7
a[7]
undefined
a[6]
7
a[1]
2
var a = [1,2,3,4,5,6,7]
undefined
a.length
7
a.push("a")
8
a
(8) [1, 2, 3, 4, 5, 6, 7, "a"]
a.push("rahul")
9
a
(9) [1, 2, 3, 4, 5, 6, 7, "a", "rahul"]
a.length
9
a.pop(2)
"rahul"
a
(8) [1, 2, 3, 4, 5, 6, 7, "a"]
a.pop()
"a"
a
(7) [1, 2, 3, 4, 5, 6, 7]
a.unshift("apple")
8
a
(8) ["apple", 1, 2, 3, 4, 5, 6, 7]
a.unshift("mango")
9
a
(9) ["mango", "apple", 1, 2, 3, 4, 5, 6, 7]
a.shift(1)
"mango"

var a = [1,2,3,4,5,6,7]

a.slice(2,4)
(2) [3, 4]
a
(7) [1, 2, 3, 4, 5, 6, 7]
a.splice(2,0,"apple","mango")
[]
a
(9) [1, 2, "apple", "mango", 3, 4, 5, 6, 7]
a.splice(2,2,"bmw","audi")
(2) ["apple", "mango"]
a
(9) [1, 2, "bmw", "audi", 3, 4, 5, 6, 7]
a.splice(4,1,"red","yellow")
[3]
a
(10) [1, 2, "bmw", "audi", "red", "yellow", 4, 5, 6, 7]

(10) [1, 2, "bmw", "audi", "red", "yellow", 4, 5, 6, 7]
a.indexOf(4)
6
a
(10) [1, 2, "bmw", "audi", "red", "yellow", 4, 5, 6, 7]
a.indexOf("rahul")
-1
var a=["apple","mango"]

undefined
var b =[1,2]
undefined
a+b
"apple,mango1,2"
a.concat(b)
(4) ["apple", "mango", 1, 2]
var c= ["bmw","audi"]
        
undefined
a.concat(b,c)
(6) ["apple", "mango", 1, 2, "bmw", "audi"]
b.concat(a,c)
(6) [1, 2, "apple", "mango", "bmw", "audi"]