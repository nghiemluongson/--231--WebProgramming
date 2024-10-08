<?php

class Account_Controller {

    public function update() {
        // Xử lý cập nhật tài khoản
    }

    public function delete() {
        // Xử lý xóa tài khoản
    }

    public function get() {
        // Xử lý lấy thông tin tài khoản
    }

    public function register() {
        // Xử lý đăng ký tài khoản mới
    }
}

// Xử lý yêu cầu dựa trên HTTP method và định tuyến đến các hàm xử lý tương ứng
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $controller = new Account_Controller();
    $controller->update();
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $controller = new Account_Controller();
    $controller->delete();
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $controller = new Account_Controller();
    $controller->get();
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $controller = new Account_Controller();
    $controller->register();
} else {
    // Xử lý khi không tìm thấy phương thức hoặc route
    http_response_code(404);
    echo "Route not found";
}
?>
