let rotateCube = function() {

	$(window).mousedown(function(){
		
	  $(window).mousemove(function(e){
		  
		  $('.cube').css('transform', 'rotateX(' + - e.pageY + 'deg)' + 'rotateY(' + e.pageX + 'deg)');
		  
	  });
	  
    $(window).mouseup(function(){
	    
	    $(this).off( "mousemove" );
	    
    });
    
  }); 	
  
};


$(document).ready(rotateCube);