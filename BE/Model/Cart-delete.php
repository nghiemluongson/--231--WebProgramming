<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$servername = "localhost";
$username = "root";
$password = "";
$database = "shop";

// Tạo kết nối đến cơ sở dữ liệu
$conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$data = json_decode(file_get_contents('php://input'), true);

$id = $data['code'];

// Thực hiện truy vấn để xóa thông tin khỏi bảng cart
$stmt = $conn->prepare("DELETE FROM cart WHERE id = :id");
$stmt->bindParam(':id', $id);
$stmt->execute();

echo json_encode(array("message" => "Xóa thành công"));
?>