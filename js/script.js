$(document).ready(function($){
  $('.card-option').on("click", function(e){
    e.preventDefault();
    $(this).addClass('flipOutY').hide().siblings('.card-option').addClass('flipOutY').removeClass('flipInY').hide();
    $(this).next('.card-result').addClass('flipInY').removeClass('flipOutY').show();
    $(window).resize();
  });
  $('.card-close').on("click", function(e){
    e.preventDefault();
    $(this).parent('.card-result').addClass('flipOutY').removeClass('flipInY').hide();
    $(this).parent().siblings('.card-option').addClass('flipInY').removeClass('flipOutY').show();
    $(window).resize();
  });
  $('.send').on("click", function(){
    var str=$('.phone').val();
    if(str==""){
      alert('請輸入手機號碼');
    }else{
      $('.serial-no').slideDown(500,function(){
        $(window).resize();
      });
    }
  });

});

