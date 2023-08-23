$(document).ready(function () {
  checkValueForm();
});

function checkValueForm() {
  const valueInstallmentMethod = $(
    ".select_an_installment_method_value_left"
  ).text();
  if (valueInstallmentMethod != "") {
    console.log(valueInstallmentMethod);
  } else {
    console.log("aaaaaaaa");
  }
}

function validateForm() {
  const valueInstallmentMethod = $("#js_value_installment_method").val();
  const valueCard = $("#js_value_card").val();
  if (valueInstallmentMethod == "") {
    alert(" Please select an installment method.");
  } else if (valueCard == "") {
    alert("  Please select a card.");
  }
}
