// alert ('hi');

let carDisplay = {

    sports: {
        make: "BMW",
        model: "Mustang",
        year: 2015,
        category: "Sports Car",
        color: "Metallic",
        price: "$63425",
        fuelType: "Hybrid",
        horsepower: "Fast",
        seatingCapacity: "Two seats"
    },

    performanceRat: function () {
        if (carDisplay.horsepower === "Fast" || "Very Fast") {
            return "High Performance"
        } else if (carDisplay.horsepower === "Moderate") {
            return "Medium Performance"
        } else {
            return "Low Performance"
        }
    },


    priceCat: function () {
        if (carDisplay.price === "50000") {
            return "Luxury"
        } else if (carDisplay.price ==="30000") {
            return "Moderate"
        } else {
            return "Budget Friendly"
        }
    }, 
  



    

    mona: {
        make: "The Phantom Thieves",
        model: "Citroën H Van",
        year: 1947,
        category: "Ford",
        color: "Classic Black",
        price: "$34457",
        fuelType: "Fish",
        horsepower: "Very Fast",
        seatingCapacity: "Nine seats "
    },

  
  

    jose: {
        make: "Pontiac",
        model: "Ford",
        year: 1954,
        category: "Convertible",
        color: "Teal Blue",
        price: "$425",
        fuelType: "Flowers",
        horsepower: "Slow",
        seatingCapacity: "One seat "
    },

    van: {
        make: "Pontiac",
        model: "Ford",
        year: 2026,
        category: "SUV",
        color: "Husk Grey",
        price: "$48,800",
        fuelType: "Hyrbrid",
        horsepower: "Moderate",
        seatingCapacity: "8 seats"
    },

     buggy: {
        make: "Mario",
        model: "Go-Kart",
        year: 2026,
        category: "Cat",
        color: "Strawberry Red",
        price: "$240",
        fuelType: "Electric",
        horsepower: "Very Fast",
        seatingCapacity: "One seat"
    }


    
}

//sports
document.getElementById('sportscar-btn').addEventListener('click', showSports);
function showSports() {
  document.getElementById('make').textContent = carDisplay.sports.make;
  document.getElementById('model').textContent = carDisplay.sports.model;
  document.getElementById('year').textContent = carDisplay.sports.year;
  document.getElementById('carType').textContent = carDisplay.sports.category;
  document.getElementById('color').textContent = carDisplay.sports.color;
  document.getElementById('price').textContent = carDisplay.sports.price;
  document.getElementById('fuelType').textContent = carDisplay.sports.fuelType;
  document.getElementById('horsepower').textContent = carDisplay.sports.horsepower;
  document.getElementById('seatingCapacity').textContent = carDisplay.sports.seatingCapacity;
//   document.getElementById('performace').textContent = carDisplay.sports.make;
//   document.getElementById('names').textContent = carDisplay.sports.make;

  document.getElementById('performace').textContent = carDisplay.performanceRat();
    document.getElementById('pricingRat').textContent = carDisplay.priceCat();



}

//mona 

document.getElementById('mona-btn').addEventListener('click', showMona);
function showMona() {
  document.getElementById('make').textContent = carDisplay.mona.make;
  document.getElementById('model').textContent = carDisplay.mona.model;
  document.getElementById('year').textContent = carDisplay.mona.year;
  document.getElementById('carType').textContent = carDisplay.mona.category;
  document.getElementById('color').textContent = carDisplay.mona.color;
  document.getElementById('price').textContent = carDisplay.mona.price;
  document.getElementById('fuelType').textContent = carDisplay.mona.fuelType;
  document.getElementById('horsepower').textContent = carDisplay.mona.horsepower;
  document.getElementById('seatingCapacity').textContent = carDisplay.mona.seatingCapacity;

  
  document.getElementById('performace').textContent = carDisplay.performanceRat();
    document.getElementById('pricingRat').textContent = carDisplay.priceCat();

}

//jose

document.getElementById('jose-btn').addEventListener('click', showJose);
function showJose() {
  document.getElementById('make').textContent = carDisplay.jose.make;
  document.getElementById('model').textContent = carDisplay.jose.model;
  document.getElementById('year').textContent = carDisplay.jose.year;
  document.getElementById('carType').textContent = carDisplay.jose.category;
  document.getElementById('color').textContent = carDisplay.jose.color;
  document.getElementById('price').textContent = carDisplay.jose.price;
  document.getElementById('fuelType').textContent = carDisplay.jose.fuelType;
  document.getElementById('horsepower').textContent = carDisplay.jose.horsepower;
  document.getElementById('seatingCapacity').textContent = carDisplay.jose.seatingCapacity;

  
  document.getElementById('performace').textContent = carDisplay.performanceRat();
    document.getElementById('pricingRat').textContent = carDisplay.priceCat();

}

