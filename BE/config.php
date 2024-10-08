<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "shop";

try {
    $GLOBALS['conn'] = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $GLOBALS['conn']->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
