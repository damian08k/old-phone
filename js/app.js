const buttons = document.querySelector(".buttons");
const text = document.querySelector(".text");

let buttonClicks = 0;
let result = "";

const clickedElement = {
  keys: "",
};

const handleButtonsClick = (evt) => {
  const keys = evt.target.getAttribute("data-keys");

  if (keys) {
    if (keys !== clickedElement.keys || buttonClicks === keys.length) {
      buttonClicks = 0;
    }

    clickedElement.keys = keys;
    buttonClicks++;

    result += keys[buttonClicks - 1];
    text.textContent = result;
  }
};

buttons.addEventListener("click", handleButtonsClick);
