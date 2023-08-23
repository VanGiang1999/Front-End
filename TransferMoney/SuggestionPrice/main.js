$(document).ready(function () {
  currency();
  autoFormatPriceVND();
  autoSuggestionPriceVND();
  setMaxNumberForInputVND();
  removeBoxUSD();
});


function currency() {
  $(".dropdown > .caption").on("click", function () {
    $(this).parent().toggleClass("open");
  });

  $(".dropdown > .list > .item").on("click", function () {
    $(".dropdown > .list > .item").removeClass("selected");
    $(this).addClass("selected").parent().parent().removeClass("open").children(".caption").html($(this).html());
    
    if ($(this).data("item") == "VND") {
      autoFormatPriceVND();
      autoSuggestionPriceVND();
      resetValueInput();
      hideElementValueSuggestion();
      resetValueInput2();
      removeBoxUSD();
      $('.currency-input.currency-none').css('display','block');
      console.log("a1");

    } else if ($(this).data("item") == "USD") {
      valueUSD();
      resetValueInput();
      hideElementValueSuggestion();
      focusInputUSD();
      setMaxNumberForInputUSD();
      setMaxNumberForInputUSD2();
      removeBoxVNDAndKRW();
      console.log("a2")
    } else {
      resetValueInput2();
      autoFormatPriceVND();
      autoSuggestionPriceVND();
      resetValueInput();
      hideElementValueSuggestion();
      removeBoxUSD();
      console.log("a3") 
    }
    
  });

  $(document).on("keyup", function (evt) {
    if ((evt.keyCode || evt.which) === 27) {
      $(".dropdown").removeClass("open");
    }
  });

  $(document).on("click", function (evt) {
    if ($(evt.target).closest(".dropdown > .caption").length === 0) {
      $(".dropdown").removeClass("open");
    }
  });
}


function removeBoxUSD(){
  $('.currency-box-usd').css('display','none');
  $('.currency-input.currency-none').css('display','block');
  $(".currency-reset-value").attr('placeholder','Enter transfer amount');
  $(".currency-reset-value").css('border-bottom','none');
  $(".currency-input-zero").css("display", "none");
  $(".currency-dot").css("display", "none");
}


function removeBoxVNDAndKRW(){
  $('.currency-box-usd').css('display','grid');
  $('.currency-input.currency-none').css('display','none');
}


function focusInputUSD(){
  $(".currency-reset-value").off("focus").one("focus", function () {
    $(this).attr('placeholder','');
    $(this).css('border-bottom','1px solid');
    $(".currency-input-zero").css('border-bottom','none');
    $(".currency-input-zero").css("display", "block");
    $(".currency-dot").css("display", "block");
  })
}


 
function valueUSD(){
  $(".currency-input-zero").off("focusout").on("focusout", function () {
    let value = $(this).val();
    if(value === ""){
      var ResultValue = $(this).val("00");
    }
  });

  $('input[type="text"]').on('keydown, keyup', function () {
     var inputValue = $('.currency-value-usd').val();
     var inputValues = $('.currency-input-zero').val();
     console.log(inputValue + "." + inputValues)
  });
}


function autoFormatPriceVND() {
    var $form = $(".currency-title");
    var $input = $form.find(".currency-input");
    $input.off("focusout").off("focus").off("input").off("keyup").on("input", function(e){
    	console.log("format for vnd")
      if (this.value.length == 0 && event.which == 48 ){
        return false;
      }else{
        var selection = window.getSelection().toString();
        if ( selection !== '' ) {
            return;
        }  
        if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
            return;
        }
        var $this = $( this );
        var input = $this.val();
        var input = input.replace(/[\D\s\._\-]+/g, "");
        input = input ? parseInt( input, 10 ) : 0;
        $this.val( function() {
            return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );
        });
        
      }
  } );

}

function autoSuggestionPriceVND() {

  $("#inputPrice").on("input", function () {
      let value = $("#inputPrice").val();
    value = value.replace(/,/g , '');
   
    if(value > 0){
      const results = formatCurrencyVND(value * 100);
      const results1 = formatCurrencyVND(value * 1000);
      const results2 = formatCurrencyVND(value * 10000);
      const results3 = formatCurrencyVND(value * 100000);
      const dataResults = (results +";" + results1 +";" + results2 +";" + results3).split(";");     
      
      $(".suggestionsPrice").html("");
     
      for (let i = 0; i < dataResults.length; i++) {
        $(".suggestionsPrice").append(
          "<div class='suggestionsInput'>" + dataResults[i] + "</div>"
        );
      }

      if (dataResults.length != 0) {
        $(" .suggestionsInput").on("click", function () {
          $("#inputPrice").val($(this).text());
          $("#inputPrice").trigger("input");
          hideElementValueSuggestion();
        });
      }
    } else {
      $(".suggestionsInput").hide();
    }
  });
}

var formatCurrencyVND = function (num) {
  var str = num.toString().replace("$", ""),
    parts = false,
    output = [],
    i = 1,
    formatted = null;
  if (str.indexOf(".") > 0) {
    parts = str.split(".");
    str = parts[0];
  }
  str = str.split("").reverse();
  for (var j = 0, len = str.length; j < len; j++) {
    if (str[j] != ",") {
      output.push(str[j]);
      if (i % 3 == 0 && j < len - 1) {
        output.push(",");
      }
      i++;
    }
  }
  formatted = output.reverse().join("");
  return formatted + (parts ? "." + parts[1].substr(0, 2) : "");
};


function resetValueInput(){
  $(".currency-reset-value").val("");
}

function resetValueInput2(){
  $(".currency-reset-value2").val("00");
}

function hideElementValueSuggestion(){
  $(".suggestionsInput").hide();
}


function setMaxNumberForInputUSD(){
  $('.currency-input-zero').keyup(function () {
    $this = $(this);
    var value = $this.val();
    var maxInput = Number($this.attr('data-maxInput'));
    
    if (value.length > maxInput) {
      $this.val(value.substr(0, maxInput));
    }
  });
}

function setMaxNumberForInputVND(){
  $('.currency-input').keyup(function () {
    $this = $(this);
    var value = $this.val();
    var maxInput = Number($this.attr('data-maxInput'));
    
    if (value.length > maxInput) {
      $this.val(value.substr(0, maxInput));
    }
  });
}

function setMaxNumberForInputUSD2(){
  $('.currency-value-usd').keyup(function () {
    $this = $(this);
    var value = $this.val();
    var maxInput = Number($this.attr('data-maxInput'));
    
    if (value.length > maxInput) {
      $this.val(value.substr(0, maxInput));
    }
  });
}