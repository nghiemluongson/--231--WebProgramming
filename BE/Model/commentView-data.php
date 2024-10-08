<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$database = "shop";

$conn = new mysqli($servername, $username, $password, $database);

// kiểm tra kết nối
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// lấy dữ liệu từ bảng thương hiệu
$sql = "SELECT comment_rate.comment_id as id, account.name, car.name as car_name, write_comment_rate.date_time, comment_rate.content, comment_rate.rate 
FROM account
INNER JOIN write_comment_rate ON account.id = write_comment_rate.customer_id
INNER JOIN comment_rate ON write_comment_rate.comment_id = comment_rate.comment_id
INNER JOIN car ON car.car_id = write_comment_rate.car_id;
";
$result = $conn->query($sql);

// đưa dữ liệu vào mảng
$cart = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $cart[] = $row;
  }
}

// trả về dữ liệu dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($cart);

// đóng kết nối
$conn->close();
?>