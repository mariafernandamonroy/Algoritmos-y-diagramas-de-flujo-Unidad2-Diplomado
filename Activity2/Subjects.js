const inputNameForm = document.getElementById("inputName");
const form = document.getElementById("form");
const divElements = document.getElementById("divElements");
const btnAdd = document.getElementById("btnAdd");
const btnSend = document.getElementById("btnSend");
let name = document.getElementById("name");
let result = document.getElementById("result");
let valueArray = [];

const templateElement = (data) => {
  return data;
};

btnAdd.addEventListener("click", () => {
  if (form.subject.value != "" && form.value.value != "") {
    const div = document.createElement("div");
    div.classList.add("notification", "is-link", "is-light", "py-2", "my-1");
    div.innerHTML = templateElement(
      form.subject.value + " " + form.value.value
    );
    divElements.appendChild(div);
    valueArray.push(parseInt(form.value.value));

    form.reset();
  } else {
    alert("Complete los campos");
  }
});
btnSend.addEventListener("click", () => {
  let sum = 0;
  let total = 0;
  let fixedCost = 20000;
  let carnet = 8000;
  nameP.textContent = name.value;
  inputNameForm.reset();
  for (let value of valueArray) sum += value;
  percent = sum * 0.2;
  total = sum - percent + fixedCost + carnet;
  result.textContent = total;
});
