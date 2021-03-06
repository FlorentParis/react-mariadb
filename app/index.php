<?php
require 'vendor/autoload.php';

use App\config\PDOFactory;
use App\entity\User;
use App\entity\Post;
use App\models\UserManager;
use App\models\PostManager;

$conn = (new PDOFactory())->getConnection();

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: content-type, authorization');

$token = str_replace('Basic ', '', getallheaders()['authorization']);

if($_POST["type"] == "login") {
    $sql_select = "SELECT token FROM users";
    $test = $conn->query($sql_select)->fetchAll();
    foreach($test as $user) {
        if(in_array($token, $user)){
            setcookie('token', $token);
        }
    }
    $_POST["type"] = null;
}

/* Hash PW */
if($_POST["type"] == "subscription") {
    $user = new User();
    $user->setToken($token);
    $user->setEmail($_POST["email"]);
    $user->setPassword($_POST["password"]);
    $register = new UserManager($conn);
    $register->addUser($user);
    setcookie('token', $token);
    $_POST["type"] = null;
}

if($_POST["type"] == "deco"){
    unset($_COOKIE["token"]);
    setcookie("token", '', time() - 3600);
}

/* A lancer si nouveau post */
/* if($_POST["newPost"]){
   $test = json_decode($_POST["newPost"]);
   $post = new Post();
   $post->setTitle($test["title"]);
   $post->setContent($test["content"]);
   $post->setToken($token);
   $sendPost = new PostManager($conn);
   $sendPost->createdPost($post);
} */

echo json_encode([
    'message' => $_POST,
    'cookie' => $_COOKIE["token"]
]);