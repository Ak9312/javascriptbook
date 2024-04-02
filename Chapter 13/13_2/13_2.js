

const prom = new Promise((resolve, reject) => {
  resolve("Start Counting");
});



function counter(arg) {
    console.log(arg);
  }





prom
.then ( value => {counter(value); return "one" })
.then ( value => {counter(value); return "two" })
.then ( value => {counter(value); return "three" })
.then ( value => {counter(value); })



