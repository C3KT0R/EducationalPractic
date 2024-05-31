<?php
$regbase = new myslqli ('localhost', 'j911627u_base', 'Tolik738', 'j911627u_base');
$query = ("INSERT INTO user (`login`, `password`, `phone_number`)  VALUES ('${_POST["login"]}', '${_POST["password"]}', MD5('${_POST["phone_number"]}'))"); 
?>