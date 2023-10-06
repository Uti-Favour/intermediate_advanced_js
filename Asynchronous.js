console.log("Start");
setTimeout(function() {
  console.log("This is an asynchronous operation.");
}, 2000); // Wait for 2 seconds
console.log("End");

//Promise
console.log("P Start");
const myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Promise resolved!");
  }, 2000); // Wait for 2 seconds
});

myPromise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });

console.log("P End");

//Asynch/ Await
console.log("A Start");

async function doAsyncWork() {
  try {
    const result = await new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Async/Await resolved!");
      }, 2000); // Wait for 2 seconds
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

doAsyncWork();

console.log("A End");

//Fetch Api
console.log("F Start");

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

console.log("F End");


