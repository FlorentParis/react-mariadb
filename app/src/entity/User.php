<?php
namespace App\entity;

class User {
    private int $id;
    private string $token;
    private string $email;
    private string $password;

    public function getId()
    {
        return $this->id;
    }

    public function getToken(){
        return $this->token;
    }

    public function setToken(string $token): void{
        $this->token = $token;
    }

    public function getEmail(){
        return $this->email;
    }

    public function setEmail(string $email): void{
        $this->email = $email;
    }

    public function getPassword(){
        return $this->password;
    }

    public function setPassword(string $password): void{
        $this->password = $password;
    }

}