<?php
require_once('path_to_config/config.php');

class Car {
    private $db;
    private $data;

    public function __construct() {
        $this->db = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
        if ($this->db->connect_error) {
            die("Kết nối đến cơ sở dữ liệu thất bại: " . $this->db->connect_error);
        }

        // Lấy dữ liệu JSON từ request và chuyển thành mảng
        $this->data = json_decode(file_get_contents("php://input"), true);
    }

    public function update_car() {
        $car_id = $this->data['car_id'] ?? null;
        $price = $this->data['price'] ?? null;
        $quantity = $this->data['quantity'] ?? null;
        $name = $this->data['name'] ?? null;
        $brand = $this->data['brand'] ?? null;
        $img = $this->data['img'] ?? null;
        $acceleration = $this->data['acceleration'] ?? null;
        $max_speed = $this->data['max_speed'] ?? null;
        $wattage = $this->data['wattage'] ?? null;
        $torque = $this->data['torque'] ?? null;
        $fuel_consumption = $this->data['fuel_consumption'] ?? null;
        $emissions_co2 = $this->data['emissions_co2'] ?? null;

        if ($car_id !== null) {
            $sql = "UPDATE car 
                    SET price = ?, quantity = ?, name = ?, brand = ?, img = ?,
                    acceleration = ?, max_speed = ?, wattage = ?, torque = ?,
                    fuel_consumption = ?, emissions_co2 = ?
                    WHERE car_id = ?";
            $stmt = $this->db->prepare($sql);
            $stmt->bind_param('iissssiidddd', $price, $quantity, $name, $brand, $img,
                $acceleration, $max_speed, $wattage, $torque, $fuel_consumption, $emissions_co2, $car_id);

            if ($stmt->execute()) {
                return "Cập nhật thông tin xe thành công.";
            } else {
                return "Cập nhật thông tin xe thất bại.";
            }
        } else {
            return "Không có car_id được cung cấp.";
        }
    }
}
?>
