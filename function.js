function calc(a, b) {
  return a + b;
}

console.log(calc(20, 30));

//Expression
let func = function () {
  console.log("This is an expression");
};
func();

//Arrow function
let getName = (name) => {
  return "Hi " + name;
};
getFunction = getName;
console.log(getFunction("Favour"));

//loop thinking
function pow(x, n) {
  let result = 1;
  for (i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
console.log(pow(2, 3));

//Reecursive calculation
let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 7700

//Rest parameters and spread syntax
function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));

//Function Excercise
function maxValue(param1, param2) {
  if (param1 > param2) {
    return param2;
  } else {
    return param1;
  }
}

console.log(maxValue(5, 10));

//Recursion
function isEven(n){
  if(n === 0){
    return true;
  } else if(n === 1){
    return false;
  } else if(n < 0){
    return isEven(-n);
  } else{
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(10));



//Bean counting
function countBs(str){
  return countChar(str , "B")
};

function countChar(str , char){
  let count = 0;

  //for loop
  for(i = 0 ; i < str.length ; i++){
    if(str[i] === char){
      count++;
    }
  }

  return count;
}

// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

//Variable scope and closure