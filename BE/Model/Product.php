<?php
  require_once('../config.php');
  header('Content-Type: application/json'); 
  class product{
    private $database;

    function __construct ()
    {
      $this->database = $GLOBALS['conn'];
    }
    function get_product(){
      try {
        $query = "SELECT * FROM car;";
        $statement = $this->database->query($query);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($result);        
      } catch (PDOException $e) {
          echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
      }
    }
    //DELETE METHOD    
    function delete_product($car_id){
      try {
          $query = "DELETE FROM car WHERE car_id =" .$car_id. ";";
          $statement = $this->database->query($query);
          $result = $statement->fetchAll(PDO::FETCH_ASSOC);
          return json_encode($result); 
      } catch (PDOException $e) {
          echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
      }
    }
    
    function insert_product($price, $quantity, $name, $brand, $img, $acceleration, $max_speed, $wattage, $torque, $fuel_consumption, $emissions_co2){
      try{
          $query = "SELECT car_id FROM car;";
          $statement = $this->database->query($query);
          $result = $statement->fetchAll(PDO::FETCH_ASSOC);
          $max_id = $result[0]['car_id']; 
          foreach ($result as $row) {
              if ($row['car_id'] >= $max_id) {
                  $max_id = $row['car_id'];
              }
          }
          $new_id = $max_id + 1;
          return $this->insert_product_validate($new_id, $price, $quantity, $name, $brand, $img, $acceleration, $max_speed, $wattage, $torque, $fuel_consumption, $emissions_co2);

      } catch (PDOException $e) {
        echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
      }
    }

    function insert_product_validate($car_id, $price, $quantity, $name, $brand, $img, $acceleration, $max_speed, $wattage, $torque, $fuel_consumption, $emissions_co2){
      try{
        $query = "INSERT INTO car (car_id, price, quantity, name, brand, img, acceleration, max_speed, wattage, torque, fuel_consumption, emissions_co2) VALUES (:car_id, :price, :quantity, :name, :brand, :img, :acceleration, :max_speed, :wattage, :torque, :fuel_consumption, :emissions_co2);";
        $statement = $this->database->prepare($query);
        $statement->bindParam(':car_id', $car_id);
        $statement->bindParam(':price',$price); 
        $statement->bindParam(':quantity',$quantity); 
        $statement->bindParam(':name',$name); 
        $statement->bindParam(':brand',$brand); 
        $statement->bindParam(':img',$img); 
        $statement->bindParam(':acceleration',$acceleration); 
        $statement->bindParam(':max_speed',$max_speed); 
        $statement->bindParam(':wattage',$wattage); 
        $statement->bindParam(':torque',$torque); 
        $statement->bindParam(':fuel_consumption',$fuel_consumption); 
        $statement->bindParam(':emissions_co2',$emissions_co2);
        return $statement->execute();
      } catch (PDOException $e) {
          echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
      }
    }

    function update_product($car_id, $price, $quantity, $name, $brand, $img, $acceleration, $max_speed, $wattage, $torque, $fuel_consumption, $emissions_co2){
      try{
        $query = "UPDATE car SET price = :price, quantity = :quantity, name = :name, brand = :brand, img = :img, acceleration = :acceleration, max_speed = :max_speed, wattage = :wattage, torque = :torque, fuel_consumption = :fuel_consumption, emissions_co2 = :emissions_co2 WHERE car_id = :car_id;";
        $statement = $this->database->prepare($query);
        $statement->bindParam(':car_id', $car_id);
        $statement->bindParam(':price',$price); 
        $statement->bindParam(':quantity',$quantity); 
        $statement->bindParam(':name',$name); 
        $statement->bindParam(':brand',$brand); 
        $statement->bindParam(':img',$img); 
        $statement->bindParam(':acceleration',$acceleration); 
        $statement->bindParam(':max_speed',$max_speed); 
        $statement->bindParam(':wattage',$wattage); 
        $statement->bindParam(':torque',$torque); 
        $statement->bindParam(':fuel_consumption',$fuel_consumption); 
        $statement->bindParam(':emissions_co2',$emissions_co2);
        return $statement->execute();        
      } catch (PDOException $e) {
          echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
      }
    }
  }
  // $a = new product();
  // $a->insert_product(3740000000, 3, '718 Boxster', 'Porsche', 'https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-modelimage-sideshot/thumbwhite/230138a1-e874-11ea-80cd-005056bbdc38;sK;twebp/porsche-thumbwhite.webp', '4.7', '275', '220', '380', '8.1', '180');
  // $a->update_product(1047, 3740000000, 3, '718 Boxster', 'Porsche', 'https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-modelimage-sideshot/thumbwhite/230138a1-e874-11ea-80cd-005056bbdc38;sK;twebp/porsche-thumbwhite.webp', '4.7', '275', '220', '380', '8.1', '180');

?>