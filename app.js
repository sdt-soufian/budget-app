/**
 * Whenever you try to fetch a DOM element, the lookup goes through the whole DOM tree!
 * TODO: Optimize the lookup operation with a mechanism of your choosing.
 */
var inputBudget = document.getElementById("budget");
var btn_calculate = document.getElementById("btn-budget");
var inputText = document.getElementById("expense-text");
var inputAmount = document.getElementById("Amount");
var btn_expense = document.getElementById("btn-expense");
var tab = document.querySelector("table");
var title_budget = document.getElementById("budget-price");
var title_expence = document.getElementById("expences-price");
var title_balance = document.getElementById("balance-price");
var message = document.querySelector(".msg-error");
var tbody = document.createElement("tbody");
var pExpence = 0;
var pBalance = null;

//Ecouter le événements
btn_calculate.addEventListener("click", budgetCalculate);
btn_expense.addEventListener("click", expenseCalculate);

//Les fonctions
function budgetCalculate(e) {
  e.preventDefault();
  if (inputBudget.value == "" || inputBudget.value < 0) {
    inputBudget.style.borderColor = "red";
    message.classList.add("msg-show");
    setTimeout(() => {
      inputBudget.style.borderColor = "#308818";
      message.classList.remove("msg-show");
    }, 4000);
  } else {
    title_budget.textContent = inputBudget.value;
    title_balance.textContent = inputBudget.value;
  }
}

/**
 * 1. There is no form validation when this function is called!
 * which generates few errors :
 *
 * - EXPENCES = NaN
 * - BALANCE = NaN
 * - Creates an empty expenses row
 *
 * TODO: Validate field type & value
 *
 * 2. No error messages are shown in case of invalid input
 * TODO: Show error messages
 *
 * 3. Fields keep their value after a successful calculation
 * TODO: Empty the fields if they are valid
 */
function expenseCalculate(e) {
  e.preventDefault();
  var tabINfo = [inputText.value, inputAmount.value];
  pExpence += parseInt(tabINfo[1]);
  title_expence.textContent = pExpence;
  title_balance.textContent = (
    parseInt(title_balance.textContent) - parseInt(tabINfo[1])
  ).toString();
  var tr = document.createElement("tr");
  tabINfo.forEach((elet) => {
    var td = document.createElement("td");
    td.textContent = elet;
    tr.appendChild(td);
  });
  var td = document.createElement("td");
  var btn_edit = document.createElement("button");
  btn_edit.classList.add("btn-style", "edit-color");
  btn_edit.addEventListener("click", editRow);
  btn_edit.innerHTML = '<i class="fas fa-edit"></i>';
  var btn_delete = document.createElement("button");
  btn_delete.classList.add("btn-style", "delete-color");
  btn_delete.addEventListener("click", deleteRow);
  btn_delete.innerHTML = '<i class="fas fa-trash"></i>';
  td.appendChild(btn_edit);
  td.appendChild(btn_delete);
  tr.appendChild(td);
  tbody.appendChild(tr);
  tab.appendChild(tbody);
  inputText.value = " ";
  inputAmount.value = "";
}

function deleteRow(e) {
  let price = e.target.parentElement.previousSibling.textContent;
  title_expence.textContent = `${(pExpence -= price)}`;
  title_balance.textContent = (
    parseInt(title_balance.textContent) + parseInt(price)
  ).toString();
  e.target.parentElement.parentElement.remove();
}

function editRow(e) {
  inputText.value =
    e.target.parentElement.parentElement.children[0].textContent;
  inputAmount.value = parseInt(
    e.target.parentElement.parentElement.children[1].textContent
  );
  let price = e.target.parentElement.previousSibling.textContent;
  title_expence.textContent = `${(pExpence -= price)}`;
  title_balance.textContent = (
    parseInt(title_balance.textContent) + parseInt(price)
  ).toString();
  e.target.parentElement.parentElement.remove();
}
