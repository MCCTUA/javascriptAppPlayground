/*******/
const inputForm = [
  {
    tag: "input",
    name: "brand",
    type: "text",
    placeholder: "Brand",
  },
  {
    tag: "input",
    name: "model",
    type: "text",
    placeholder: "กรอกรุ่น (model)",
  },
  {
    tag: "input",
    name: "sku",
    type: "text",
    placeholder: "sku",
  },
  {
    tag: "input",
    name: "power",
    type: "text",
    placeholder: "power",
  },
];
const inputName = {
  isPrint: "chekc for print",
  brand: "Brand",
  model: "model",
  sku: "SKU",
};
console.log(Object.entries(inputName));

const formInput = document.getElementById("formInput");
const inputArea = document.getElementById("inputArea");
const appendButton = document.getElementById("appendButton");

let inputIndexCount = 0;

appendButton.addEventListener("click", () => {
  let inputCounted = inputIndexCount++;
  const inputArray = inputForm.map((el) => {
    const input = document.createElement(`${el.tag}`);
    input.name = `${el.name}${inputCounted}`;
    input.type = `${el.type}`;
    input.placeholder = `${el.placeholder}`;

    return input;
  });
  console.log(inputArray);
  inputArea.append(...inputArray);
  const brTag = document.createElement("br");
  inputArea.append(brTag);
});

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  for (const [key, value] of formData.entries()) {
    console.log(`${key} = ${value}`);
  }
});
