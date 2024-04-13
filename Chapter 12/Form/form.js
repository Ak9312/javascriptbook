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
    const ero = a.nextElementSibling;
    ero.classList.remove("hide");
    a.focus();
  }

  const email = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
  if (!em.value.match(email)) {
    err(em);
  }

  let error = false;
const password = /^([A-Za-z0-9]){3,8}$/ ;
if (!ps.value.match(password)|| ps.value.length < 3 || ps.value.length > 8) {
  err(ps); 
  error = true;
}

document.querySelectorAll('form[name="myform"] input').forEach(input => {
  form[input.name] = input.value;
});



// fr.forEach((frm)   => {
// form[frm] = input.value;
// })
if (!error) {
  console.log(form);
  
}


});
