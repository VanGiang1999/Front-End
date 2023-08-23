$(document).ready(function () {
  $(".beneficiary_account_button").click(function () {
    $(".overlay,body,.beneficiary_modal_used_account").toggleClass("active");
  });
});
function closeMainMenu() {
  $(".overlay,body,.beneficiary_modal_used_account").removeClass("active");
}

function validate() {
  var nameBank = $("#name_bank").val();
  var accountBank = $("#account_bank").val();
  var nameAccountBank = $("#name_account_bank").val();
  var dateBank = $("#timeDate").val();
  var day,month,year;
  if(dateBank && dateBank != ''){
    dateBank = new Date($("#timeDate").val());
    day = dateBank.getDate();
    month = dateBank.getMonth() + 1;
    year = dateBank.getFullYear();
  }
  if (nameBank == "") {
    alert("Lỗi Kìa 1");
    return false;
  } else if (accountBank == "") {
    alert("Lỗi Kìa 2");
    return false;
  } else if (nameAccountBank == "") {
    alert("Lỗi Kìa 3");
    return false;
  } else  if(dateBank && dateBank == ""){
    alert("Lỗi Kìa 4");
    return false;
  } else {
    $(".beneficiary_remark").addClass("active");
    $(".beneficiary_remark_account").addClass("active");
  }
}
