<?php

namespace App\models;

use App\entity\User;

class UserManager extends BaseManager 
{
    public function addUser(User $user)
    {
        $values = array($user->getToken(), $user->getEmail(), $user->getPassword());
        $sql = "INSERT INTO users(token, email, password) VALUES(?, ?, ?)";
        $result = $this->pdo->prepare($sql);
        $result->execute($values);
    }

    public function getAllUser(): array
    {
        $query = $this->pdo->prepare('SELECT * FROM users');
        $query->execute();
        return $query->fetchAll(\PDO::FETCH_CLASS, User::class);
    }

    public function getUserByToken(string $token): User
    {
        $search = $this->pdo->prepare('SELECT * FROM users WHERE token = ?');
        $search->execute(array($token));
        $search->setFetchMode(\PDO::FETCH_CLASS, User::class);
        $user = $search->fetch();
        return $user;
    }
}