
AOS.init();
$(document).ready(function(){

    // Select and loop the container element of the elements you want to equalise
    $('.container').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.desp', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.desp',this).height(highestBox);
                    
    }); 

});
$(".go_down").click(function() {
  $('html,body').animate({
    scrollTop: $(".stop_here").offset().top},
    'slow');
});