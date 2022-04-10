<?php

namespace App\models;

abstract class BaseManager
{
    protected $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }
}