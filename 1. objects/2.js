// Using the different way of accessing and assigning a value to the object using `.` or `[]`
var user = {
	name: "John",
	age: 40	
}

user.age // 40
user.name // John
user["Native Place"] = "Dhramshala";
user["Native Place"] //Dhramshala

// 1. Define a variable named `user` and assign a blank object to it.

var user = {};

// 2. Add a key of `user name` and a value of `Black Panther` to that object.

user["user name"] = "Black Panther";

// 3. Using `console.log` log the value of `user name` key from the user object.

console.log(user["user name"]) 

// 4. Add a key of the value of variable `batch` in the object with the value of 10.

var myBatch = {
	batch: 10
} 

// 5. Using the alert function alert the value of the key added above.

alert(myBatch.batch);

// 6. Add a key of `42` to the object with a value of `The answer to the meaning of life 🧸`.

myBatch[42] = "The answer to the meaning of life 🧸"

// 7. Using the function console.log log the value of the key `42`.

console.log([42]);

// 8. Add a key in your object with the value of the variable `city`. The value of the key should be `true`.


myBatch.city = "true";


// 9. Uisng console.log log the value of the key defined above.

console.log(myBatch.city);

// 10. Can you define a key of `let or var` in any object? Reason.
Yes, it can be defined becuase in object there's no restrictions like in the variables.