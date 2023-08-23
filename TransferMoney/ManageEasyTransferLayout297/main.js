$(document).ready(function () {
    hideButtonSuccess();
});


function hideButtonSuccess(){
    setTimeout(function(){
       $('.manage-easy-transfer-box-success').remove();
    }, 6000);
    
    $('.manage-easy-transfer-box-success').on('click', function() {
        $('.manage-easy-transfer-box-success').remove();
    });

}