//van


document.getElementById('family-btn').addEventListener('click', showVan);
function showVan() {
  document.getElementById('make').textContent = carDisplay.van.make;
  document.getElementById('model').textContent = carDisplay.van.model;
  document.getElementById('year').textContent = carDisplay.van.year;
  document.getElementById('carType').textContent = carDisplay.van.category;
  document.getElementById('color').textContent = carDisplay.van.color;
  document.getElementById('price').textContent = carDisplay.van.price;
  document.getElementById('fuelType').textContent = carDisplay.van.fuelType;
  document.getElementById('horsepower').textContent = carDisplay.van.horsepower;
  document.getElementById('seatingCapacity').textContent = carDisplay.van.seatingCapacity;

  
  document.getElementById('performace').textContent = carDisplay.performanceRat();
    document.getElementById('pricingRat').textContent = carDisplay.priceCat();

}

//bidbuggy


document.getElementById('buggy-btn').addEventListener('click', showBuggy);
function showBuggy() {
  document.getElementById('make').textContent = carDisplay.buggy.make;
  document.getElementById('model').textContent = carDisplay.buggy.model;
  document.getElementById('year').textContent = carDisplay.buggy.year;
  document.getElementById('carType').textContent = carDisplay.buggy.category;
  document.getElementById('color').textContent = carDisplay.buggy.color;
  document.getElementById('price').textContent = carDisplay.buggy.price;
  document.getElementById('fuelType').textContent = carDisplay.buggy.fuelType;
  document.getElementById('horsepower').textContent = carDisplay.buggy.horsepower;
  document.getElementById('seatingCapacity').textContent = carDisplay.buggy.seatingCapacity;

  
  document.getElementById('performace').textContent = carDisplay.performanceRat();
    document.getElementById('pricingRat').textContent = carDisplay.priceCat();

}

















//below are the requirements.
// make
// model
// year
// category   (example values - "Sports Car", "Truck", "SUV" )
// color
// price
// photo
// fuelType  (example values - "Gasoline", "Electric", "Hybrid" )
// horsepower
// seatingCapacity

// i'm using examples from my object classwork to give me a reference point:

// let characters = {

// panther: {
//     name: "Ann Takamaki",
//     // age: 17,
//     health: 284,
//     attack: 58,
//     defense: 34,


// },

// joker: {
//     name: "Ren Amamiya",
//     // age: 17,
//     health: 999,
//     attack: 65,
//     defense: 45,
    
// },
//  describeJ: function () {
//     return `${this.joker.name} has an attack power of ${this.joker.attack} and can absorb damage with his ${this.joker.health} HP and ${this.joker.defense} defense`
//     //  return `${this.panther.name} has an attack power of ${this.panther.attack} and can absorb damage with their ${this.panther.health} HP and ${this.panther.defense} defense`
//     // name: this.name;
//     // health: this.health;
//     // atack: this.attack;

//  },

//   describeA: function () {
//     return `${this.panther.name} has an attack power of ${this.panther.attack} and can absorb damage with her ${this.panther.health} HP and ${this.panther.defense} defense`
//     //  return `${this.panther.name} has an attack power of ${this.panther.attack} and can absorb damage with their ${this.panther.health} HP and ${this.panther.defense} defense`
//     // name: this.name;
//     // health: this.health;
//     // atack: this.attack;

//  },

// };

// console.log(characters.describeJ())
// console.log(characters.describeA())


// //link html to js

// // let name = document.getElementById("");
// // let health = document.getElementById("health");
// // let attack = document.getElementById("attack");

// document.getElementById('joker-btn').addEventListener('click', showJoker);

// function showJoker() {
//  document.getElementById('names').textContent = characters.joker.name;
//  document.getElementById('health').textContent = characters.joker.health;
//  document.getElementById('attack').textContent = characters.joker.attack;
//  document.getElementById('defense').textContent = characters.joker.defense;
//  document.getElementById('description').textContent = characters.describeJ();



//  //calling function
// }

//     document.getElementById('panther-btn').addEventListener('click', showPanther);

// function showPanther() {
//  document.getElementById('names').textContent = characters.panther.name;
//  document.getElementById('health').textContent = characters.panther.health;
//  document.getElementById('attack').textContent = characters.panther.attack;
//  document.getElementById('defense').textContent = characters.panther.defense;
//  document.getElementById('description').textContent = characters.describeA();


//     }
