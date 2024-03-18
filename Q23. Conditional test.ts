let car: string = 'subaru';

// Test 1: equailty commparison (true)
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru'); //true

// Test 2: strict equality comparison (true)
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru'); //true

//Test 3:Inequality comparison (false)
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru'); // false

//Test 4: strict inequality comparison (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); //false

//Test 5: Less than comparsion (false)
console.log("Is car < 'subaru'? I predict false.");
console.log(car < 'subaru'); //false (lexicographic comparison)

//Test 6: Greater than comparsion (false)
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); //false (lexicographic comparsion)

//Test 7: Less than or equal comparsion (true)
console.log("Is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru'); //true

//Test 8: Greater than or equal comparsion (true)
console.log("Is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru'); //true

//Test 9: Cheaking truthiness (true)
console.log("Is car? I predict true.");
console.log(car); //true (non-empty string is truthly)

//Test 10: Checking falsiness (false)
console.log("Is !car? I predict false.");
console.log(!car); //false (negation of a truthy value)