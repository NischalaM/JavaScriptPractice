function asyncfunc() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let randomNumber = Math.round(Math.random() * 20) + 1;
          if (randomNumber % 2 == 0) {
              resolve(randomNumber);
              console.log("Random number is even:", randomNumber);
          }else{ reject(new Error("Number is odd"));}
    }, 2000);
  });
}

 async function asyncAwaitExample() 
{
     await asyncfunc();//async function will wait for asyncfunc to resolve or reject
     console.log("Async function executed after 2 seconds");//sync function will execute after async function is resolved
}
asyncAwaitExample();