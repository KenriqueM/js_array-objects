
var myPenguin = {
	"character name": "Captain Cook, Greta",
	origin: "Mr. Popper's Penguin",
	author: "Richard and Florence Atwater",
}

//myPenguin .canFly = "false";

myPenguin.favouriteFoods = ["fishburger, taco, mullets"]

console.log(myPenguin.favouriteFoods[1]);

myPenguin.firstFaveFood = myPenguin.favouriteFoods[0];

myPenguin.favouriteFoods.push("greyfish");

console.log(myPenguin.favouriteFoods.length);

myPenguin.favouriteFoods[4] = "pineapples"

var lastFaveFood = myPenguin.favouriteFoods[myPenguin.favouriteFoods.length-1]
for (var i = 0; i <= myPenguin.favouriteFoods.length; i++) {
	console.log(myPenguin.favouriteFoods[i])
}