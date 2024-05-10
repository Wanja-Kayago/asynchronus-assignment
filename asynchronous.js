// /Write an asynchronous function that accepts a message string
//and a delay time in milliseconds. The function should log the message to the console after
//the specified delay time.

async function delayTime(text, delay) {
 
  setTimeout(() => {
    console.log(text);
  }, 5000);
}
delayTime("You will make it at the end")

//You have an array of user IDs and a function getUserData(id) that returns
//a Promise with user data when given a user ID. Write an asynchronous function
//that fetches and logs the data for each user ID one by one, in sequence.

function getUserData(id) {
  return new Promise((resolve) => {
      setTimeout(() => resolve({ id: id, name: `This is user ${id}` }), 1000);
  });
}
async function fetchLogData(userIds) {
  for (const id of userIds) {
      const userData = await getUserData(id);
      console.log(userData);
  }
}
fetchLogData([201,202,203,204,205]);
// //You have an asynchronous function performTask() that returns a Promise.
// //The Promise resolves if the task is successful and rejects if there's an error.
// // Write a function that calls performTask() and logs a custom success message if the task is successful,
// // and a custom error message if there's an error.
const task = false;
  const ourPromise = new Promise((resolve, reject) => {
      if(task){
          resolve('Task succesful')
      }
      else{
          reject('Task unsuccesful')
      }
  })
  ourPromise.then((response)=>{
      console.log({response});
      console.log('Task succesful');
  })
  .catch((error)=>{
      console.error({error});
      console.log('ERROR!');
  })

  async function performTask(){
  try{
      await ourPromise;
  }
   catch{
    console.log('An error ongoing');
   }
  }
  performTask() 
  

//   Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.

function unstableTask(taskName, failureProbability) {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > failureProbability) {
      resolve(`Success Task ${taskName} completed.`);
    } else {
      reject(`Failure Task ${taskName} failed.`);
    }
  });
}

function executeWithRetry(taskName, retries, failureProbability) {
  for (let attempt = 0; attempt < retries; attempt++) {
    return unstableTask(taskName, failureProbability)
      .then((message) => {
        console.log(message);
        return; 
      })
      .catch((error) => {
        console.error(error); 
      });
  }
}
executeWithRetry("SampleTask", 3, 0.5);

