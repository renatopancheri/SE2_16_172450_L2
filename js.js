var display=false;

function showhide(){
	if(display){
		document.getElementById("item").className="nascosto";
		document.getElementById("quantity").className="nascosto";
		document.getElementById("update").className="nascosto";

	}
	else{
		document.getElementById("item").className="";
		document.getElementById("quantity").className="";
		document.getElementById("update").className="";
	}
	display=!display;

}
