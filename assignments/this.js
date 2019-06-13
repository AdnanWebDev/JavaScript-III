/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding     - In the global scope, 'this' points to object that is being used/passed in to a function in a Window, otherwise it will point to entirety of JS
* 2. Implicit Binding   - function that is called by a preceding dot, this points to the object before the dot. 
* 3. New Binding        - Requires the usage of constructor function which refers/allows a object to be returned by constructor function aka Object creator function. To operate this
                        - We have to use 'new' during object usage on a constructor function.
* 4. Explicit Binding   - Using JS methods such as apply() or call(), this points by bypassing constructor objects

* write out a code example of each explanation above
*/

// Principle 1

function countryName(name){
    //console.log(this);
    return name;
}

countryName("USA");

// Principle 2

const myTown = {
    name: 'Murfreesboro',
    distance: function(miles){
        console.log(`${this.name} is about ${miles} miles out`)
        console.log(this)
    }
}

myTown.distance('50')

// Principle 3

function WelcomeTown(townname){
    this.welcome = "Welcome to ";
    this.townname = townname;
    this.speak = function (){
        console.log(this.welcome + this.townname)
        console.log(this)
    }
}
const towntest = new WelcomeTown('Blacksburg')
const newtown = new WelcomeTown('Murfreesboro')
towntest.speak()

// Principle 4
//Override speak function
towntest.speak.apply(newtown)
