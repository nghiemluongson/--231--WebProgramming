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
$customer_id = $data['userid'];
$car_id = $data['carid'];
$color = $data['mau'];
$wheel = $data['kieu'];
$name = $data['ten'];
$price = $data['gia'];
$img = $data['anh'];

// Thực hiện truy vấn để thêm thông tin vào bảng cart
$stmt = $conn->query("INSERT INTO cart (id, customer_id, car_id, color, wheel, name, price, img) VALUES ('$id', '$customer_id', '$car_id', '$color', '$wheel', '$name','$price','$img')");


?>