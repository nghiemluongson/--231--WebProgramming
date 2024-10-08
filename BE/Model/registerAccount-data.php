<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Kết nối đến database
$servername = "localhost";
$username = "root";
$password = "";
$database = "shop";

$conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['user_id'];
$name = $data['user_name'];
$email = $data['user_email'];
$password = $data['user_password'];
$birth = $data['user_birthday'];
$address = $data['user_address'];
$avatar = 'any';
$phone = $data['user_phonenumber'];
$question = $data['user_question'];
$answer = $data['user_answer'];
$state = 'true';
$role = 'customer';




$stmt = $conn->query("INSERT INTO account (id,name, email, password, birthday, address, avatar, phone_number, security_question, security_answer,state, role)
VALUES ('$id','$name', '$email', '$password', '$birth', '$address','$avatar', '$phone', '$question', '$answer','$state','$role')");


$stmt = $conn->query("INSERT INTO customer (customer_id) VALUES ('$id');");
?>