<?php
require_once "database.php";

header('Content-Type: application/json');

class car{
    public $name;
    public $id;
    public $price;
    public $quantaty;
    public $acceleration;
    public $maxSpeed;
    public $wattage;
    public $torque;
    public $fuelConsumption;
    public $emissionCO2;



    public $database;

    function __construct( $id="",$name="", $quantaty="", $acceleration="", $maxSpeed="", $wattage="", $torque="", $fuelConsumption="", $emissionCO2="")
    {
        $this->id = $id;
        $this->name = $name;
        $this->quantaty = $quantaty;
        $this->acceleration = $acceleration;
        $this->maxSpeed = $maxSpeed;
        $this->wattage = $wattage;
        $this->torque = $torque;
        $this->fuelConsumption = $fuelConsumption;
        $this->emissionCO2 = $emissionCO2;
        $this->database = new Database("localhost","root","","shop");
        
    }

    function get_img(){
        $color = $wheel = $front = $back = $beside = $top = "";
        $img_Car = array();
        $data_response = array();
        $sql = "SELECT * FROM image WHERE car_id='$this->id'";
        $result = ($this->database)->execute($sql);
        if ($result->num_rows > 0) {
        
            while($row = $result->fetch_assoc()) {
                $color = $row["img_color"];
                $wheel = $row["img_wheel"];
                $front = $row["front"];
                $back = $row["back"];
                $beside = $row["beside"];
                $top = $row["top"];
                $img_Car[$color][$wheel]=array(//[

                    array(
                            "name"=>"front", "url" =>$front
                    ),
                    array(
                        "name"=>"back", "url" =>$back
                    ),
                    array(
                        "name"=>"beside", "url"=>$beside
                    ),
                    array(
                        "name"=>"top", "url" =>$top
                    )
                );//]
    
            }
        }
        $data_response['img'] = $img_Car;
        // $data_response['price'] = $price;
    
        // var_dump(json_encode($img_Car,true));
        
        return  json_encode($data_response,true);
    }


    function get_specification(){
        $data_response = array();
        $name = $acceleration = $maxSpeed = $wattage = $torque = $fuelConsumption = $emissionCO2 = "";
        $sql = "SELECT * FROM car WHERE car_id='$this->id'";
        

        $result = ($this->database)->execute($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $acceleration = $row["acceleration"];
                $maxSpeed = $row["max_speed"];
                $wattage = $row["wattage"];
                $torque = $row["torque"];
                $fuelConsumption = $row["fuel_consumption"];
                $emissionCO2 = $row["emissions_co2"];
                $price = $row["price"];
                $name = $row["name"];
            }
        }
        $data_response[] = array("name" => "Công suất(kW)", "value" => $wattage);
        $data_response[] = array("name" => "Mô men xoắn cực đại(Nm)", "value" => $torque);
        $data_response[] = array("name" => "Tăng tốc từ 0 - 100 km/giờ(giây)", "value" => $acceleration);
        $data_response[] = array("name" => "Tốc độ tối đa(km/h)", "value" => $maxSpeed);
        $data_response[] = array("name" => "Tiêu thụ nhiên liệu kết hợp (lít/100km)", "value" => $fuelConsumption);
        $data_response[] = array("name" => "Lượng khí thải CO2 (g/km)", "value" => $emissionCO2);
        $data_response[] = array("name" => "Giá", "value" => $price);
        $data_response = array("specification" => $data_response,"name" => $name);
        return json_encode($data_response);
    }
    function get_comment_rating(){
        $data_response = array();
        $comment_and_customer_list = array();
        $avatar = $name = $rate = $comment = $customer_id = "";
        $sql = "SELECT * FROM write_comment_rate WHERE car_id='$this->id'";
        $result = ($this->database)->execute($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
        
                $comment_and_customer_list[] = array("customer_id" => $row["customer_id"],"comment_id" => $row["comment_id"]);
            }
        }
        // var_dump($comment_and_customer_list);
        $element = array();
        foreach($comment_and_customer_list as $value){
            // echo "here";
            $comemnt_id = $value["comment_id"];
            $customer_id = $value["customer_id"];
            
            
            $sql = "SELECT * FROM comment_rate WHERE comment_id='$comemnt_id'";
            $result = ($this->database)->execute($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    $rate = $row["rate"];
                    $content =$row["content"];
                }
            }
            $sql = "SELECT * FROM account WHERE id='$customer_id'";
            $result = ($this->database)->execute($sql);
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    $avatar = $row["avatar"];
                    $name =$row["name"];
                }
            }
            $element["avatar"]= $avatar;
            $element["name"]= $name;
            $element["rate"]= $rate;
            $element["content"]= $content;
            // var_dump($element);

            $data_response[] = $element; 


        }
        $data_response = array("comment_list"=> $data_response );
        // var_dump($data_response);
        return json_encode($data_response);

    }
}



class Comment{
    public $id;
    public $customer_id;
    public $car_id;
    public $content;
    public $rating;


    public $database;
    function __construct($customer_id = "",$car_id = "",$content = "",$rating = "",$id = ""){
        $this->id  = $id ;
        $this->customer_id  = $customer_id ;
        $this->car_id  = $car_id ;
        $this->content = $content;
        $this->rating = $rating;
        $this->database = new Database("localhost","root","","shop");
    }   


    function post_comment_rating(){
        $data_response = "";
        
        $sql = "SELECT * FROM write_comment_rate WHERE customer_id='$this->customer_id' AND car_id='$this->car_id'";
        $result = ($this->database)->execute($sql);
        $sql = "INSERT INTO comment_rate(content,rate) VALUES ('$this->content','$this->rating')";
        $data_response = (($this->database)->execute($sql))?"post success":"post fault";
        $sql = "INSERT INTO write_comment_rate(customer_id,car_id,comment_id,date_time) VALUES ('$this->customer_id','$this->car_id',LAST_INSERT_ID(), NOW())";
        $data_response = (($this->database)->execute($sql))?"post success":"post fault";
        $data_response = array("message" => $data_response);
        return json_encode($data_response);
    }

}
?>