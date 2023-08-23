$(document).ready(function () {
    clearable();
    $('.form_group').on('keyup','input', function() {
        $('.home_loan_button button').toggleClass('active', validateForm());
    });
});


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


function validateForm(){
    var isFormInvalid = false;
    $('.form_group').each(function() {
      var valueInput = $(this).find('.value_input').val();
      if (!valueInput.trim()) {
        isFormInvalid = true;
      }
    });
    
    return isFormInvalid
}
