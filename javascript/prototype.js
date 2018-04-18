function Dog(breed){
    this.breed = breed
    this.color="red"
}

Dog.prototype.bark=function(){
    console.log("vvvvv")
}

var buddy = new Dog();
/*buddy.bark=function(){
    console.log("bbbbb")
}*/

var snooopy = new Dog();