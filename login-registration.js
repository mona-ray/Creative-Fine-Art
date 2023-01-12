$(document).ready(function(){
    $('.signin-content').hide();
    $('.register-li').addClass("active");

    $('.login-li').click(function(){
        $(this).addClass("active");
        $('.register-li').removeClass("active");
        $('.signin-content').show();
        $('.signup-content').hide();
    })
    $('.register-li').click(function(){
        $(this).addClass("active");
        $('.login-li').removeClass("active");
        $('.signup-content').show();
        $('.signin-content').hide();
    })
  });
  
  