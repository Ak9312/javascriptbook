forms = document.querySelector("form");
input = document.querySelectorAll("form input:not([type='submit'])");

forms.addEventListener("submit", (event) => {
  event.preventDefault();
  error = false;

  function checker() {
    input.forEach((ans) => {
      console.log(ans.value.length);
      if (ans.value === "") {
        error = true;
      }
if(ans.id === "age" && parseInt(ans.value)< 19 )      
  {
    console.log("must be 19 or above")
    error = true;
  }
    });
  }
  checker();
  if (error) {
    console.log("Error")

  }
});
