function common(pageInfo){
loadHeader(pageInfo);
loadMobileMenu(pageInfo);
loadFooter();
}
var pageInfo="";
function loadHome(pageInfo){
common(pageInfo);
loadHomeDescription();
loadContactDetails();
}

function loadProductsAndServices(pageInfo){
common(pageInfo);
//loadServicesDescription();
}
function loadAboutUs(pageInfo){
	common(pageInfo);
}
function loadContact(pageInfo){
	common(pageInfo);
}
//common
function loadHeader(pageInfo){
	if(pageInfo=='home')
		var headerSection_new=headerSection.replace("Home","<u>Home</u>");
	else if(pageInfo=='about')
		var headerSection_new=headerSection.replace("About Us","<u>About Us</u>");
	else if(pageInfo=='quote')
		var headerSection_new=headerSection.replace("Quote","<u>Quote</u>");
	else if(pageInfo=='services')
		var headerSection_new=headerSection.replace("Products and Services","<u>Products and Services</u>");
	else
		var headerSection_new=headerSection.replace("Contact Us","<u>Contact Us</u>");
	document.getElementById('headerSection').innerHTML=""+headerSection_new;
}
function loadMobileMenu(pageInfo){
	if(pageInfo=='home')
		var mobileMenu_new=mobileMenu.replace("Home","<u>Home</u>");
	else if(pageInfo=='about')
		var mobileMenu_new=mobileMenu.replace("About Us","<u>About Us</u>");
	else if(pageInfo=='quote')
		var mobileMenu_new=mobileMenu.replace("Quote","<u>Quote</u>");
	else if(pageInfo=='services')
		var mobileMenu_new=mobileMenu.replace("Products and Services","<u>Products and Services</u>");
	else
		var mobileMenu_new=mobileMenu.replace("Contact Us","<u>Contact Us</u>");
	document.getElementById('mobileMenu').innerHTML=""+mobileMenu_new;
}
function loadFooter(){
	document.getElementById('footer').innerHTML=""+footer;
}
//home
function loadHomeDescription(){
	document.getElementById('homeDescription').innerHTML=""+homeDescription;
}
function loadContactDetails(){
	document.getElementById('person').innerHTML=""+person;
	document.getElementById('address').innerHTML=""+address;
	document.getElementById('contact').innerHTML=""+contact;
}
//services
function loadServicesDescription(){
	document.getElementById('servicesDescription').innerHTML=""+servicesDescription;
}