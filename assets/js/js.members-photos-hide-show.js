var morePics1 = document.getElementById("more1");
var btnText1 = document.getElementById("myBtn1");
//var morePics2 = document.getElementById("more2");
//var btnText2 = document.getElementById("myBtn2");



function myFunction1() {

	//if(btnText2.innerHTML === "Close") {
	//	morePics2.style.display = "none";
	//	btnText2.innerHTML = "Deputy Managers";
	//}

  if (morePics1.style.display === "none") { 
	morePics1.style.display = "flex";
	btnText1.innerHTML = "Close";
    
  } else {
	morePics1.style.display = "none";
    btnText1.innerHTML = "Managers"; 
  }
};

//function myFunction2() {
//
//	if(btnText1.innerHTML === "Close") {
//		morePics1.style.display = "none";
//		btnText1.innerHTML = "Managers";
//	}
//	
//	if (morePics2.style.display === "none") {
//	btnText2.innerHTML = "Close"; 
//	morePics2.style.display = "flex";
//
//	} else {
//	btnText2.innerHTML = "Deputy Managers"; 
//	morePics2.style.display = "none";
//	}
//};