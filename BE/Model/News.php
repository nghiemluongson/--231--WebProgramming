<?php
  require_once('../config.php');
  header('Content-Type: application/json'); 
  class news{


    private $database;

    function __construct ($new_id="", $date="", $title="", $description="", $content="", $author_name="", $image="")
    {
      $this->database = $GLOBALS['conn'];
    }
    //GET METHOD
    function get_new(){
        try {
            $query = "SELECT * FROM news;";
            $statement = $this->database->query($query);
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            
            echo json_encode($result);
            
        } catch (PDOException $e) {
            echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
        }
    }
    //GET NEWEST NEWS 
    function get_newest_new(){
      try {
          $query = "SELECT * FROM news ORDER BY date DESC;";
          $statement = $this->database->query($query);
          $result = $statement->fetchAll(PDO::FETCH_ASSOC);
          
          echo json_encode($result);
          
      } catch (PDOException $e) {
          echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
      }
    }
  //INSERT METHOD  
    function insert_new($date, $title, $description, $content, $author_name, $image)
      {
          try {
              $query = "SELECT new_id FROM news;";
              $statement = $this->database->query($query);
              $result = $statement->fetchAll(PDO::FETCH_ASSOC);
              $max_id = $result[0]['new_id'];
              foreach ($result as $row) {
                  if ($row['new_id'] >= $max_id) {
                      $max_id = $row['new_id'];
                  }
              }
              $new_id = $max_id + 1;
              // Call the correct method within the class
              return $this->insert_new_validate($new_id, $date ,$title, $description, $content, $author_name, $image);
            } catch (PDOException $e) {
              echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
          }
      }

    function insert_new_validate($new_id, $date, $title, $description, $content, $author_name, $image)
      {
          try {
              $query = "INSERT INTO news (new_id, date, title, description, content, author_name, image) VALUES (:new_id, :date, :title, :description, :content, :author_name, :image)";
              $statement = $this->database->prepare($query);

              $statement->bindParam(':new_id', $new_id);
              $statement->bindParam(':date', $date);
              $statement->bindParam(':title', $title);
              $statement->bindParam(':description', $description);
              $statement->bindParam(':content', $content);
              $statement->bindParam(':author_name', $author_name);
              $statement->bindParam(':image', $image);

              $statement->execute();

              echo json_encode(["status" => "success", "data" => 'insert successful']);
              return $statement->rowCount() > 0;
              
          } catch (PDOException $e) {
              echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
          }
      }
  // DELETE METHOD
      function delete_new($new_id){
        try {
            $query = "DELETE FROM news WHERE new_id =" .$new_id. ";";
            $statement = $this->database->query($query);
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(["status" => "success"]);
            return $statement->rowCount() > 0;
        } catch (PDOException $e) {
            echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
        }
    }
  // UPDATE METHOD
    public function update_new($new_id, $date, $title, $description, $content, $author_name, $image)
      {
          try {
            $query_update = "UPDATE news SET date =:date, title =:title, description = :description, content = :content, author_name = :author_name, image = :image WHERE new_id = :new_id";
            $statement_update = $this->database->prepare($query_update);
            $statement_update->bindParam(':date', $date);
            $statement_update->bindParam(':new_id', $new_id);
            $statement_update->bindParam(':title', $title);
            $statement_update->bindParam(':description', $description);
            $statement_update->bindParam(':content', $content);
            $statement_update->bindParam(':author_name', $author_name);
            $statement_update->bindParam(':image', $image);
            $statement_update->execute();
            return $statement_update->rowCount() > 0;
          } catch (PDOException $e) {
              echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
                return 0;
            }
      }  
  }

?>