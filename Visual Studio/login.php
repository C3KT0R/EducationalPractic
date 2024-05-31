<? 
$bd = new mysqli('localhost', 'j911627u_base', 'Tolik738', 'j911627u_base'); 
 
$query = ("SELECT id FROM user 
WHERE `login`='${_POST["login"]}' AND `password`=MD5('${_POST["password"]}')"); 
 
$result = $bd ->query($query); 
 
?>