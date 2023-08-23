$(document).ready(function () {
  optionTransaction();
  hideBatchSalaryTransfer();
  showHideContentMain();
  showHideInformationAccount();
  showHideTransactionAccount();
  showHideContentMainBatch02(); 
  showHideContentMainBatch03(); 
  checkSelect();
  
  const $menu = $('.dropdown')

  const onMouseUp = e => {
    if (!$menu.is(e.target) // If the target of the click isn't the container...
      && $menu.has(e.target).length === 0) // ... or a descendant of the container.
      {
        $menu.removeClass('open')
     }
   }

   $('.dropdown').on('click', () => {

      if ($menu.hasClass('open')) {
        $(document).on('mouseup', onMouseUp) // Only listen for mouseup when menu is active...
      } else {
        $(document).off('mouseup', onMouseUp) // else remove listener.
      }
  })
  


});

function checkSelect(){
  $('#checkAll').click(function() {
    var isChecked = $(this).prop("checked");
    $('.realtime_schedule').find('.wb_approval_transactions_list input[type="checkbox"]').prop('checked', isChecked);
  });

  $('.realtime_schedule').find('.wb_approval_transactions_list input[type="checkbox"]').click(function() {
    var isChecked = $(this).prop("checked");
    var isHeaderChecked = $("#checkAll").prop("checked");
    if (isChecked == false && isHeaderChecked)
      $("#checkAll").prop('checked', isChecked);
    else {
      $('.realtime_schedule').find('.wb_approval_transactions_list input[type="checkbox"]').each(function() {
        if ($(this).prop("checked") == false)
          isChecked = false;
      });
      console.log(isChecked);
      $("#checkAll").prop('checked', isChecked);
    }
  });
}
function showHideInformationAccount() {
  $(".wb_transaction_detail_information_oversea_remitter_content").hide();
  $(".wb_icon_up").hide();
  $(".wb_transaction_detail_information_oversea_remitter_select").click(
    function () {
      $(this).next().slideToggle(200);
      $(this).find(".wb_icon_up").toggle();
      $(this).find(".wb_icon_dow").toggle();
    }
  );
}

function showHideTransactionAccount() {
  $(".wb_approval_transaction_content_account").hide();
  $(".wb_icon_up").hide();
  $(".wb_approval_transaction_title").click(function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass("active_color");
    $(this).find(".wb_icon_up").toggle();
    $(this).find(".wb_icon_dow").toggle();
  });
}

function optionTransaction() {
  $(".dropdown > .caption").off("click").on("click", function () {
      $(this).parent().toggleClass("open");
    });

  $(".dropdown > .list > .item").off("click").on("click", function () {
      $(".dropdown > .list > .item").removeClass("selected");
      $(this)                      
        .addClass("selected")
        .parent()
        .parent()
        .removeClass("open")
        .children(".caption")
        .html($(this).html());

      if ($(this).data("item") == "data1") {
        showRealtimeSchedule();
        hideBatchSalaryTransfer();
        selectAll();
      } else if ($(this).data("item") == "data2") {
        hideRealtimeSchedule();
        showBatchSalaryTransfer();
        resetSelectAll();
       
      } else {
        hideRealtimeSchedule();
        hideBatchSalaryTransfer();
        resetSelectAll();
      }
    });
}

function onlyOnChecked(){
  $(document).off().on('click', 'input:checkbox', function() {    
    $('input:checkbox').not(this).prop('checked', false);    
});
}

function hideRealtimeSchedule() {
  $(".realtime_schedule").css("display", "none");
}

function showRealtimeSchedule() {
  $(".realtime_schedule").css("display", "block");
}

function hideBatchSalaryTransfer() {
  $(".batch_salary_transfer").css("display", "none");
}

function showBatchSalaryTransfer() {
  $(".batch_salary_transfer").css("display", "block");
}

function selectAll() {
  $("#checkAll").off("click").click(function () {
      $(".realtime_schedule .wb_approval_select_all input:checkbox").prop("checked",this.checked);
    });
}



function resetSelectAll() {
  $(".realtime_schedule .wb_approval_select_all input:checkbox").prop("checked",false);
}

function showHideContentMain() {
  $(".wb_icon_show").css("display", "block");
  $(".wb_sub_content").css("display", "none");
  $(".wb_icon_hide").css("display", "none");
  $(".wb_main_content").css("height", "auto");
  $(".wb_information_list.wb_main_content").css("border", "none");

  $(".wb_icon_show").off("click").click(function () {
      $(".wb_main_content").css("height", "auto");
      $(".wb_main_content").addClass("active");
      $(".wb_icon_show").css("display", "none");
      $(".wb_sub_content").css("display", "block");
      $(".wb_icon_hide").css("display", "block");
      
    });

  $(".wb_icon_hide").off("click").click(function () {
      $(".wb_main_content").css("height", "auto");
      $(".wb_main_content").removeClass("active");
      $(".wb_icon_show").css("display", "block");
      $(".wb_sub_content").css("display", "none");
      $(".wb_icon_hide").css("display", "none");
    
    });
}

function showHideContentMainBatch02() {
  $(".wb_approval_batch_02 .wb_icon_show").css("display", "block");
  $(".wb_approval_batch_02 .wb_sub_content").css("display", "none");
  $(".wb_approval_batch_02 .wb_icon_hide").css("display", "none");
  $(".wb_approval_batch_02 .wb_main_content").css("height", "auto");
  $(".wb_approval_batch_02 .wb_information_list.wb_main_content").css(
    "border",
    "none"
  );

  $(".wb_approval_batch_02 .wb_icon_show").off("click").click(function () {
      $(".wb_approval_batch_02 .wb_main_content").css("height", "auto");
      $(".wb_approval_batch_02 .wb_main_content").addClass("active");
      $(".wb_approval_batch_02 .wb_icon_show").css("display", "none");
      $(".wb_approval_batch_02 .wb_sub_content").css("display", "block");
      $(".wb_approval_batch_02 .wb_icon_hide").css("display", "block");
      $(".wb_approval_batch_02 .wb_information_list.wb_main_content").css(
        "border-bottom",
        "0.8px solid #E0E0E0"
      );
    });

  $(".wb_approval_batch_02 .wb_icon_hide").off("click").click(function () {
      $(".wb_approval_batch_02 .wb_main_content").css("height", "auto");
      $(".wb_approval_batch_02 .wb_main_content").removeClass("active");
      $(".wb_approval_batch_02 .wb_icon_show").css("display", "block");
      $(".wb_approval_batch_02 .wb_sub_content").css("display", "none");
      $(".wb_approval_batch_02 .wb_icon_hide").css("display", "none");
      $(".wb_approval_batch_02 .wb_information_list.wb_main_content").css(
        "border",
        "none"
      );
    });
}

function showHideContentMainBatch03() {

  $(".wb_approval_batch_03 .wb_information_list.wb_main_content").css("border","none");

  $(".wb_approval_batch_03 .wb_icon_show").off("click").click(function () {
      $(this).parent().css("height", "auto");
      $(this).parent().addClass("active");
      $(this).addClass("active");
      $(this).next().addClass("active");
    });

  $(".wb_approval_batch_03 .wb_icon_hide").off("click").click(function () {
      $(this).parent().css("height", "auto");
      $(this).parent().removeClass("active");
    
    });
}
