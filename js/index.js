const screenNumber = document.querySelector(".screen-num");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal-btn");
const removeBtn = document.querySelector(".left-btn");
const deleteBtn = document.querySelector(".delete");

const getNumber = () => {
  const setNumber = localStorage.getItem("num");
  screenNumber.value = setNumber;
};
getNumber();
const storingNumber = (values) => {
  localStorage.setItem("num", values);
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const number = e.target.value;
    const values = (screenNumber.value += number);
    storingNumber(values);
  });
});
equal.addEventListener("click", (e) => {
  if (screenNumber.value === "") {
    screenNumber.value = "";
  } else {
    const result = eval(screenNumber.value);
    const results = (screenNumber.value = result);
    storingNumber(results);
  }
});
deleteBtn.addEventListener("click", (e) => {
  const emptyScreen = (screenNumber.value = "");
  storingNumber(emptyScreen);
});
removeBtn.addEventListener("click", (e) => {
  const sliceNumber = (screenNumber.value = screenNumber.value.slice(0, -1));
  storingNumber(sliceNumber);
});
