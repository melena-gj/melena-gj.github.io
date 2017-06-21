// window.onload = function () {
	// alert(document.cookie);
// }

function logIn(){
	setCookie('login');
}

function setCookie (fieldset) {
	if (fieldset === "login"){
		localStorage.UserOld = document.getElementById('UserOld').value;
		localStorage.PwdOld = document.getElementById('PwdOld').value;
		localStorage.EmailNew = "";
		localStorage.NameNew = "";
		localStorage.UserNew = "";
		localStorage.PwdNew = "";		
	} else if (fieldset === "signup"){
		localStorage.UserOld = "";
		localStorage.PwdOld = "";		
		localStorage.EmailNew = document.getElementById('EmailNew').value;
		localStorage.NameNew = document.getElementById('NameNew').value;
		localStorage.UserNew = document.getElementById('UserNew').value;
		localStorage.PwdNew = document.getElementById('PwdNew').value;	
	}
}

function getCookie() {
	// document.getElementById('UserOld').value = localStorage.UserOld;
	// document.getElementById('PwdOld').value = localStorage.PwdOld;
	// document.getElementById('EmailNew').value = localStorage.EmailNew;
	// document.getElementById('NameNew').value = localStorage.NameNew;
	// document.getElementById('UserNew').value = localStorage.UserNew;
	// document.getElementById('PwdNew').value = localStorage.PwdNew;

	// alert(window.localStorage.UserOld);
	// alert(window.localStorage.PwdOld);
	// alert(window.localStorage.EmailNew);
	// alert(window.localStorage.NameNew);
	// alert(window.localStorage.UserNew);
	// alert(window.localStorage.PwdNew);

}