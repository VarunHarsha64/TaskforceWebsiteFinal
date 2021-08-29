var morePics1 = document.getElementById("more1");
var btnText1 = document.getElementById("myBtn1");

//var morePics2 = document.getElementById("more2");
//var btnText2 = document.getElementById("myBtn2");

var morePics3 = document.getElementById("more3");
var btnText3 = document.getElementById("myBtn3");




function myFunction1() {


	//if(btnText2.innerHTML === "Close") {
	//	morePics2.style.display = "none";
	//	btnText2.innerHTML = "Deputy Managers";
	//}
	if(btnText3.innerHTML === "Close") { //use "else if" if the above if statement is uncommented
		morePics3.style.display = "none";
		btnText3.innerHTML = "Core 20-21";
	}
  if (morePics1.style.display === "none") {
	morePics1.style.display = "flex";
	btnText1.innerHTML = "Close";
    
  } else {
	morePics1.style.display = "none";
    btnText1.innerHTML = "Managers"; 
  }
};


// function myFunction2() {
//
// 	if(btnText1.innerHTML === "Close") {
// 		morePics1.style.display = "none";
// 		btnText1.innerHTML = "Managers";
// 	}
// 	else if(btnText3.innerHTML === "Close") {
// 		morePics3.style.display = "none";
// 		btnText3.innerHTML = "Core 20-21";
// 	}
//
// 	if (morePics2.style.display === "none") {
// 	btnText2.innerHTML = "Close";
// 	morePics2.style.display = "flex";
//
// 	} else {
// 	btnText2.innerHTML = "Deputy Managers";
// 	morePics2.style.display = "none";
// 	}
// };


function myFunction3() {


	if(btnText1.innerHTML === "Close") {
		morePics1.style.display = "none";
		btnText1.innerHTML = "Managers";
	}

	//uncomment if button 2 is active
	// else if(btnText2.innerHTML === "Close") {
	// 	morePics2.style.display = "none";
	// 	btnText2.innerHTML = "Deputy Managers";
	// }

	if (morePics3.style.display === "none") {
		morePics3.style.display = "flex";
		btnText3.innerHTML = "Close";

	} else {
		morePics3.style.display = "none";
		btnText3.innerHTML = "Core 20-21";
	}
};

