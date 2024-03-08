List = ["Milk", "Bread", "Apples"];
List.splice(1,1, "Bananas", "Eggs")
// List.splice(3)
List.pop();
List.sort();
console.log(List)
let  Index = List.lastIndexOf("Milk");
console.log(Index)
List.splice(1,0, "Carrots", "Lettuce")
console.log(List)

List2 = ["Juice", "Pop"]
List4 = List.concat(List2,List2)
console.log(List4)
let  Index2 = List4.lastIndexOf("Pop");
console.log(Index2)