<!-------------Website crafted by Clyde D'Souza  ----------------->
<?php
$ip = getenv('SENDGRID-USERNAME');
$api = getenv('SENDGRID-APIKEY');
$sendgrid = new sendgrid($ip,$api);
echo $ip;
$email    = new sendgrid\email();
 
$email->addto("clyd94@gmail.com")
      ->setfrom("clyd94@gmail.com")
      ->setsubject("sending with sendgrid is fun")
      ->sethtml("and easy to do anywhere, even with php");
 
$sendgrid->send($email);
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
	<!----responsive----->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!---meta---->
<meta name="Keywords" content="A1 Professional Designs"/> 
<meta name="author" content="A1 Professional Designs">
<meta name="description" content="For the best designs in print and digital media, contact Roshini Daruwala at 09 534 9786">
<meta itemprop="image" content=assets/img/favicon.png"" />
<meta name="og_site_name" property="og:site_name" content="A1 Professional Designs"/> 
<meta name="og_url" property="og:url" content="http://www.a1pd.co.nz"/>
	<!----favicon------->
<link rel="shortcut icon" href="assets/img/favicon.png">
<title>Thank you | A1 Professional Designs</title>
	<!-- CSS -->
<link href="assets/css/bootstrap.css" rel="stylesheet">	
<link href="assets/css/main.css" rel="stylesheet">
<link href="assets/css/docs-main.css" rel="stylesheet">
<link rel="stylesheet" href="assets/css/font-awesome.min.css">   
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
<script src="assets/js/html5shiv.js"></script>
<script src="assets/js/respond.min.js"></script>
    <![endif]-->
</head>
<body data-spy="scroll" data-offset="0" data-target="#theMenu" onLoad="loadProductsAndServices('contact')">		
<!-- ========== MENU SECTION ========== -->
<div class='hidden-md hidden-lg visible-sm visible-xs'>
<div><span id='menuToggle'>
<span class='icon-reorder'></span>
</span></div></div>
<div id="mobileMenu"></div>
<!-- ========== MENU SECTION ========== -->
<!-- ========== HEADER SECTION ========== -->
<section id="home" name="home"></section>
<div id="headerSection"></div>
</br>
<!-- ========== TEXT SECTION ========== -->
<div class="container">
	<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<h2>Thank you</h2>
	</div>
	</div>
	<br/>
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<p>Thank you <?php echo $_POST["fullName"]; ?> for your email. We will get in touch with you shortly.</p>
		</div>
	</div>
	<br/>
</div>

<!--======= Footer ================-->
<div id="footer"></div>
<!--======= Bootstrap core JavaScript ================-->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/modernizr.custom.js"></script>
<script src="assets/js/classie.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/smoothscroll.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/contents.js"></script>
<script src="assets/js/contactForm.js"></script>
<script src="assets/js/loadFunctions.js"></script>

</body>
</html>