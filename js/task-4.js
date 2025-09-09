const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email;
  const password = event.target.elements.password;
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  if (data.email === "" || data.password === "") {
    console.log(`All form fields must be filled in`);
    return;
  }

  console.log("Form data:", data);

  form.reset();
}
