//understanding promises

//how to create promise
//promise is an object representing the eventual completion or failure.

const promiseOne = new Promise((resolve, reject) => {
  //do async tasks
  setTimeout(() => {
    console.log("this is our first promise");
    resolve();
  }, 2000);
});

promiseOne.then(() => {
  console.log("promise one consumed");
});

//creating promise without storing in variable.

new Promise((resolve, reject) => {
  //do an async task

  setTimeout(() => {
    console.log("this is our second promise");
    resolve();
  }, 3000);
}).then(() => {
  console.log("promise two consumed");
});

//promise three sending data with resolve.

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    const userObj = {
      name: "Ram",
      age: 30,
    };
    resolve(userObj); //this is how we pass data to then()
  }, 4000);
});

promiseThree.then((response) => {
  console.log(response);
});

//promise four with error and catch

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      console.log("everything is ok");
      resolve();
    } else {
      console.log("something went wrong");
      reject();
    }
  }, 5000);
});

promiseFour
  .then(() => {
    console.log("promise four consumed");
  })
  .catch(() => {
    console.log("promise is not consumed");
  });

//promise five with chaining and sending data and finally.

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      let userObj = {
        username: "Ram",
        age: 30,
      };
      resolve(userObj);
    } else {
      let error = "something went wrong";
      reject(error);
    }
  }, 6000);
});

promiseFive
  .then((userObj) => {
    console.log("promise five consumed");
    return userObj.username; //this is how we pass data to further then.
  })
  .then((username) => {
    console.log(`username received ${username}`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise either resolve or rejected");
  });

//promise six with async await.

const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      let userObj = {
        username: "Harry",
        age: 28,
      };
      resolve(userObj);
    } else {
      let error = "something went wrong";
      reject(error);
    }
  }, 7000);
});

async function consumePromiseSix() {
  try {
    const response = await promiseSix;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

//async await cant handle errors directly.
consumePromiseSix();

//using fetch with using async and await.

// async function fetDataThroughApi() {
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     const dataToJson = await response.json();
//     console.log(dataToJson);
//   } catch (error) {
//     console.log("something went wrong");
//   }
// }

// fetDataThroughApi();

//using fetch with then and catch.

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((error) => {
    console.log(error);
  });
