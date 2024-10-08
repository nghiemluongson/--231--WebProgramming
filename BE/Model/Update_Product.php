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

$car_id = $data['car_id']; // Đây là car_id được gửi từ frontend
$price = $data['price'];
$quantity = $data['quantity'];
$name = $data['name'];
$brand = $data['brand'];
$img = $data['img'];
$acceleration = $data['acceleration'];
$max_speed = $data['max_speed'];
$wattage = $data['wattage'];
$torque = $data['torque'];
$fuel_consumption = $data['fuel_consumption'];
$emissions_co2 = $data['emissions_co2'];

// Update data
$sql = "UPDATE car 
        SET price = :price, quantity = :quantity, name = :name, brand = :brand, img = :img,
        acceleration = :acceleration, max_speed = :max_speed, wattage = :wattage, torque = :torque,
        fuel_consumption = :fuel_consumption, emissions_co2 = :emissions_co2
        WHERE car_id = :car_id"; // Câu truy vấn SQL
$stmt = $conn->prepare($sql);

// Bind parameters
// Execute query directly with an array of parameters
$stmt->execute([
    ':car_id' => $car_id,
    ':price' => $price,
    ':quantity' => $quantity,
    ':name' => $name,
    ':brand' => $brand,
    ':img' => $img,
    ':acceleration' => $acceleration,
    ':max_speed' => $max_speed,
    ':wattage' => $wattage,
    ':torque' => $torque,
    ':fuel_consumption' => $fuel_consumption,
    ':emissions_co2' => $emissions_co2
]);

// Output success message or handle errors
// echo "Car information updated successfully";
// Fetch data as associative array
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Output data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
