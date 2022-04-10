<?php

namespace App\entity;

class Post {
    private int $id;
    private string $title;
    private string $content;
    private string $author;
    private string $created_at; 

    public function getId()
    {
        return $this->id;
    }

    public function getTitle(){
        return $this->title;
    }

    public function setTitle(string $title): void{
        $this->title = $title;
    }

    public function getContent(){
        return $this->content;
    }

    public function setContent(string $content): void{
        $this->content = $content;
    }

    public function getAuthor(){
        return $this->author;
    }

    public function setAuthor(string $author): void{
        $this->author = $author;
    }

    public function getCreatedAt(){
        return date($this->created_at);
    }
}