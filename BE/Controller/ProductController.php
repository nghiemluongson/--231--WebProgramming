<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once('../Model/Product.php');
require_once ('../Model/Car.php');
  require_once('../config.php');
  header('Content-Type: application/json'); 
class ProductController{
  private $productModel;
    public function __construct() {
      $this->productModel = new product();
    }
    public function getProduct(){
      if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức GET.";
            return;
        }
        $productInfo = $this->productModel->get_product();
        if ($productInfo) {
            header('Content-Type: application/json');
            echo json_encode($productInfo); // Trả về thông tin tài khoản dưới dạng JSON
        } else {
            http_response_code(404); // Not Found
            // echo "Không tìm thấy thông tin tài khoản.";
        }
        
    }
    public function updateProduct($data){
      if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
          http_response_code(405); // Method Not Allowed
          echo "Phương thức không được phép. Yêu cầu sử dụng phương thức PUT.";
          return;
      }
      if ($data === null) {
          http_response_code(400); // Bad Request
          echo "Dữ liệu không hợp lệ.";
          return;
      }
      $car_id = $data['car_id'];
      $price= $data['price']; 
      $quantity= $data['quantity']; 
      $name= $data['name']; 
      $brand= $data['brand']; 
      $img= $data['img']; 
      $acceleration= $data['acceleration']; 
      $max_speed= $data['max_speed']; 
      $wattage= $data['wattage']; 
      $torque= $data['torque']; 
      $fuel_consumption= $data['fuel_consumption']; 
      $emissions_co2= $data['emissions_co2'];    
      $result = $this->productModel->update_product($car_id, $price, $quantity, $name, $brand, $img, $acceleration, $max_speed, $wattage, $torque, $fuel_consumption, $emissions_co2);
      echo $result;
      if ($result) {
          echo "Cập nhật thành công.";
      } else {
          echo "Cập nhật thất bại.";
      }         
    }
    public function deleteProduct($data) {
        if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức DELETE.";
            return;
        }
        if ($data === null) {
            http_response_code(400); // Bad Request
            echo "Dữ liệu không hợp lệ.";
            return;
        }
        $car_id = $data['car_id'];
        $result = $this->productModel->delete_product($car_id);
        if ($result) {
            echo "Xóa tài khoản thành công.";
        } else {
            echo "Xóa tài khoản thất bại.";
        }

    }
    public function insertProduct($data) {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức POST.";
            return;
        }
        $price= $data['price']; 
        $quantity= $data['quantity']; 
        $name= $data['name']; 
        $brand= $data['brand']; 
        $img= $data['img']; 
        $acceleration= $data['acceleration']; 
        $max_speed= $data['max_speed']; 
        $wattage= $data['wattage']; 
        $torque= $data['torque']; 
        $fuel_consumption= $data['fuel_consumption']; 
        $emissions_co2= $data['emissions_co2'];

        $result = $this->productModel->insert_product($price, $quantity, $name, $brand, $img, $acceleration, $max_speed, $wattage, $torque, $fuel_consumption, $emissions_co2);
        if ($result) {
            echo "Đăng ký tin tức thành công.";
        } else {
            echo "Đăng ký tin tức thất bại.";
        }      
    } 
   
}

?>