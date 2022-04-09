<?php

$servername = "db";
$username = "root";
$password = "password";
$db = "data";
$conn = new PDO('mysql:host='.$servername.';dbname='.$db, $username, $password);