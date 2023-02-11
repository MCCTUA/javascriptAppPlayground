const category = {
  none: "",
  rt: "street light",
  rf: "flood light",
  rh: "high bay",
  t8: "T8 LED",
};

const divTag = document.getElementById("inputForm");

// Create Element
function addInputRow() {
  const elementBr = document.createElement("br");
  const elementForm = document.createElement("form");

  const elementInputDate = document.createElement("input");
  elementInputDate.setAttribute("type", "date");
  elementInputDate.setAttribute("name", "date");

  const elementSelect = document.createElement("select");
  elementSelect.setAttribute("name", "category");
  for (let [key, value] of Object.entries(category)) {
    const categoryOption = document.createElement("option");
    categoryOption.value = key;
    categoryOption.text = value;
    elementSelect.appendChild(categoryOption);
  }

  const elementInputQty = document.createElement("input");
  elementInputQty.setAttribute("type", "number");
  elementInputQty.setAttribute("name", "qty");

  // const formTag = document.getElementsByTagName("form");
  // const date = document.getElementById("date");
  // const qty = document.getElementById("qty");

  const addInputButton = document.createElement("input");
  addInputButton.setAttribute("type", "submit");
  addInputButton.setAttribute("value", "Submit");

  elementForm.appendChild(elementInputDate);
  elementForm.appendChild(elementSelect);
  elementForm.appendChild(elementInputQty);

  document.getElementsByTagName("body")[0].appendChild(elementForm);
}
// console.log(document.getElementsByTagName("form").length);

function calculate() {
  var allinputs = document.querySelectorAll('input[type="text"]');
  var myLength = allinputs.length;

  for (var i = 0; i < myLength; ++i) {
    if (allinputs[i].value == "") {
      allinputs[i].style.backgroundColor = "lime";
    }
  }
}
const dateArray = [];
const dateSelector = "input[name='date']";
const catArray = [];
const catSelector = "select[name='category']";
const qtyArray = [];
const qtySelector = "input[name='qty']";

const getInputData = () => {
  // const dateInputArray = countFormNumber(dateSelector, dateArray);
  const catInputArray = countFormNumber(catSelector, catArray);
  const qtyInputArray = countFormNumber(qtySelector, qtyArray);

  // console.log("date", dateInputArray);
  console.log("cat ", catInputArray);
  console.log("qty ", qtyInputArray);
  qtyArray.length = 0;
};

const countFormNumber = function (selector, arrayList) {
  let listInput = document.querySelectorAll(selector);

  for (let list of Object.entries(listInput)) {
    arrayList.push(list[1].value);
  }
  return arrayList;
};
// console.log(dateArray);
// console.log(catArray);
// console.log(qtyArray);
