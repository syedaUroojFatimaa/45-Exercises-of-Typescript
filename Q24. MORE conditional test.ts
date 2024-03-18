let car: string = 'subaru';

// "String tests"

// test 1: Equality (true)
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

// test 2: Strict equality (false)
console.log("Is car ==='subaru'? I predict false");
console.log(car === 'subaru');

// test 3: Inequality (true)
console.log("Is car != 'Toyota'? I predict true.");
console.log(car != 'Toyota');

// Test 4: Inequality (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');

//" Lowercase Function Tests "

// test 5: Lowercase conversion (true)
console.log("Is car.tolowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subau');

// test 6: Lowercase conversion (false)
console.log("Is car === car.tolowerCase()? I predict falsse.");
console.log(car === car.toLowerCase());

let age: number = 25;

// " Numerical Tests "

// test 7: Equality (true)
console.log("Is age == 25? I predict true.");
console.log(age ==25);

// test 8: Inequality (false)
console.log("Is age != 30? I predict false");
console.log(age != 30);

// test 9: Greater than (false)
console.log("Is age > 30? I predict false.");
console.log(age > 30);

// test 10: Less than or equal (true)
console.log("Is age <= 25? I predict true.");
console.log(age <= 25);

// "Logical Operators"

// test 11: AND (true)
console.log("Is age > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30);

// test 12: OR  (false)
console.log("Is age > 30 || age < 18? I predict false.");
console.log(age > 30 || age < 18);

let numbers: number[] = [1,2,3,4];

// "Array tests"

// test 13: Not in array (true)
console.log("Is 3 in numbers? I predict true.");
console.log(3 in numbers);

// test 14: Not in array (false)
console.log("Is 5 not in numbers? I predict true.")
console.log(5 in numbers);