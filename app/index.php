<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: content-type, authorization');

$token = str_replace('Basic ', '', getallheaders()['authorization']);

echo json_encode([
    'message' => $_POST,
    'token' => $token,
    'username' => $_SERVER['PHP_AUTH_USER'],
    'password' => $_SERVER['PHP_AUTH_PW']
]);