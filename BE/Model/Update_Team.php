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

// Nhận dữ liệu được gửi từ frontend
$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id']; // Đây là ID được gửi từ frontend
$name = $data['name'];
$email = $data['email'];
$phone_number = $data['phone_number'];
$role = $data['role'];
$password = $data['password'];
// Select data
$sql = "UPDATE account 
        SET name = :name, email = :email, phone_number = :phone_number, password = :password, role = :role
        WHERE id = :id"; // Câu truy vấn SQL
$stmt = $conn->prepare($sql);

$stmt->execute([
        ':id' => $id,
        ':name' => $name,
        ':email' => $email,
        ':phone_number' => $phone_number,
        ':password' => $password,
        ':role' => $role
]);
    

// Fetch data as associative array
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Output data as JSON
header('Content-Type: application/json');
echo json_encode($data);

?>