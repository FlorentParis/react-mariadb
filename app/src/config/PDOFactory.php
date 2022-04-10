<?php
namespace App\config;

class PDOFactory {

    private $dbConnection = null;

    public function __construct()
    {
        $servername = "db";
        $username = "root";
        $password = "password";
        $db = "data";

        try {
            $this->dbConnection = new \PDO('mysql:host='.$servername.';dbname='.$db, $username, $password);
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function getConnection()
    {
        return $this->dbConnection;
    }
}