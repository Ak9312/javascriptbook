const allowed = ["abcd1", "check@", "itsok3", "fin$"];

function login(a) {
  return allowed.includes(a);
}

function pass(query) {
  prom = new Promise((resolve, reject) => {
    if (login(query)) {
      resolve("Correct");
    } else {
      reject("Incorrect");
    }
  });
  return prom;
}

function check(query) {
  pass(query)
    .then(() => {
      console.log(query), console.log("correct");
    })
    .catch(() => {
      console.log(query), console.log("incorrect");
    });
}

check("abcd1");
check("abcd");
