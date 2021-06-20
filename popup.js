$(document).ready(function(){
	function showWindow(){
		$('#my-popup').show();
	}
	
	function hideWindow(){
		$('#my-popup').hide();
	}
	
	setTimeout(showWindow, 1);
	
	$("#close-btn").click(function(){
		hideWindow();
		var dogispresent = document.getElementById("dog").value;
		var reptileispresent = document.getElementById("reptile").value;
		if(dogispresent==="Dog");
			window.location.replace("./explore-dogs.html");
		
		if(reptileispresent ==="Reptile");
			window.location.replace("./explore-all.html");
		
	})
});