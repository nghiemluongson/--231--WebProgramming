<?php
    require_once('../config.php');

    class Account{
        private $db;
    
        public function __construct() {
            $this->db = $GLOBALS['conn'];
            if ($conn->connect_error) {
                die("Kết nối đến cơ sở dữ liệu thất bại: " . $this->db->connect_error);
            }
        }
        public function get_account() {
            $query = "SELECT id, email, password, phone_number, name, birthday, address, avatar, security_question, security_answer, state, role FROM account";
            $stmt = $this->db->query($query);
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            header('Content-Type: application/json');
            echo json_encode($data);
        }

        public function register_account($email, $password, $name, $phone_number) {
            $query = "INSERT INTO account (email, password, name, phone_number) VALUES (?, ?, ?, ?)";
            $stmt = $this->db->prepare($query);
            $stmt->execute([$email, $password, $name, $phone_number]);
    
            return $stmt->rowCount() > 0;
        }
    
        public function update_account($id, $name, $email, $phone_number, $password, $role) {
            $query = "UPDATE account 
                        SET name = :name, email = :email, phone_number = :phone_number, password = :password, role = :role
                        WHERE id = :id"; // Câu truy vấn SQL
            $stmt = $this->db->prepare($query);
    
            $stmt->execute([
                ':id' => $id,
                ':name' => $name,
                ':email' => $email,
                ':phone_number' => $phone_number,
                ':password' => $password,
                ':role' => $role
            ]);

            return $stmt->rowCount() > 0;
        }
    
        public function delete_account($id) {
            $sql = "DELETE FROM account WHERE id = :id";
            $stmt = $this->db->prepare($sql);
            $stmt->execute([':id' => $id]);
            return $stmt->rowCount() > 0;
        }
    }

    // $account = new Account();
    // $account->get_account();

?>
