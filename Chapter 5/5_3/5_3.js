let myWork = [];
for (let i = 0; i < 11; i++) {
   stat = i % 2 ? false : true;
  
  let temp = {
    Name: `Lesson ${i}, status: ${stat}`
  };
  myWork.push(temp.Name);
}
console.log(myWork);
