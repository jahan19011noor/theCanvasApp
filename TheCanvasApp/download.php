<?php
	
	$file = $_GET['file'];
	
	header('Content-type: image/png');
	
	header('Content-disposition: attachment; file= canvasoutput.png');
	
	readfile($file);

?>