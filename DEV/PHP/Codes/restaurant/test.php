<?php
session_start();

//echo session_id();
/*
$_SESSION['login']='mail@mail.fr';
$_SESSION['is_admin']=true;
*/
var_dump($_SESSION);

echo '<script>alert(document.cookie);</script>';