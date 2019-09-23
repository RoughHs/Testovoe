<?php
	
	$msg="";
	$mails = array('mikea_av@mail.ru','rough14@mail.ru','mikeroughh@gmail.com');


	if 
		(isset($_POST['email']) && in_array($_POST['email'], $mails)) 
	  {
	  	$msg="Ошибка";
 		$file = 'logs/logs.txt';
		$text = 'Такой пользователь уже существует';
		$text .= '||';
		$fOpen = fopen($file,'a'); 
		fwrite($fOpen, $text);
		fclose($fOpen); 
	  } 	
		
	else 

	  {
	  	$msg="Успешно";
		$file = 'logs/logs.txt';
		$text = 'Запись произведена';
		$text .= '||';
		$fOpen = fopen($file,'a'); 
		fwrite($fOpen, $text);
		fclose($fOpen);    
	  }

	  echo json_encode(array('result'=>$msg));
    
	

?>