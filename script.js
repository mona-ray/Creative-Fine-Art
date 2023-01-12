
// Sticky Navigation Bar

$(document).ready(function() {
  window .addEventListener("scroll",function(){
    var  header = this.document.querySelector(".navbar");
    header.classList.toggle("sticky",window.scrollY > 0);
  })
});


// Filter Gallery

$(document).ready(function(){
   
  $('.gallery li').click(function(){
    
    $(this).addClass('active').siblings().removeClass('active');
  
    var filter = $(this).attr('data-filter')
   if(filter  == 'all')
   {
    $('.art-gallery').show(400);

   }else{
    $('.art-gallery').not('.'+filter).hide(200);
    $('.art-gallery').filter('.'+filter).show(400);
   } 
  
});

});
  
//Hemburgur menu bar

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-navbar')

burger.addEventListener('click', ()=>{
  rightnav.classList.toggle('v-class');
  navlist.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
})



   