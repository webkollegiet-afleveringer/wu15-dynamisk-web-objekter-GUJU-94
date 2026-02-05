let dog = {
    name: "Molly",
    age: "5",
    adress: "Roskilde",
    color: "Brown"
}

console.log(dog.name); //Molly
console.log(dog.adress); //Roskilde

console.log(dog["age"]); //man kan lave på begge disse måder
console.log(dog["color"]); //disse to måder med molly og roskilde er det samme som age og color

//Opgave 2

let dog2 = {
    name: "Molly",
    age: "5",
    adress: "Roskilde",
    color: "Brown",
    puppies: true,
    hobbies: [ "Eating", "Cardio", "Swimming" ],
    colors: {
        puppycolor1: "Light brown",
        puppycolor2: "Brown",
    },

}

dog2.hobbies.forEach(function(hobby){
    console.log(hobby);
})

//Eating
//Cardio
//Swimming

console.log(dog2.colors.puppycolor1); //light brown
console.log(dog2.colors.puppycolor2); //brown

