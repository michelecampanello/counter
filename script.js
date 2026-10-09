const STORAGE_KEY = "counter";
const MIN_VALUE = 0;
const MAX_VALUE = 99;

let counter = Number(localStorage.getItem(STORAGE_KEY)) || 0;

const renderContainer = (id, tagName) => {
  const container = document.createElement(tagName);
  container.id = id;
  document.body.appendChild(container);
  return container;
};

const counterContainer = renderContainer("counterContainer", "h1");
const btnContainer = renderContainer("btnContainer", "div");
const msgContainer = renderContainer("msgContainer", "p");

const buttons = {};

const renderBtn = (action) => {
  const btn = document.createElement("button");
  const icon = document.createElement("img");
  const labels = { minus: "Decrementa", plus: "Incrementa", reset: "Azzera" };

  icon.src = `assets/img/${action}.svg`;
  icon.alt = labels[action];

  btn.classList.add("btn");
  btn.type = "button";
  btn.appendChild(icon);
  btn.addEventListener("click", () => updateCounter(action));

  btnContainer.appendChild(btn);
  buttons[action] = btn;
};

const updateUI = (message = "") => {
  counterContainer.textContent = counter;
  msgContainer.textContent = message;

  if (buttons.minus) buttons.minus.disabled = counter <= MIN_VALUE;
  if (buttons.plus) buttons.plus.disabled = counter >= MAX_VALUE;
};

const updateCounter = (action) => {
  let message = "";

  switch (action) {
    case "minus":
      if (counter > MIN_VALUE) counter--;
      if (counter === MIN_VALUE) message = "Valore minimo raggiunto";
      break;
    case "plus":
      if (counter < MAX_VALUE) counter++;
      if (counter === MAX_VALUE) message = "Valore massimo raggiunto";
      break;
    case "reset":
      counter = 0;
      break;
  }

  localStorage.setItem(STORAGE_KEY, counter);
  updateUI(message);
};

renderBtn("minus");
renderBtn("plus");
renderBtn("reset");

updateUI(
  counter <= MIN_VALUE
    ? "Valore minimo raggiunto"
    : counter >= MAX_VALUE
    ? "Valore massimo raggiunto"
    : ""
);