var headerSection,mobileMenu,person, address, contact,homeDescription;
var servicesDescription;
var footerText,footerCMYK, footer;

homeDescription="Do you need to get yourself a business card? Or do you need to print and drop in flyers of your new business? Don't worry. At A1 Professional Designs we cater to all your print needs. Right from business cards to flyers, birthday invitation cards to specialised greeting cards, we do all of this (and more) at the best possible price. Get in touch now!";
person="Roshni Daruwala";
address="Address line1,</br>Pakuranga,</br>New Zealand";
contact="Contact #</br>Contact email";
var d=new Date();
var n = d.getFullYear(); 
footerText="Roshini Daruwala | 021 XCXCXC | roshini.daruwala@gmail.com</br>";
footerText+="Website crafted by <a href='http://goo.gl/8yXVaA' title='Clyde D\'Souza'>Clyde D\'Souza</a> | &copy; A1 Professional Designs, "+n+"";
footerCMYK="<div class='cyan'>&nbsp;</div><div class='magenta'>&nbsp;</div><div class='yellow'>&nbsp;</div><div class='key'>&nbsp;</div>";

footer="<div class='container footer'>";
footer+="";
footer+="<div class='row'>";
footer+="<div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>";
footer+="<div id='footer-notes'>"+footerText+"";
footer+="</div></div></div>";
footer+="<div id='footer-cmyk'>"+footerCMYK+"";
footer+="</div></div>";

headerSection="<div class='header-banner'><div class='col-lg-5 col-md-5'>";
headerSection+="<h1>A1 Professional Designs</h1></div>";
headerSection+="<div class='col-lg-7 col-md-7 text-right'>";
headerSection+="<div class='hidden-xs hidden-sm visible-md visible-lg col-md-12 col-lg-12 text-right desktop-menu'>";
headerSection+="<a href='index.php' class='smoothScroll'>Home</a>";
headerSection+="<a href='about.html' class='smoothScroll'>About Us</a>";
headerSection+="<a href='products-and-services.html' class='smoothScroll'>Products and Services</a>";
headerSection+="<a href='contact.html' class='smoothScroll'>Contact Us</a>";
headerSection+="</div></div></div>";
headerSection+="<div class='space'>";
headerSection+="<div class='container header-content'>";
headerSection+="<div class='row'>";
headerSection+="<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>";
headerSection+="<div><img src='assets/img/a1pd-logo.png' height='80' width='80' class='img img-responsive site-logo' /></div></br>	";		
headerSection+="</div>";
headerSection+="</div>";
headerSection+="</div><!-- /container -->	</div>";



// mobileMenu="<div class='hidden-md hidden-lg visible-sm visible-xs'>";style='display:none;'
// mobileMenu+="<div><span id='menuToggle'>";
// mobileMenu+="<span class='icon-reorder'></span>";
// mobileMenu+="</span></div>";
mobileMenu="<nav class='menu' id='theMenu'>";
mobileMenu+="<div class='menu-wrap'>";
mobileMenu+="<h1>A1 Professional Designs</h1></br></br>";
mobileMenu+="<a href='index.php' class='smoothScroll'>Home</a>	";
mobileMenu+="<a href='about.html' class='smoothScroll'>About</a>";
mobileMenu+="<a href='products-and-services.html' class='smoothScroll'>Products and Services</a>";
mobileMenu+="<a href='contact.html' class='smoothScroll'>Contact Us</a>";
mobileMenu+="</div>";				
mobileMenu+="</nav>";
mobileMenu+="";

servicesDescription=homeDescription;
servicesDescription+="</br><p><ol type='number'><li><a href='#businessCards' class='serviceLinks'>Business Cards</a></li>";
servicesDescription+="<li><a href='' class='serviceLinks'>Invitation Cards</a></li>";
servicesDescription+="<li><a href='' class='serviceLinks'>Letterheads</a></li></ol></p>";

var services = [
{ "cName" : "Business Cards" },
{ "cName" : "Invitation Cards" },
{ "cName" : "Letterheads" },
{ "cName" : "A5 A4 size Printing Copying" },
{ "cName" : "A3 size Printing Copying" },
{ "cName" : "Newsletters" },
{ "cName" : "Lamination" },
{ "cName" : "Binding" },
{ "cName" : "Flyers" },
{ "cName" : "Binding" },
{ "cName" : "Co-ordination of Bulk Mailouts" } ];
