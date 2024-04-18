const url = "list.json";

fetch(url)
.then((r) => r.json())
.then((info) => info.forEach((element) => console.log(element)))







