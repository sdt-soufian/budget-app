/**
 * Whenever you try to fetch a DOM element, the lookup goes through the whole DOM tree!
 * TODO: Optimize the lookup operation with a mechanism of your choosing.
 */
var inputBudget = document.getElementById("budget");
var btn_calculate = document.getElementById("btn-budget");
var inputText = document.getElementById("expense-text");
var inputAmount = document.getElementById("Amount");
var btn_expense = document.getElementById("btn-expense");
var tbody = document.getElementById('tab-body');
var title_budget = document.getElementById("budget-price");
var title_expence = document.getElementById("expences-price");
var title_balance = document.getElementById("balance-price");
var message = document.querySelector(".msg-error");
var pExpence = 0;
var pBalance = null;
var tabItems = [];

//Ecoutez les événements
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
    inputBudget.value = "";
  }
}

function expenseCalculate(e) {
  e.preventDefault();
  if (inputAmount.value == "" || inputAmount.value < 0 || inputText.value == " ") {
    message.classList.add("msg-show");
    setTimeout(() => {
      message.classList.remove("msg-show");
    }, 3500);
  }
  else {
    pExpence += parseInt(inputAmount.value);
    title_expence.textContent = pExpence;
    title_balance.textContent = (
      parseInt(title_balance.textContent) - parseInt(inputAmount.value)
    ).toString();
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${inputText.value}</td>
    <td>${inputAmount.value}</td>
    <td>
        <button value="1" class="btn-style edit-color"><i class="fas fa-edit"></i></button>
        <button value="1" class="btn-style delete-color"><i class="fas fa-trash"></i></button>
    </td>`
    tbody.appendChild(tr);
    inputText.value = " ";
    inputAmount.value = "";
  }

}



tbody.addEventListener('click', (e) => {
  if (e.target.classList[1] == "delete-color") {
    console.log(e.target.parentElement);
    let price = e.target.parentElement.previousSibling.textContent;
    title_expence.textContent = `${(pExpence -= price)}`;
    title_balance.textContent = (
      parseInt(title_balance.textContent) + parseInt(price)
    ).toString();
    e.target.parentElement.parentElement.remove();
  }

  else if (e.target.classList[1] == "edit-color") {
    console.log(e.target.parentElement);
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
})











