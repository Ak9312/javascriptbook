mainObj = document.querySelector(".main");
input = document.querySelector(".inputBox");
outputList = document.querySelector(".output");
button = document.querySelector(".Btn");
tasks = JSON.parse(localStorage.getItem("tasklist")) || [];

function buildTask(task) {
  const list = document.createElement("li");
  const text = document.createTextNode(task.name);
  list.appendChild(text);
  if (task.checked) {
    list.classList.add("ready");
  }
  list.addEventListener("click", () => {
    list.classList.toggle("ready");
    taskSave();
  });
  outputList.appendChild(list);
}



button.addEventListener("click", () => {
  const newTask = { name: input.value, checked: false };
  tasks.push(newTask);
  buildTask(newTask);
  taskSave();
  input.value = "";
});

function taskSave() {
    localStorage.setItem('tasklist', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', () => {
    tasks.forEach(buildTask);
  });