let data = {
  item1: { name: "a", age: 44 },
  item2: { name: "b", age: 31 },
};

function loop(a) {
  for (x in a) {
    console.log("item is "  + x);

    for (y in a[x]) {
        console.log("inside is  " +  y)
       
            console.log("final value is " +   `${a[x][y]}`  )
     
    }


  }
}

loop(data);
