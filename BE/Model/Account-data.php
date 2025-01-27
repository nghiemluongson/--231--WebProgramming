<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$database = "shop";

// Create connection
$conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);

// Set the PDO error mode to exception
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Select data
$stmt = $conn->prepare("SELECT id, email, password, phone_number, name, birthday, address, avatar, security_question, security_answer, state, role  FROM account");
$stmt->execute();

// Fetch data as associative array
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

// echo "Connect successfully";
// echo "\n";
// Output data as JSON
header('Content-Type: application/json');
echo json_encode($data);

?>