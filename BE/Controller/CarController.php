<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-Type: application/json');
require_once "../Model/Car.php";
class CarController{
    function get_img($id){
        $car = new car($id);
        return $car->get_img();
    }

    function get_specification($id){
        $car = new car($id);
        return $car->get_specification();
    }
    function get_comment_rating($id){
        $car = new car($id);
        return $car->get_comment_rating();
    }
    function post_comment_rating($customer_id, $car_id, $content, $rating){
        $comment = new Comment($customer_id, $car_id, $content, $rating);
        return $comment->post_comment_rating();
    }
};

if($_SERVER["REQUEST_METHOD"] == "GET"){
    $id = $_GET["id"];

    $carController = new CarController;

    $img = $carController->get_img($id);
    $specification = $carController->get_specification($id);
    $comment_list = $carController->get_comment_rating($id);
    
    $obj1 = json_decode($img );
    $obj2 = json_decode($specification);
    $obj3= json_decode($comment_list);

    // Nối hai đối tượng JSON lại với nhau
    $objResult = (object)array_merge((array)$obj1, (array)$obj2,(array)$obj3);

    // Chuyển đối tượng kết quả thành chuỗi JSON
    $jsonResult = json_encode($objResult);

        echo $jsonResult;
    }

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $carController = new CarController();

        $customer_id = $_POST["customer_id"];
        $car_id = $_POST["car_id"];
        $rating = $_POST["rating"];
        $content = $_POST["content"];
        // echo $customer_id." ".$car_id . " ".$content." ".$rating;
        $response = $carController->post_comment_rating($customer_id, $car_id, $content,$rating);
        echo json_encode ($response);
    }

?>


