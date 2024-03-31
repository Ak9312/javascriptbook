em = document.querySelector(`input[type = "text"][name = "email"]`);

ps = document.querySelector(`input[type = password]`);

un = document.querySelector(`input[type = "text"][name = "userName"]`);

bt = document.querySelector(`input[type = "submit"]`);

er = document.querySelectorAll(".error.hide");

fr = document.querySelector('form[name = "myform"]')
form = {};


bt.addEventListener("click", (event) => {
  event.preventDefault();

  er.forEach((event) => {
    event.classList.add("hide");
  });


  function err(a) {
    const ero = inputElement.nextElementSibling;
    ero.classList.remove("hide");
    a.focus();
  }

  const email = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
  if (!em.value.match(email)) {
    err(email);
  }
const password = /^([A-Za-z0-9]){3,8}$/ ;
if (!ps.value.match(password)) {
  showError("invald password")  
  error = true;
}

fr.forEach((frm)   => {
form[frm] = input.value;
})



});
