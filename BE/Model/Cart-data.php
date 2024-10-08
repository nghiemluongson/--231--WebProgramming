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
$sql = "SELECT account.name, cart.id, cart.customer_id, cart.car_id, cart.price, cart.quantity, cart.name AS car_name, cart.brand, cart.img, cart.acceleration, cart.max_speed, cart.wattage, cart.torque, cart.fuel_consumption, cart.emissions_co2
FROM account
INNER JOIN customer ON account.id = customer.customer_id 
INNER JOIN cart ON customer.customer_id = cart.customer_id
INNER JOIN car ON car.car_id = cart.car_id;
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