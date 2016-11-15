var items=[];
var quantity=[];
var display=false;//indica lo stato di visualizzazione per le label items e il pulsante add
/*
	visualizza / nasconde le label per inserire item , quantity e il pulsante add

*/
function showhide(){
	if(display){//se è visualizzat nascondo
		document.getElementById("item").className="nascosto";
		document.getElementById("quantity").className="nascosto";
		document.getElementById("update").className="nascosto";

	}
	else{//se è nascosto rendo visibile
		document.getElementById("item").className="";
		document.getElementById("quantity").className="";
		document.getElementById("update").className="";
	}
	display=!display;//cambio il valore dello stato di visualizzazione
}
/*
	aggiorna la quantità di un item o se l'item non è presente, lo aggiunge



*/
function additem(){
	var found=false;
	var item=document.getElementById("item").value;
	var q=parseInt(document.getElementById("quantity").value);
	if(!isNaN(q)){//controllo che la quantità sia un numero
		for(var i=0;i<items.length && !found;i++){
			if(items[i]==item){//ho trovato l'item nella tabella, aggiorno la quantità
				found=true;
				quantity[i]+=parseInt(q);
				document.getElementById("tabella").rows[1].cells[i].innerHTML=quantity[i];
			}
		}
		if(!found){// non ho trovato l'item nella tabella, lo aggiungo
			items.push(item);
			quantity.push(q);
			document.getElementById("tabella").rows[0].insertCell(-1).innerHTML=item;
			document.getElementById("tabella").rows[1].insertCell(-1).innerHTML=q;
		}
	}
}
