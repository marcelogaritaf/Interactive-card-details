const cardName = document.querySelector(".card-name");
const number = document.querySelector(".card-number");
const date = document.querySelector(".card-date");
const year = document.querySelector(".card-year");
const code = document.querySelector(".card-code");
const alert = document.querySelectorAll("form span");
const inputs = document.querySelectorAll("form input");
const form = document.getElementById("form");
const success = document.querySelector(".success");
const btnForm = document.querySelector("form button");
const btnSuccess = document.querySelector(".success button");

btnForm.addEventListener("click", (e) => {
  e.preventDefault();
  alert.forEach((element) => {
    element.classList.remove("visible");
  });
  inputs.forEach((element) => {
    element.style.border = "1px solid var(---Light-grayish-violet)";
  });
  if (
    !cardName.value.trim() ||
    !number.value.trim() ||
    !date.value.trim() ||
    !year.value.trim() ||
    !code.value.trim()
  ) {
    alert.forEach((element) => {
      element.classList.add("visible");
    });
    inputs.forEach((element) => {
      element.style.border = "2px solid var(---errors)";
    });
  } else {
    document.querySelector(".img1 p").textContent = code.value;
    document.querySelector(".img2 h4").textContent = number.value;
    document.querySelector(".img2 .name").textContent = cardName.value;
    document.querySelector(".img2 .date").textContent = date.value;
    document.querySelector(".img2 .year").textContent = year.value;

    form.classList.add("hide");
    success.classList.remove("hide");
  }
});

btnSuccess.addEventListener("click", (e) => {
  e.preventDefault();

  form.classList.remove("hide");
  success.classList.add("hide");
});
