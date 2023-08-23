$(document).ready(function () {
  clearable();
  validateEmailPhone();

  $(".form_group").on("keyup", "input", function () {
    $(".home_loan_button button").toggleClass("active", validateForm());
  });

  
});

 function validateEmailPhone(){
  $("#phone").on('focusout', function(){
    phoneInput = $(this).val();
    console.log(phoneInput);
    if (validatePhone(phoneInput)) {
      $(".home_loan_info_customer_phone .error").addClass("none");
      $(".home_loan_info_customer_phone .error").removeClass("active")

    } else {
      $(".home_loan_info_customer_phone .error").addClass("active");
      $(".home_loan_info_customer_phone .error").removeClass("none")
    }
  });

  $("#email").on('focusout', function(){
    emailInput = $(this).val();
    console.log(emailInput);
    if (validateEmail(emailInput)) {
      $(".home_loan_info_customer_email .error").addClass("none");
      $(".home_loan_info_customer_email .error").removeClass("active")

    } else {
      $(".home_loan_info_customer_email .error").addClass("active");
      $(".home_loan_info_customer_email .error").removeClass("none")
    }
  });

 }


function validateEmail(email) {
  var patternEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  return $.trim(email).match(patternEmail) ? true : false;
} 

function validatePhone(phone) {
  var patternPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return $.trim(phone).match(patternPhone) ? true : false;
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
