var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];

var petsWithAge = [];
const getAge = (pet) => {
  return new Date().getFullYear() - pet.bornOn;
};

pets.forEach((pet) => {
  pet.age = getAge(pet);
  petsWithAge.push(pet);
});

console.log(petsWithAge);

var dogs = [];
dogs = petsWithAge.filter((pet) => {
  pet.type === "dog";
});
console.log(dogs);

var jasper;
jasper = petsWithAge.find((pet) => pet.name === "Jasper");

console.log(`Jasper is ${jasper.age} years old`);
