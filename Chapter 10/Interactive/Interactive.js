var myArray = [];
var title = document.querySelector(".Title");
var text = document.querySelector("#addFriend");
var button = document.querySelector("#addNew");
var output = document.querySelector("#output");

button.addEventListener("click", () => {
  const newFriend = text.value;

  if (newFriend != "") {
    myArray.push(newFriend);
    addFriendList(newFriend);
  }

  text.value = "";
});

function addFriendList(name) {
  const row = document.createElement("tr");
  const namePerson = document.createElement("td");
  const counter = document.createElement("td");
  count = 0;

  namePerson.textContent = name;
  namePerson.addEventListener("click", function() {
   
    count++;
    counter.textContent = count;
  });

  row.appendChild(namePerson);
  row.appendChild(counter);
  output.appendChild(row);

}

// function content() {
//     myArray.forEach(items,index) => {
        
//     }
// }