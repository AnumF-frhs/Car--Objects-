// alert ('hi');

let carDisplay = {

    sports: {
        make: "BMW",
        model: "Mustang",
        year: 2015,
        category: "Sports Car",
        color: "Metallic",
        price: 63425,
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
        if (carDisplay.price > 50000) {
            return "Luxury"
        } else if (carDisplay.price > 30000) {
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
        price: $34457,
        fuelType: "Fish",
        horsepower: "Very Fast",
        seatingCapacity: "Nine seats "
    }


    
}

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
