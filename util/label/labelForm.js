/*******/
const inputForm = [
  {
    tag: "input",
    name: "isPrint",
    type: "checkbox",
    value: true,
    label: {
      innerText: "Print label",
    },
  },
  {
    tag: "input",
    name: "brand",
    type: "text",
    placeholder: "Brand",
  },
  {
    tag: "select",
    name: "category",
    option: {
      0: null,
      rh: "high bay",
      rf: "flood Light",
      rt: "street light",
    },
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
  {
    tag: "input",
    name: "input",
    type: "text",
    placeholder: "Input AC",
  },
  {
    tag: "input",
    name: "surge",
    type: "text",
    placeholder: "surge",
  },
  {
    tag: "input",
    name: "cct",
    type: "text",
    placeholder: "cct",
  },
  {
    tag: "input",
    name: "cri",
    type: "text",
    placeholder: "cri",
  },
  {
    tag: "input",
    name: "lumen",
    type: "text",
    placeholder: "lumen",
  },
  {
    tag: "input",
    name: "beam angle",
    type: "text",
    placeholder: "beam angle",
  },
  {
    tag: "input",
    name: "customer",
    type: "text",
    placeholder: "customer name",
  },
  {
    tag: "select",
    name: "supplier",
    option: {
      0: null,
      scl: "SCL",
      bnt: "B & T",
      tyd: "TYD",
    },
  },
  {
    tag: "input",
    name: "reciept date",
    type: "date",
    label: {
      innerText: "วันรับสินค้าเข้า",
    },
  },
  {
    tag: "input",
    name: "delivery date",
    type: "date",
    label: {
      innerText: "วันส่งสินค้า",
    },
  },
];

const inputName = {
  isPrint: "chekc for print",
  brand: "Brand",
  model: "model",
  sku: "SKU",
};

const formInput = document.getElementById("formInput");
const inputArea = document.getElementById("inputArea");
const appendButton = document.getElementById("appendButton");

let inputIndexCount = 0;

appendButton.addEventListener("click", () => {
  let inputCounted = inputIndexCount++;
  const inputArray = inputForm.map((el) => {
    let input = "";
    let label = "";
    console.log("tag type :", el.type);
    console.log("placeholder : ", el.placeholder);
    console.log("value : ", el.value);
    switch (el.tag) {
      case "input":
        switch (el.placeholder) {
          case undefined:
            input = document.createElement(`${el.tag}`);
            input.name = `${el.name}${inputCounted}`;
            input.type = `${el.type}`;
            label = document.createElement("label");
            label.for = `${el.name}`;
            label.innerText = `${el.label.innerText}`;

            break;
          default:
            input = document.createElement(`${el.tag}`);
            input.name = `${el.name}${inputCounted}`;
            input.type = `${el.type}`;
            input.placeholder = `${el.placeholder}`;
            label = document.createElement("label");
            label.for = `${el.name}${inputCounted}`;
            label.innerText = `${el.placeholder}`;
            break;
        }
        break;
      case "select":
        input = document.createElement(`${el.tag}`);
        input.name = `${el.name}${inputCounted}`;
        console.log(Object.keys(el.option));
        const selectOption = Object.keys(el.option).map((innerEl) => {
          const option = document.createElement("option");
          option.value = innerEl;
          option.innerText = el.option[innerEl];
          return option;
        });
        input.append(...selectOption);
      default:
        break;
    }

    return [input, label];
  });

  // version 2
  console.log(inputArray);
  inputArray.map((el) => {
    inputArea.append(el[1], el[0]);
  });
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
