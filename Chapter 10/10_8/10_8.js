let names = [
  "Laurence",
  "Mike",
  "John",
  "Larry",
  "Kim",
  "Joanne",
  "Lisa",
  "Janet",
  "Jane",
];

// function build() {
//   const table = document.createElement("table");
//   table.setAttribute("id", "HTML");
//   for (let i = 0; i < names.length; i++) {
//     // document.getElementById("table").classList.add("box");
//     var row = document.createElement("tr");
//     row.setAttribute("data-row", i);
//     for (let j = 0; j < names.length; j++) {
//       var text = document.createElement("td");
//       text.setAttribute("data-names", names[i]);
//       row.appendChild(text);
//     }
//     table.appendChild(row);
//   }
//   document.body.appendChild(table);
// }

 document.getElementById("message").style.fontSize = "x-large";

message.innerHTML =
  "<br>" +  "<b>" + "My Friend Table" + "<br>" ;

function build() {


  

  for (let i = 0; i < names.length; i++) {
    output.innerHTML += "<table>";
    output.innerHTML +=  "<tr><td>" + names[i] + "  "  + "</td><td>"  + (i + 1) +"</td></tr>"
    output.innerHTML += "</table>";
  }
 
}
  

