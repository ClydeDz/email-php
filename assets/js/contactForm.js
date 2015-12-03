function checkFullName(){
	var fullName=document.getElementById('inputName').value;
	if(fullName!=""&&/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(fullName)==true){
		// valid name
		return true;
	}
	else{

				// invalid name
		// to-do: display error messages for null and incorrect full name
		return false;
	}
}
function checkEmail(){
	var email=document.getElementById('inputEmail').value;
	if(email!=""&&/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email)==true){
		//valid email
		return true;
	}
	else{

				// invalid email
		// to-do: display error message for null and incorrect email
		return false;
	}
}
function checkMessage(){
	var message=document.getElementById('inputMessage').value;
	if(message!=""&&/^\d+$/.test(message)==false){
		// valid message
		return true;
	}
	else{
		// invalid message
		// to-do: display error message
		return false;
	}
}
function checkContactForm(){
	if(checkFullName()==true && checkEmail()==true && checkMessage()==true){
		alert("success");
		return true;
		//document.getElementById("contactForm").submit();
	}
	else
	{
		alert("fail"+checkFullName()+checkEmail()+checkMessage());
		return false;
	}
}