<?php
require_once('../Model/Account.php');

class AccountController {
    private $accountModel;

    public function __construct() {
        $this->accountModel = new Account();
    }
    public function getAccount() {
        if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức GET.";
            return;
        }

        $accountInfo = $this->accountModel->get_account();
        if ($accountInfo) {
            echo json_encode($accountInfo); // Trả về thông tin tài khoản dưới dạng JSON
        } else {
            http_response_code(404); // Not Found
            // echo "Không tìm thấy thông tin tài khoản.";
        }
    }

    public function updateAccount($data) {
        if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức PUT.";
            return;
        }

        // Giả sử data được truyền vào dưới dạng JSON, bạn cần giải mã nó thành mảng
        // $decodedData = json_decode($data, true);
        // echo "finish decode"
        // Kiểm tra xem dữ liệu đã được giải mã thành công hay chưa
        if ($data === null) {
            http_response_code(400); // Bad Request
            echo "Dữ liệu không hợp lệ.";
            return;
        }
        // echo "finish check"

        // Tách dữ liệu từ mảng $decodedData
        $id = $data['id'];
        $name = $data['name'];
        $email = $data['email'];
        $phone_number = $data['phone_number'];
        $password = $data['password'];
        $role = $data['role'];

        $result = $this->accountModel->update_account($id, $name, $email, $phone_number, $password, $role);
        if ($result) {
            echo "Cập nhật tài khoản thành công.";
        } else {
            echo "Cập nhật tài khoản thất bại.";
        }
    }

    public function deleteAccount($data) {
        if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức DELETE.";
            return;
        }
        $id = $data['id'];
        $result = $this->accountModel->delete_account($id);
        if ($result) {
            echo "Xóa tài khoản thành công.";
        } else {
            echo "Xóa tài khoản thất bại.";
        }
    }

    public function registerAccount($name, $email, $phone_number, $password) {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức POST.";
            return;
        }

        $result = $this->accountModel->register_account($name, $email, $phone_number, $password);
        if ($result) {
            echo "Đăng ký tài khoản thành công.";
        } else {
            echo "Đăng ký tài khoản thất bại.";
        }
    }
}

// $test = new AccountController();
// $test->getAccount();
?>
