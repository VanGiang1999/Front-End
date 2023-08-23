$(document).ready(function () {
  clearable();
  onlyNumberCompany();
  onlyNumberSalary();
  $(".form_group").on("keyup", "input", function () {
    $(".home_loan_button button").toggleClass("active", validateForm());
  });

  $(".home_loan_button button").click(function () {
    var valueCompany = $("#company").val();
    var valueSalary = $("#salary").val();
    console.log(valueSalary)
    if(Number($("#company").val()) <6 || Number($("#salary").val()) <5000000){
      $(".overlay,.home_loan_popup").toggleClass("active");
    }else{
      alert("oke")
    }
  });
});

function onlyNumberCompany(){
  $("#company").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
     return false;
   }
  });
}

function onlyNumberSalary(){
  $("#salary").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
     return false;
   }
  });
}

function closeMainMenu() {
  $(".overlay,.home_loan_popup").removeClass("active");
}

function clearable() {
  $(".clearable").each(function () {
    const $inp = $(this).find("input:text"),
      $cle = $(this).find(".clearable__clear");

    $inp.on("input", function () {
      $cle.toggle(!!this.value);
    });

    $cle.on("touchstart click", function (e) {
      e.preventDefault();
      $inp.val("").trigger("input");
    });
  });
}

function validateForm() {
  var isFormInvalid = false;
  $(".form_group").each(function () {
    var valueInput = $(this).find(".value_input").val();
    if (!valueInput.trim()) {
      isFormInvalid = true;
    }
  });

  return isFormInvalid;
}
