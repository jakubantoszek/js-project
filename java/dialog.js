$(document).ready(function(){
	var n=0;
	var k=0;
	
	var eventhandler = function(e) {
		e.preventDefault();      
	}
	
   $('#wyslij').click(function(e) {
       
	    if ($('input[name="quest1"]:checked').length == 0) {
			$( "#dialog1" ).dialog();
			$("form").bind('submit', eventhandler);
			n++;
			k=1;
		}
	   
		if ($('input[name="quest2"]:checked').length == 0) {
			$( "#dialog2" ).dialog();
			$("form").bind('submit', eventhandler);
			n++;
			k=1;
		}
		
		else if (($('input[name="quest2"]:checked').val() < 5)&&($('input[name="other"]').val() != ""))
		{
			$( "#dialog" ).dialog();
			$("form").bind('submit', eventhandler);
			n++;
			k=1;
		}
			
		if ($('input[name="quest3"]:checked').length == 0) {
			$( "#dialog3" ).dialog();
			$("form").bind('submit', eventhandler);
			n++;
			k=1;
		}
		
		if ($('input[name="ocena"]').val() < 1) {
			$( "#dialog6" ).dialog();
			$("form").bind('submit', eventhandler);
			n++;
			k=1;
		}
		
		if((n==0)&&(k==1))
		{
			$("form").unbind('submit', eventhandler);
		}
		
		n=0;
		
   });

});