// function num(a) {
//   if (isNaN(a)) {
//     throw new Error("Not a number");
//   }
// }

// try {
//   num("b");
// } catch (c) {
//   console.error(c);
// }

function nu(val) {
  try {
    if (isNaN(val)) {
      throw "Not a number";
    } else {
      console.log("Got a number");
    }
  } catch (error) {
    console.error(error);
  } 
  finally {
    console.log("done " + val);
  }
  
}

nu(25);nu("asdasdasd");

//     try {
//       if (isNaN(val)) {
//         throw "Not a number";
//       } else {
//         console.log("Got a number");
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       console.log("done");
//     }
//   }
  
//   nu(25); // Output: Got a number, done
//   nu("b"); // Output: Not a number, done