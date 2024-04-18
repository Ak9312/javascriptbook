input = document.querySelector(".Input");
inputBox = document.querySelector(".InputBox");
submitButton = document.querySelector(".SubmitButton");
output = document.querySelector(".Output");

url = "List.json";

submitButton.addEventListener("click", addToList);

myList = [];
data = localStorage.getItem("myList");

function addToList() {
  if (inputBox.value.length > 3) {
    const object = { Name: inputBox.value };
    myList.push(object);
    maker(object);
    savetoStorage();

    inputBox.value = "";
  }
}
function maker(item) {
  New = document.createElement("div");
  New.textContent = item.Name;
  output.appendChild(New);
}

function savetoStorage() {
  console.log(myList);
  localStorage.setItem("myList", JSON.stringify(myList));
}

window.addEventListener("DOMContentLoaded", () => {
  if (data) {
    myList = JSON.parse(data);
    output.textContent = "";

    myList.forEach((item) => maker(item));
  } else {
    fetch(url)
      .then((rep) => rep.json())
      .then((data) => {
        myList = data;
        myList.forEach((inp) => {
          maker(inp);
        });
      });
    savetoStorage();
  }
});
