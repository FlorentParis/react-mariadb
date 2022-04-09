<?php

include "connexion_db.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: content-type, authorization');


$token = str_replace('Basic ', '', getallheaders()['authorization']);

$test = "";

if($_POST["type"] == "login") {
    $sql_select = "SELECT * FROM users";
    $test = mysqli_query($conn, $sql_select);
}


/* Hash PW */
if($_POST["type"] == "subscription") {
    $pw = substr(base64_decode($token), strpos(base64_decode($token), ':') + 1);
    $email = substr(base64_decode($token), 0, strrpos(base64_decode($token), ':'));
    $sql_insert = "INSERT INTO users(token, email, password) VALUES('".$token."','".$email."','".$pw."')";
    mysqli_query($conn,$sql_insert);
    setcookie('token', $token);
}

echo json_encode([
    'message' => $_POST,
    'test' => $test
]);