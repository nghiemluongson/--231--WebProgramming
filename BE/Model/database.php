<?php

class Database{
    private $servername;
    private $username;
    private $password;
    private $database;
    private $connect;
    function __construct($servername,$username,$password,$database)
    {
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
        $this->connect = new mysqli($this->servername, $this->username, $this->password, $this->database);
        if (($this->connect)->connect_error) {
            die("Connection failed: " . ($this->connect)->connect_error);
        }
    }
    function __destruct()
    {
        ($this->connect)->close();
    }

    function execute($sql){
        return ($this->connect)->query($sql);
    }
}

?>