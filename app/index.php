<?php

header('Access-Control-Allow-Origin: http://localhost:3000');

echo json_encode([
    'message' => $_POST
]);