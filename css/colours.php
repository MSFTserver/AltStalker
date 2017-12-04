<?php
header('Content-type: text/css');
require('../php/config.php');
?>
body {
	background:<?php echo $conf['colour_background']; ?>;
}


#comingsoon_block,.modal-content {
	background-color: <?php echo $conf['colour_block_background']; ?>;
}

.social-icons ul li a, .content h1,.subscriberls .table a, {
	color: <?php echo $conf['colour_icons'] ?>;
}


.btn {
	background-color: <?php echo $conf['colour_submit'] ?>;
	border-color: <?php echo $conf['colour_font'] ?>;
}


.workprogress .progress {
	background-color: <?php echo $conf['colour_progressbar_background']; ?>;
}


.workprogress .progress-bar {
	background-color: <?php echo $conf['colour_progressbar']; ?>;
	color: <?php echo $conf['colour_progressbar_font']; ?>;
}


#subscribestatus .alert,div #comingsoon_block p,.units,.pagination li a,.content h1, .modal h2,.modal h4,.service i, #contact,.service h4,.service i:hover,.subscriberls .empty, .modal-body, .Donations,div #comingsoon_block p, .units {
	color : <?php echo $conf['colour_font']; ?>;
}


.pagination .active span:hover {
	background-color: <?php echo $conf['colour_hover']; ?>;
	color: <?php echo $conf['colour_font']; ?>;
	border-color: <?php echo $conf['colour_font']; ?>;
}

.admin, .subform h4, .textarea, .logout a, .logout p , .footer, a{
	color: <?php echo $conf['colour_icons']; ?>;
  background: <?php echo $conf['colour_background']; ?>;
}

i:hover, a:hover {
	color: <?php echo $conf['colour_hover']; ?>;
}

.btn:hover,.btn:focus,.btn:active,.btn.active,.pagination .active span {
	background-color: <?php echo $conf['colour_hover']; ?>;
	border-color: <?php echo $conf['colour_font']; ?>;
}
