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
    message.innerHTML = "Error Budget doit etre positive et superieur a zero";
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
    message.innerHTML = "text or value invalid";
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
    let objItems = {
      id: Math.floor(Math.random() * 200),
      titre: inputText.value,
      valeur: inputAmount.value
    }
    tabItems.push(objItems);
    localStorage.setItem('budgetInfo', JSON.stringify(tabItems));
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${objItems.titre}</td>
    <td>${objItems.valeur}</td>
    <td>
        <button value="${objItems.id}" class="btn-style edit-color"><i class="fas fa-edit"></i></button>
        <button value="${objItems.id}" class="btn-style delete-color"><i class="fas fa-trash"></i></button>
    </td>`
    tbody.appendChild(tr);
    inputText.value = " ";
    inputAmount.value = "";
  }

}

tbody.addEventListener('click', (e) => {
  if (e.target.classList[1] == "delete-color") {
    let id = e.target.getAttribute('value');
    let getValue = Operations(id);
    DOMmanip(getValue);
    deleteItem(id);
  }

  else if (e.target.classList[1] == "edit-color") {
    //affichage des valeurs
    inputText.value =
      e.target.parentElement.parentElement.children[0].textContent;
    inputAmount.value = parseInt(
      e.target.parentElement.parentElement.children[1].textContent
    );
    let id = e.target.getAttribute('value');
    let getValue = Operations(id);
    DOMmanip(getValue);
    deleteItem(id);
  }
})

function Operations(id) {
  console.log(tabItems);
  let valeur = tabItems.filter(elet => elet.id == id);
  return valeur[0].valeur;
}

function DOMmanip(val) {
  let pBalance = parseInt(title_balance.textContent);
  pExpence -= parseInt(val);
  title_expence.textContent = pExpence;
  pBalance += parseInt(val);
  title_balance.textContent = pBalance.toString();
}

function deleteItem(indice){
  let tempTab = (JSON.parse(localStorage.getItem('budgetInfo'))).filter( elet => elet.id != indice); 
  tabItems = tempTab;
  localStorage.setItem('budgetInfo', JSON.stringify(tabItems));
}





