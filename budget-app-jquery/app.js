$(window).on("load", function () {
  const $forms = $(".conteneur .information");

  const $services = $(".conteneur .services");
  const $budgetPrice = $services.find("#budget-price");
  const $balancePrice = $services.find("#balance-price");
  const $expensesPrice = $services.find("#expenses-price");

  const $budgetForm = $forms.find(".budget-form");
  const $budget = $budgetForm.find("#budget");

  const $expenseForm = $forms.find(".expense-form");
  const $expenseTitle = $expenseForm.find("#expense-title");
  const $expenseAmount = $expenseForm.find("#expense-amount");

  const $table = $("tbody");

  let sumExpense = 0;
  let tabItems = [];

  const errorsPanel = (errors) => {
    new jBox("Notice", {
      color: "red",
      title: "Errors",
      content: `
        <ul class="errors">
          ${errors.map(
            (err) => `
            <li class="error-item">
              ${$(err.element).attr("name")} : ${err.message.toLowerCase()}
            </li>
          `
          )}
        </ul>
      `,
      position: {
        x: "center",
      },
    });
  };

  $.validator.addMethod(
    "string",
    function (value, element, param) {
      return Number.isNaN(parseInt(value));
    },
    $.validator.format("Field must be a string")
  );

  $budgetForm.validate({
    rules: {
      budget: {
        required: true,
        number: true,
        min: 0,
      },
    },
    errorPlacement: function (error, element) {
      return false;
    },
    invalidHandler: function (event, validator) {
      if (validator.numberOfInvalids()) {
        errorsPanel(validator.errorList);
      }
    },
    submitHandler: function (form) {
      $budgetPrice.text($budget.val());
      $balancePrice.text($budget.val());
      $budget.val("");
    },
  });

  $expenseForm.validate({
    rules: {
      "expense-title": {
        required: true,
        string: true,
      },
      "expense-amount": {
        required: true,
        number: true,
        min: 0,
      },
    },
    errorPlacement: function (error, element) {
      return false;
    },
    invalidHandler: function (event, validator) {
      if (validator.numberOfInvalids()) {
        errorsPanel(validator.errorList);
      }
    },
    submitHandler: function (form) {
      sumExpense += parseInt($expenseAmount.val());
      const amount = parseInt($expenseAmount.val());
      const balance = parseInt($balancePrice.text());
      const expenseTitle = $expenseTitle.val();
      const expense = amount;

      $expensesPrice.text(sumExpense);
      $balancePrice.text(balance - amount);

      const row = {
        value: expense,
        title: expenseTitle,
      };

      tabItems.push(row);

      renderTab(tabItems);

      $expenseTitle.val("");
      $expenseAmount.val("");
    },
  });

  $table.on("click", "button", function (event) {
    const $target = $(this);
    const targetIdx = $target.parents("tr").index();
    const row = getTabRow(targetIdx);

    if ($target.hasClass("delete-color")) {
      handleBalance(row);
      deleteTabRow(targetIdx);
      renderTab(tabItems);
    } else if ($target.hasClass("edit-color")) {
      $expenseTitle.val(`${row.title}`);
      $expenseAmount.val(`${row.value}`);

      handleBalance(row);
      deleteTabRow(targetIdx);
      renderTab(tabItems);
    }
  });

  function getTabRow(id) {
    return tabItems.find((elem, idx) => id === idx);
  }

  function deleteTabRow(id) {
    tabItems = tabItems.filter((elem, idx) => idx !== parseInt(id));
  }

  function handleBalance(row) {
    let balance = parseInt($balancePrice.text());

    sumExpense -= row.value;
    balance += row.value;

    $expensesPrice.text(sumExpense);
    $balancePrice.text(balance);
  }

  function renderTab(rows = []) {
    const tab = rows.map(
      (row) => `
        <tr>
          <td>${row.title}</td>
          <td>${row.value}</td>
          <td>
            <button class="btn-style edit-color"><i class="fas fa-edit"></i></button>
            <button class="btn-style delete-color"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      `
    );

    $table.html(tab);
  }
});
