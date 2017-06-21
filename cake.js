//cake.js
// window.onload = function () {
// 	loadValues();
// }

// function saveValues(x,y) {
// 	var w = x.toString();
// 	var z = y.toString();
// 	localStorage.w = document.getElementById(z).value;
// }

// function loadValues(x,y){
// 	document.getElementById("").value = localStorage.x;
// }

// function removeValues(x,y){
// 	localStorage.x = "";
// }

// ############### Calculator ###############
	function Calculate(){
		// document.getElementById('calcoutput').value = eval(document.getElementById('calcinput').value);
		document.getElementById('out').innerHTML = document.getElementById('calcinput').value + " = " + eval(document.getElementById('calcinput').value);
		document.getElementById('calcinput').value = "";
	}
	function ClearCalc(){
		document.getElementById('calcinput').value = "";
		// document.getElementById('calcoutput').value = "";
		document.getElementById('out').innerHTML = "Enter a sum:";
	}


// ############### Naughts and Crosses ###############
	var gameturn = "X";
	function ClearGame() {
		document.getElementById('aa').value = "";
		document.getElementById('aa').removeAttribute('disabled');
		document.getElementById('ab').value = "";
		document.getElementById('ab').removeAttribute('disabled');
		document.getElementById('ac').value = "";
		document.getElementById('ac').removeAttribute('disabled');
		document.getElementById('ba').value = "";
		document.getElementById('ba').removeAttribute('disabled');
		document.getElementById('bb').value = "";
		document.getElementById('bb').removeAttribute('disabled');
		document.getElementById('bc').value = "";
		document.getElementById('bc').removeAttribute('disabled');
		document.getElementById('ca').value = "";
		document.getElementById('ca').removeAttribute('disabled');
		document.getElementById('cb').value = "";
		document.getElementById('cb').removeAttribute('disabled');
		document.getElementById('cc').value = "";
		document.getElementById('cc').removeAttribute('disabled');
		gameturn = "X";
	}
	function Change(pos) {
		if (document.getElementById(pos).value === ""){
			if (gameturn === "X"){
		    	document.getElementById(pos).value = "X";
		    	gameturn = "O";
			} else {
				document.getElementById(pos).value = "O";
				gameturn = "X";
			}
		    document.getElementById(pos).setAttribute('disabled', true);
		}
	}


// ############### to do list ###############
	var numitems = 0;
	//old 
		function addItem(){
			numitems+=1;
			//print the input 
			document.getElementById('listspace').innerHTML += "<li id=\"item" + numitems + "\">" + document.getElementById('addli').value + " " + 
																"<input type=\"button\" value=\"Del\" onClick=\"removeItem('" + numitems + "')\"></li>";
			
			document.getElementById('addli').value = "";
		}

		function removeItem(num){
			//remove <li> element with given id
			var itemid = "item" + num;
			document.getElementById(itemid).outerHTML = "";
			numitems-=1;
		}

	function addListItem(){
		nitems+=1;
		var x = nitems*10;
		var ID = x.toString();
		document.getElementById('listspace').innerHTML += "<li id=\"" + ID + "\">" + document.getElementById('addli').value + " " + 
															"<input type=\"button\" value=\"Del\" onClick=\"removeListItem('" + ID + "')\"></li>";
		document.getElementById('addli').value = "";


	}

	function removeListItem(itemid){
		document.getElementById(itemid).outerHTML = "";
		numitems-=1;
	}

// ############### mines ###############
	// function Change(pos) {
	// 	if (document.getElementById(pos).value === ""){
	//     	document.getElementById(pos).value = "X";
	// 	} else if (document.getElementById(pos).value === "X"){
	// 		document.getElementById(pos).value = "O";
	// 	} else {
	// 		document.getElementById(pos).value = "";
	// 	}
	// }
	//
	//
	// 	if (document.cookie.length != 0){
	// 		//set elements manually
	// 		var nameValueArray = document.cookie.split("=");
	// 		//can do in loop to go through entire string unless all the other expire shite is in the way
	// 		document.getElementById(nameValueArray[0]).internalHTML = nameValueArray[1];
	// 	}
	// }
	//set cookie
	// document.cookie = "key=" + value + ";expires=date;";