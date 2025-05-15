const randomNumberPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.round(Math.random() * 20) + 1;
    console.log(randomNumber);
    if (randomNumber > 10) {
        resolve(randomNumber);
    } else {
        reject(new Error("Number is less than 10"));
    }
})
randomNumberPromise
    .then((result) => {
        console.log(" Promise1 is fullfilled with value: ", result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (result % 2 == 0) {
                    resolve("Even Number");
                } else {
                    reject(new Error("Number is odd"));
                }
            }, 1000);
                
        }).then((result) => {
            console.log("Promise2 is fullfilled and the:", result);
        })
    })
    .catch((error) => {
        console.error("Error:",error.message);
    })
