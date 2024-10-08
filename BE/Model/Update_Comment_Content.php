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

$comment_id = $data['comment_id']; // Đây là car_id được gửi từ frontend
$content = $data['content'];

// Update data
$sql = "UPDATE comment_rate 
        SET content = :content
        WHERE comment_id = :comment_id"; // Câu truy vấn SQL
$stmt = $conn->prepare($sql);

// Bind parameters
// Execute query directly with an array of parameters
$stmt->execute([
    ':comment_id' => $comment_id,
    ':content' => $content,
]);

// Output success message or handle errors

$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Output data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
