var morePics1 = document.getElementById("more1");
var btnText1 = document.getElementById("myBtn1");
var morePics2 = document.getElementById("more2");
var btnText2 = document.getElementById("myBtn2");
//var morePics3 = document.getElementById("more3");
//var btnText3 = document.getElementById("myBtn3");
var btnText4 = document.getElementById("myBtn4");
var morePics4 = document.getElementById("more4");
var loadIcon = document.getElementById("img-loading")
var tout; // timeout variable for a timeout which calls a function that checks if all the images are loaded. If loaded:show all the images:play circle animation// 

function myFunction1() {
	if (tout !== undefined) //checking if a timeout exists. This check is present in all the funtions in this js//
		clearTimeout(tout)
	if (btnText2.innerHTML === "Close") {
		morePics2.style.display = "none";
		btnText2.innerHTML = "Deputy Managers";
	// } 
	} else if (btnText4.innerHTML === "Close") {
		morePics4.style.display = "none";
		btnText4.innerHTML = "Faculty Advisors";
	}

	if (morePics1.style.display === "none" && btnText1.innerHTML != "Close") {
		btnText1.innerHTML = "Close";
		let elemdiv = document.querySelector("#more1");
		let elems = elemdiv.querySelectorAll("img");
		let elemsCount = elems.length;
		(function loadCheck() {
			let loaded = isLazyLoaded(elems, elemsCount)
			if (!loaded) {
				loadIcon.style.display = "inline-block";
				tout = setTimeout(loadCheck, 1000)
			} else {
				morePics1.style.display = "flex";
				loadIcon.style.display = "none";
			}
		}());
	} else {
		morePics1.style.display = "none";
		btnText1.innerHTML = "Managers";
		loadIcon.style.display = "none";
		clearAllTimeout(tout);
	}
};
function myFunction2() {
	if (tout !== undefined)
		clearTimeout(tout)
	if (btnText1.innerHTML === "Close") {
		morePics1.style.display = "none";
		btnText1.innerHTML = "Managers";
	} else if (btnText4.innerHTML === "Close") {
		morePics4.style.display = "none";
		btnText4.innerHTML = "Faculty Advisors";
	}

	if (morePics2.style.display === "none" && btnText2.innerHTML != "Close") {
		btnText2.innerHTML = "Close";
		let elemdiv = document.querySelector("#more2");
		let elems = elemdiv.querySelectorAll("img");
		let elemsCount = elems.length;
		(function loadCheck() {
			let loaded = isLazyLoaded(elems, elemsCount)
			if (!loaded) {
				loadIcon.style.display = "inline-block";
				tout = setTimeout(loadCheck, 1000)
			} else {
				morePics2.style.display = "flex";
				loadIcon.style.display = "none";
			}
		}());
	} else {
		btnText2.innerHTML = "Deputy Managers";
		morePics2.style.display = "none";
		loadIcon.style.display = "none";
		clearAllTimeout(tout);
	}
};
// function myFunction3() {
// 	if (tout !== undefined)
// 		clearTimeout(tout)
// 	if (btnText1.innerHTML === "Close") {
// 		morePics1.style.display = "none";
// 		btnText1.innerHTML = "Managers";
// 	} else if (btnText2.innerHTML === "Close") {
// 		morePics2.style.display = "none";
// 		btnText2.innerHTML = "Deputy Managers";
// 	} else if (btnText4.innerHTML === "Close") {
// 		morePics4.style.display = "none";
// 		btnText4.innerHTML = "Faculty Advisors";
// 	}

// 	if (morePics3.style.display === "none" && btnText3.innerHTML != "Close") {
// 		btnText3.innerHTML = "Close";
// 		let elemdiv = document.querySelector("#more3");
// 		let elems = elemdiv.querySelectorAll("img");
// 		let elemsCount = elems.length;
// 		(function loadCheck() {
// 			let loaded = isLazyLoaded(elems, elemsCount)
// 			if (!loaded) {
// 				loadIcon.style.display = "inline-block";
// 				tout = setTimeout(loadCheck, 1000)
// 			} else {
// 				morePics3.style.display = "flex";
// 				loadIcon.style.display = "none";
// 			}
// 		}());
// 	} else {
// 		morePics3.style.display = "none";
// 		btnText3.innerHTML = "Core 20-21";
// 		loadIcon.style.display = "none";
// 		clearAllTimeout(tout);
// 	}
// };
function myFunction4() {
	if (tout !== undefined)
		clearTimeout(tout)
	if (btnText1.innerHTML === "Close") {
		morePics1.style.display = "none";
		btnText1.innerHTML = "Managers";
	} else if (btnText2.innerHTML === "Close") {
		morePics2.style.display = "none";
		btnText2.innerHTML = "Deputy Managers";
	} 
	
	if (morePics4.style.display === "none" && btnText4.innerHTML != "Close") {
		btnText4.innerHTML = "Close";
		let elemdiv = document.querySelector("#more4");
		let elems = elemdiv.querySelectorAll("img");
		let elemsCount = elems.length;
		(function loadCheck() {
			let loaded = isLazyLoaded(elems, elemsCount)
			if (!loaded) {
				loadIcon.style.display = "inline-block";
				tout = setTimeout(loadCheck, 1000)
			} else {
				morePics4.style.display = "flex";
				loadIcon.style.display = "none";
			}
		}());
	} else {
		morePics4.style.display = "none";
		btnText4.innerHTML = "Faculty Advisors";
		loadIcon.style.display = "none";
		clearAllTimeout(tout);
	}
};
function isLazyLoaded(elems, elemsCount) // to keep the images that are out of the viewport to keep loading in the background
{
	var loadedCount = 0;
	elems.forEach(function (img) {
		if (img.complete && img.naturalHeight !== 0) {
			loadedCount++;
		}
	})
	if (loadedCount == elemsCount) {
		return true;
	} else {
		return false;
	}
	console.log(elemsCount, loadedCount)
}