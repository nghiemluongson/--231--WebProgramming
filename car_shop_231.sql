-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 27, 2023 lúc 02:01 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--
CREATE DATABASE `shop`;

USE `shop`;

CREATE TABLE `account` (
  `id` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `security_question` varchar(255) NOT NULL,
  `security_answer` varchar(255) NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `email`, `password`, `phone_number`, `name`, `birthday`, `address`, `avatar`, `security_question`, `security_answer`, `state`, `role`) VALUES
(400, 'kientran@gmail.com', '1234', '01234567', 'Kiên Trần', '2023-04-21', 'Linh Trung, Thủ Đức','http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Sở thích của bạn là gì', 'Xem phim', 'True', 'admin'),
(401, 'nguyenlinh@gmail.com', '5678', '09876543', 'Nguyễn Linh', '1990-12-15', 'Quận 1, TP.HCM', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Màu sắc yêu thích của bạn là gì', 'Xanh dương', 'True', 'customer'),
(402, 'phuonganh@yahoo.com', 'abcd', '01239876', 'Phương Anh', '1985-09-30', 'Quận 7, TP.HCM', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Thú cưng bạn thích là gì', 'Chó', 'True', 'blockcustomer'),
(403, 'thanhnguyen@hotmail.com', 'efgh', '09871234', 'Thanh Nguyễn', '1995-06-18', 'Quận 10, TP.HCM', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Bạn muốn làm gì vào cuối tuần?', 'Đi du lịch', 'True', 'admin'),
(404, 'minhvuong@gmail.com', 'ijkl', '01237890', 'Minh Vương', '2000-03-25', 'Quận 3, TP.HCM', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Đội bóng bạn yêu thích là gì?', 'Manchester United', 'True', 'customer'),
(405, 'thuytrang@yahoo.com', 'mnop', '01928374', 'Thùy Trang', '1988-11-30', 'Quận 5, TP.HCM', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Nơi bạn muốn đến trong kỳ nghỉ?', 'Hawaii', 'True', 'blockcustomer'),
(406, 'hoanglong@gmail.com', 'qrst', '05671234', 'Hoàng Long', '1992-07-22', 'Quận Bình Thạnh, TP.HCM', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Nghề nghiệp mơ ước của bạn?', 'Chủ doanh nghiệp', 'True', 'admin'),
(407, 'tuananh@hotmail.com', 'uvwx', '07654321', 'Tuấn Anh', '1987-09-12', 'Quận 9, TP.HCM', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Thức uống yêu thích của bạn là gì?', 'Cà phê', 'True', 'customer'),
(408, 'thithao@yahoo.com', 'yzab', '03456789', 'Thị Thảo', '1994-02-28', 'Quận Gò Vấp, TP.HCM', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Môn thể thao bạn yêu thích là gì?', 'Bóng đá', 'True', 'blockcustomer'),
(409, 'honglinh@gmail.com', '5678', '09871234', 'Hồng Linh', '1999-10-05', 'Quận Tân Bình, TP.HCM', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Bạn muốn trở thành ai khi lớn lên?', 'Giáo viên', 'True', 'admin'),
(410, 'quanghuy@yahoo.com', 'abcd', '07654321', 'Quang Huy', '1996-08-20', 'Quận 2, TP.HCM', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Nơi bạn muốn sống trong tương lai?', 'Canada', 'True', 'customer'),
(500, 'huynhnhan@gmail.com', '1234', '01234567', 'Huỳnh Nhân', '2023-04-21', 'Linh Trung, Thủ Đức', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Sở thích của bạn là gì', 'Xem phim', 'True', 'customer'),
(600, 'hoangnam@gmail.com', '1234', '01234567', 'Hoàng Nam', '2023-04-21', 'Linh Trung, Thủ Đức', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Sở thích của bạn là gì', 'Xem phim', 'True', 'customer'),
(700, 'chungquang@gmail.com', '1234', '01234567', 'Chúng Quang', '2023-04-21', 'Linh Trung, Thủ Đức', 'http://localhost/CarShop_Project/BE/uploads/avatar/any.jpg', 'Sở thích của bạn là gì', 'Xem phim', 'True', 'customer');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand`
--

CREATE TABLE `brand` (
  `brand_id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `info` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `brand`
--

INSERT INTO `brand` (`brand_id`, `name`, `logo`, `info`) VALUES
(1, 'Porsche', 'https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png', 'Dr. Ing. h. c. F. Porsche AG thường được gọi tắt là Porsche, thành lập từ ngày 25 tháng 4 năm 1931, là một công ty chuyên sản xuất xe hơi thể thao hạng sang của Đức kiêm thương hiệu con trực thuộc Volkswagen AG - tập đoàn ô tô hàng đầu thế giới cũng như gia tộc nhà Porsche. Với triết lý tạo ra những mẫu xe thể thao và tốc độ. Không những vậy những chiếc Porsche còn nổi tiếng với sự bền bỉ và sang trọng.'),
(2, 'Audi', 'https://brademar.com/wp-content/uploads/2022/05/Audi-Logo-PNG-3.png', 'AUDI AG là một công ty của Đức chuyên sản xuất ô tô hạng sang dưới nhãn hiệu Audi. Công ty này là một công ty con của tập đoàn ô tô lớn nhất thế giới Volkswagen AG từ năm 1964. Những dòng xe ô tô Audi nổi tiếng với thiết kế đẹp, bắt mắt cùng với trang thiết bị hiện đại, cao cấp. Trong lĩnh vực ô tô giá trị'),
(3, 'BMW', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png', 'BMW là một hãng xe hạng sang nổi tiếng đến từ nước Đức được nhiều ngôi sao thế giới sử dụng. Mỗi 1 mẫu xe của hãng ra đời luôn làm giới mộ xe hơi phải thổn thức và đứng ngồi không yên. Có thể nói dòng xe này có sức hút ngang ngửa với các mẫu xe của hãng Mercedes hay Audi bởi vẻ ngoài sang trọng và nội thất tiện nghi.'),
(4, 'Tesla', 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png', 'Các mẫu xe của Tesla luôn chinh phục được người dùng bởi kiểu dáng thiết kế đẹp mắt, hoạt động êm ái, thân thiện với môi trường và đặc biệt là giá thành. Giá xe điện Tesla hấp dẫn với mức giá từ bình dân đến cao cấp giúp đáp ứng nhu cầu của mọi đối tượng khách hàng. '),
(5, 'Lamborghini', 'https://upload.wikimedia.org/wikipedia/vi/thumb/d/df/Lamborghini_Logo.svg/672px-Lamborghini_Logo.svg.png', 'Lamborghini là thương hiệu siêu xe nổi tiếng của Đức với các “chiến binh” hàng đầu thế giới, một hãng xe uy tín của Tập đoàn xe hơi Volkswagen AG - một trong những tập đoàn ô tô lớn nhất. Hãng xe luôn mang đến cho khách hàng những dòng xe chất lượng với nhiều chương trình khuyến mãi hấp dẫn. ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand_has_model`
--

CREATE TABLE `brand_has_model` (
  `brand_id` int(10) NOT NULL,
  `model_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `buy_history`
--

CREATE TABLE `buy_history` (
  `customer_id` int(10) NOT NULL,
  `car_id` int(10) NOT NULL,
  `date_time` date NOT NULL,
  `color` varchar(255) NOT NULL,
  `wheel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `car`
--

CREATE TABLE `car` (
  `car_id` int(10) NOT NULL,
  `price` bigint(15) NOT NULL,
  `quantity` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `acceleration` varchar(255) DEFAULT NULL,
  `max_speed` varchar(255) DEFAULT NULL,
  `wattage` varchar(255) DEFAULT NULL,
  `torque` varchar(255) DEFAULT NULL,
  `fuel_consumption` varchar(255) DEFAULT NULL,
  `emissions_co2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `car`
--

INSERT INTO `car` (`car_id`, `price`, `quantity`, `name`, `brand`, `img`, `acceleration`, `max_speed`, `wattage`, `torque`, `fuel_consumption`, `emissions_co2`) VALUES
(1000, 3740000000, 3, '718 Boxster', 'Porsche', 'https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-modelimage-sideshot/thumbwhite/230138a1-e874-11ea-80cd-005056bbdc38;sK;twebp/porsche-thumbwhite.webp', '4.7', '275', '220', '380', '8.1', '180'),
(1001, 3620000000, 2, '718 Cayman', 'Porsche', 'https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-se-modelimage-sideshot/thumbwhite/7bdc3629-4ea4-11ed-80f7-005056bbdc38;sK;twebp/porsche-thumbwhite.webp', '4.9', '275', '220', '380', '8.0', '181'),
(1002, 7130000000, 3, '911 Carrera', 'Porche', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/black_style1_beside.jpg', '4.2', '293', '283', '450', '8.5', '190'),
(1003, 8500000000, 1, '911 Targa 4', 'Porche', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/red_style1_beside.jpg', '4.4', '289', '282', '450', '8.4', '189'),
(1010, 1400000000, 1, 'Audi S4', 'Audi', 'https://images.autofun.vn/file1/new3fbb5e0370244ef28af19016af6ffdba_606x402.jpg', '4', '200', '200', '400', '8', '180'),
(1011, 2000000000, 1, 'Audi Q2', 'Audi', 'https://images.autofun.vn/file1/new0bf22eb2727a43f49febc56486962b92_606x402.jpg', '4', '200', '200', '400', '8', '180'),
(1012, 1460000000, 1, 'Audi A4', 'Audi', 'https://images.autofun.vn/file1/newcaeb3ce6d5964922b8093f3669c437fc_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1013, 1602300000, 1, 'Audi A2', 'Audi', 'https://images.autofun.vn/file1/newb20378396a4243e3aae77e1f61068d51_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1014, 1356000000, 1, 'Audi A3', 'Audi', 'https://images.autofun.vn/file1/newa241e68cdb804b2294043d2ec57ee1ce_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1015, 1960635120, 1, 'Audi RS5', 'Audi', 'https://images.autofun.vn/file1/newa103743d603a4b96aea72ce09b9a5be8_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1020, 1299000000, 1, 'BMW 2 Series', 'BMW', 'https://images.autofun.vn/file1/new864b7a32cf1747e5be710e8041399c5c_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1021, 2000000000, 1, 'BMW 118i', 'BMW', 'https://images.autofun.vn/file1/newbfd4788f4a844ea68c845577444f302e_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1022, 3200000000, 1, 'BMW 320i', 'BMW', 'https://images.autofun.vn/file1/new4d51aa56975644098645e13b01313c42_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1023, 2400300000, 1, 'BMW X1', 'BMW', 'https://images.autofun.vn/file1/new97dac854503b42e48b9d8b309a96aaf3_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1024, 1520230000, 1, 'BMW 420i Couple', 'BMW', 'https://images.autofun.vn/file1/newc52750bbcf814c959255773f09f98a9b_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1025, 1632000000, 1, 'BMW X2', 'BMW', 'https://images.autofun.vn/file1/new9d28a787d27f48af99bf203e27561350_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1030, 7000000000, 1, 'Lamborghini Veneno', 'Lamborghini', 'https://images.autofun.vn/file1/new45666d92910a41dca25d0da1696bf0e9_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1031, 2000000000, 1, 'Lamborghini Urus', 'Lamborghini', 'https://images.autofun.vn/file1/new383a569b3c714f439f9cd6db0e276207_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1032, 3200000000, 1, 'Lamborghini Evo', 'Lamborghini', 'https://images.autofun.vn/file1/new62afb526da96448db34f33c7bc7cf636_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1033, 2400300000, 1, 'Lamborghini Sian', 'Lamborghini', 'https://images.autofun.vn/file1/new3db831f3f6a74395845c5676a3832e98_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1034, 1520230000, 1, 'Lamborghini Aventador', 'Lamborghini', 'https://images.autofun.vn/file1/newd3e619ec57f145c688d32644daf6190a_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1035, 1632000000, 1, 'Lamborghini', 'Lamborghini', 'https://images.autofun.vn/file1/new45666d92910a41dca25d0da1696bf0e9_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1040, 3000000000, 1, 'Tesla Model 3', 'Tesla', 'https://images.autofun.vn/file1/newf88348d3dfff439ba9a5c681975fd29c_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1041, 2000000000, 1, 'Tesla Model S', 'Tesla', 'https://images.autofun.vn/file1/new312bbbb11f9f4befaceefb32d8e69da9_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL),
(1043, 3000000000, 1, 'Tesla Model X', 'Tesla', 'https://images.autofun.vn/file1/new476f509e98434e0c90e84ff3e7099a68_606x402.jpg', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` varchar(255) NOT NULL,
  `customer_id` int(10) NOT NULL,
  `car_id` int(10) NOT NULL,
  `price` bigint(15) NOT NULL,
  `quantity` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `wheel` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `acceleration` varchar(255) DEFAULT NULL,
  `max_speed` varchar(255) DEFAULT NULL,
  `wattage` varchar(255) DEFAULT NULL,
  `torque` varchar(255) DEFAULT NULL,
  `fuel_consumption` varchar(255) DEFAULT NULL,
  `emissions_co2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `customer_id`, `car_id`, `price`, `quantity`, `name`,`color`,`wheel`, `brand`, `img`, `acceleration`, `max_speed`, `wattage`, `torque`, `fuel_consumption`, `emissions_co2`) VALUES
('1', 500, 1000, 3740000000, 3, '718 Boxster','black','style1', 'Porsche', 'https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-modelimage-sideshot/thumbwhite/230138a1-e874-11ea-80cd-005056bbdc38;sK;twebp/porsche-thumbwhite.webp', '4.7', '275', '220', '380', '8.1', '180'),
('2', 600, 1001, 3620000000, 2, '718 Cayman', 'black','style1','Porsche', 'https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-se-modelimage-sideshot/thumbwhite/7bdc3629-4ea4-11ed-80f7-005056bbdc38;sK;twebp/porsche-thumbwhite.webp', '4.9', '275', '220', '380', '8.0', '181'),
('3', 700, 1010, 1400000000, 1, 'Audi S4','black','style1', 'Audi', 'https://images.autofun.vn/file1/new3fbb5e0370244ef28af19016af6ffdba_606x402.jpg', '4', '200', '200', '400', '8', '180');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `car_of_models`
--

CREATE TABLE `car_of_models` (
  `model_id` int(10) NOT NULL,
  `car_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `car_of_models`
--

INSERT INTO `car_of_models` (`model_id`, `car_id`) VALUES
(2000, 1000),
(2000, 1001),
(2001, 1002),
(2001, 1003);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment_rate`
--

CREATE TABLE `comment_rate` (
  `comment_id` int(10) NOT NULL,
  `content` text NOT NULL,
  `rate` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `comment_rate`
--

INSERT INTO `comment_rate` (`comment_id`, `content`, `rate`) VALUES
(5, '1235', 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`) VALUES
(400),
(401),
(402),
(403),
(404),
(405),
(406),
(407),
(408),
(409),
(410),
(500),
(600),
(700);



-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image`
--

CREATE TABLE `image` (
  `car_id` int(10) NOT NULL,
  `img_color` varchar(255) DEFAULT NULL,
  `img_wheel` varchar(255) DEFAULT NULL,
  `beside` char(255) NOT NULL,
  `front` char(255) NOT NULL,
  `back` char(255) NOT NULL,
  `top` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `image`
--

INSERT INTO `image` (`car_id`, `img_color`, `img_wheel`, `beside`, `front`, `back`, `top`) VALUES
(1000, 'black', 'style1', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/black_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/black_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/black_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/black_top.jpg'),
(1000, 'black', 'style2', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/black_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/black_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/black_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/black_top.jpg'),
(1000, 'blue', 'style1', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/blue_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/blue_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/blue_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/blue_top.jpg'),
(1000, 'blue', 'style2', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/blue_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/blue_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/blue_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/blue_top.jpg'),
(1000, 'red', 'style1', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/red_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/red_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/red_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/red_top.jpg'),
(1000, 'red', 'style2', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/red_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/red_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/red_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/red_top.jpg'),
(1000, 'yellow', 'style1', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/yellow_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/yellow_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/yellow_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/yellow_top.jpg'),
(1000, 'yellow', 'style2', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/yellow_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/yellow_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/yellow_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Boxster/yellow_top.jpg'),
(1001, 'black', 'style1', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/black_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/black_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/black_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/black_top.jpg'),
(1001, 'black', 'style2', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/black_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/black_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/black_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/black_top.jpg'),
(1001, 'blue', 'style1', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/blue_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/blue_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/blue_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/blue_top.jpg'),
(1001, 'blue', 'style2', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/blue_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/blue_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/blue_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/blue_top.jpg'),
(1001, 'red', 'style1', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/red_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/red_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/red_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/red_top.jpg'),
(1001, 'red', 'style2', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/red_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/red_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/red_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/red_top.jpg'),
(1001, 'yellow', 'style1', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/yellow_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/yellow_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/yellow_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/yellow_top.jpg'),
(1001, 'yellow', 'style2', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/yellow_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/yellow_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/yellow_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/718 Cayman/yellow_top.jpg'),
(1002, 'black', 'style1', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/black_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/black_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/black_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/black_top.jpg'),
(1002, 'black', 'style2', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/black_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/black_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/black_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/black_top.jpg'),
(1002, 'blue', 'style1', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/blue_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/blue_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/blue_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/blue_top.jpg'),
(1002, 'blue', 'style2', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/blue_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/blue_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/blue_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/blue_top.jpg'),
(1002, 'red', 'style1', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/red_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/red_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/red_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/red_top.jpg'),
(1002, 'red', 'style2', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/red_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/red_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/red_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/red_top.jpg'),
(1002, 'yellow', 'style1', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/yellow_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/yellow_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/yellow_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/yellow_top.jpg'),
(1002, 'yellow', 'style2', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/yellow_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/yellow_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/yellow_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Carrera/yellow_top.jpg'),
(1003, 'black', 'style1', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/black_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/black_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/black_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/black_top.jpg'),
(1003, 'black', 'style2', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/black_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/black_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/black_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/black_top.jpg'),
(1003, 'blue', 'style1', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/blue_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/blue_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/blue_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/blue_top.jpg'),
(1003, 'blue', 'style2', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/blue_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/blue_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/blue_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/blue_top.jpg'),
(1003, 'red', 'style1', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/red_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/red_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/red_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/red_top.jpg'),
(1003, 'red', 'style2', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/red_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/red_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/red_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/red_top.jpg'),
(1003, 'yellow', 'style1', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/yellow_style1_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/yellow_style1_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/yellow_style1_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/yellow_top.jpg'),
(1003, 'yellow', 'style2', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/yellow_style2_beside.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/yellow_style2_front.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/yellow_style2_back.jpg', 'http://localhost/CarShop_Project/BE/uploads/911 Targa 4/yellow_top.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `models`
--

CREATE TABLE `models` (
  `model_id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `models`
--

INSERT INTO `models` (`model_id`, `name`) VALUES
(2000, '718'),
(2001, '911 Carrera & Targa');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `write_comment_rate`
--

CREATE TABLE `write_comment_rate` (
  `customer_id` int(10) NOT NULL,
  `car_id` int(10) NOT NULL,
  `comment_id` int(10) NOT NULL,
  `date_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `write_comment_rate`
--

INSERT INTO `write_comment_rate` (`customer_id`, `car_id`, `comment_id`, `date_time`) VALUES
(600, 1000, 5, '2023-04-27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `new_id` int(10) NOT NULL,
    `date` date NOT NULL,
    `title` text NOT NULL,
   `description` text NOT NULL,
  `content` text NOT NULL,
  `author_name` text NOT NULL,
  `image` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `news` (`new_id`,  `date` ,`title`, `description`, `content`, `author_name`, `image`) VALUES
(1, '2023-12-08', 'new car today',  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis mauris nibh, et bibendum magna pretium sed. Phasellus non enim in enim blandit euismod. Praesent eu enim varius, tincidunt quam sed, volutpat metus. Aliquam aliquam feugiat dolor a tincidunt. Maecenas nec nulla turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit lacus ut elementum finibus. Pellentesque hendrerit tellus ultrices, iaculis tellus id, sodales justo.\nNullam auctor suscipit nisl eu volutpat. Aliquam nisl dolor, aliquet eget justo id, congue euismod ex. Phasellus leo purus, scelerisque et lacus ut, luctus imperdiet ex. Vestibulum nec urna non nisi dictum viverra vitae quis nisl. Curabitur ultricies nisi non ante sodales auctor. In vitae tortor sed sapien euismod efficitur. Aliquam id scelerisque mauris. Fusce mattis nulla sapien. Phasellus eu aliquam massa, at lobortis ipsum. Phasellus rutrum luctus imperdiet. Donec porta malesuada faucibus. Pellentesque arcu nisl, tincidunt quis tellus nec, auctor condimentum nibh.\nAliquam rutrum sed odio iaculis vulputate. Duis porttitor a neque sit amet dictum. Morbi sed elit in lacus faucibus tristique. Maecenas vel sodales neque. Ut facilisis tellus at neque euismod ultricies. Nam a tristique risus, et tincidunt lectus. Duis id metus orci. Ut a elit urna. Vivamus faucibus maximus odio facilisis tincidunt.\nProin sodales faucibus ipsum, non ornare metus finibus vel. Integer eget congue nisl. Nunc eu felis tellus. Ut iaculis elit eget tempus faucibus. Duis condimentum dui velit, eget volutpat purus consequat at. Aenean quam felis, suscipit sit amet eros in, scelerisque finibus massa. Suspendisse potenti. Duis tincidunt diam nec ipsum consequat, a porttitor augue semper. Praesent tincidunt in felis quis luctus. Nunc vitae urna tortor. In vehicula tincidunt congue. Suspendisse sollicitudin tortor sed semper commodo. In rhoncus ligula et pretium mollis. Etiam porta sapien a nisl lobortis, id aliquet risus condimentum. Aenean rhoncus nec lectus ac molestie.\nQuisque at tortor nec augue efficitur tristique. Sed rhoncus ultricies metus, eget fringilla dolor ultrices et. Etiam sit amet varius mauris. Proin hendrerit lorem quis magna molestie ultricies. Mauris id iaculis tortor, in suscipit ipsum. Nam erat orci, porttitor a vehicula eget, sollicitudin id orci. Aenean malesuada lacus et metus auctor gravida. Maecenas nunc dui, mattis eu iaculis sit amet, maximus vel mi. Vestibulum elementum lectus dolor. Pellentesque felis odio, pharetra at imperdiet quis, finibus vitae felis.', 'Son Beo','https://i.pinimg.com/originals/e0/b6/19/e0b619bb4def29cc007fba6c9b74cf99.jpg');


INSERT INTO `news` (`new_id`,  `date` ,`title`, `description`, `content`, `author_name`, `image`) VALUES
(2, '2023-12-10', 'new car today',  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis mauris nibh, et bibendum magna pretium sed. Phasellus non enim in enim blandit euismod. Praesent eu enim varius, tincidunt quam sed, volutpat metus. Aliquam aliquam feugiat dolor a tincidunt. Maecenas nec nulla turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit lacus ut elementum finibus. Pellentesque hendrerit tellus ultrices, iaculis tellus id, sodales justo.\nNullam auctor suscipit nisl eu volutpat. Aliquam nisl dolor, aliquet eget justo id, congue euismod ex. Phasellus leo purus, scelerisque et lacus ut, luctus imperdiet ex. Vestibulum nec urna non nisi dictum viverra vitae quis nisl. Curabitur ultricies nisi non ante sodales auctor. In vitae tortor sed sapien euismod efficitur. Aliquam id scelerisque mauris. Fusce mattis nulla sapien. Phasellus eu aliquam massa, at lobortis ipsum. Phasellus rutrum luctus imperdiet. Donec porta malesuada faucibus. Pellentesque arcu nisl, tincidunt quis tellus nec, auctor condimentum nibh.\nAliquam rutrum sed odio iaculis vulputate. Duis porttitor a neque sit amet dictum. Morbi sed elit in lacus faucibus tristique. Maecenas vel sodales neque. Ut facilisis tellus at neque euismod ultricies. Nam a tristique risus, et tincidunt lectus. Duis id metus orci. Ut a elit urna. Vivamus faucibus maximus odio facilisis tincidunt.\nProin sodales faucibus ipsum, non ornare metus finibus vel. Integer eget congue nisl. Nunc eu felis tellus. Ut iaculis elit eget tempus faucibus. Duis condimentum dui velit, eget volutpat purus consequat at. Aenean quam felis, suscipit sit amet eros in, scelerisque finibus massa. Suspendisse potenti. Duis tincidunt diam nec ipsum consequat, a porttitor augue semper. Praesent tincidunt in felis quis luctus. Nunc vitae urna tortor. In vehicula tincidunt congue. Suspendisse sollicitudin tortor sed semper commodo. In rhoncus ligula et pretium mollis. Etiam porta sapien a nisl lobortis, id aliquet risus condimentum. Aenean rhoncus nec lectus ac molestie.\nQuisque at tortor nec augue efficitur tristique. Sed rhoncus ultricies metus, eget fringilla dolor ultrices et. Etiam sit amet varius mauris. Proin hendrerit lorem quis magna molestie ultricies. Mauris id iaculis tortor, in suscipit ipsum. Nam erat orci, porttitor a vehicula eget, sollicitudin id orci. Aenean malesuada lacus et metus auctor gravida. Maecenas nunc dui, mattis eu iaculis sit amet, maximus vel mi. Vestibulum elementum lectus dolor. Pellentesque felis odio, pharetra at imperdiet quis, finibus vitae felis.', 'Son Khong Beo','https://images3.alphacoders.com/133/1335169.png');

INSERT INTO `news` (`new_id`,  `date` ,`title`, `description`, `content`, `author_name`, `image`) VALUES
(3, '2023-12-12', 'new car today',  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis mauris nibh, et bibendum magna pretium sed. Phasellus non enim in enim blandit euismod. Praesent eu enim varius, tincidunt quam sed, volutpat metus. Aliquam aliquam feugiat dolor a tincidunt. Maecenas nec nulla turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit lacus ut elementum finibus. Pellentesque hendrerit tellus ultrices, iaculis tellus id, sodales justo.\nNullam auctor suscipit nisl eu volutpat. Aliquam nisl dolor, aliquet eget justo id, congue euismod ex. Phasellus leo purus, scelerisque et lacus ut, luctus imperdiet ex. Vestibulum nec urna non nisi dictum viverra vitae quis nisl. Curabitur ultricies nisi non ante sodales auctor. In vitae tortor sed sapien euismod efficitur. Aliquam id scelerisque mauris. Fusce mattis nulla sapien. Phasellus eu aliquam massa, at lobortis ipsum. Phasellus rutrum luctus imperdiet. Donec porta malesuada faucibus. Pellentesque arcu nisl, tincidunt quis tellus nec, auctor condimentum nibh.\nAliquam rutrum sed odio iaculis vulputate. Duis porttitor a neque sit amet dictum. Morbi sed elit in lacus faucibus tristique. Maecenas vel sodales neque. Ut facilisis tellus at neque euismod ultricies. Nam a tristique risus, et tincidunt lectus. Duis id metus orci. Ut a elit urna. Vivamus faucibus maximus odio facilisis tincidunt.\nProin sodales faucibus ipsum, non ornare metus finibus vel. Integer eget congue nisl. Nunc eu felis tellus. Ut iaculis elit eget tempus faucibus. Duis condimentum dui velit, eget volutpat purus consequat at. Aenean quam felis, suscipit sit amet eros in, scelerisque finibus massa. Suspendisse potenti. Duis tincidunt diam nec ipsum consequat, a porttitor augue semper. Praesent tincidunt in felis quis luctus. Nunc vitae urna tortor. In vehicula tincidunt congue. Suspendisse sollicitudin tortor sed semper commodo. In rhoncus ligula et pretium mollis. Etiam porta sapien a nisl lobortis, id aliquet risus condimentum. Aenean rhoncus nec lectus ac molestie.\nQuisque at tortor nec augue efficitur tristique. Sed rhoncus ultricies metus, eget fringilla dolor ultrices et. Etiam sit amet varius mauris. Proin hendrerit lorem quis magna molestie ultricies. Mauris id iaculis tortor, in suscipit ipsum. Nam erat orci, porttitor a vehicula eget, sollicitudin id orci. Aenean malesuada lacus et metus auctor gravida. Maecenas nunc dui, mattis eu iaculis sit amet, maximus vel mi. Vestibulum elementum lectus dolor. Pellentesque felis odio, pharetra at imperdiet quis, finibus vitae felis.', 'Son Khong Gay','https://4kwallpapers.com/images/walls/thumbs_2t/13575.jpg');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- Chỉ mục cho bảng `brand_has_model`
--
ALTER TABLE `brand_has_model`
  ADD PRIMARY KEY (`brand_id`,`model_id`),
  ADD KEY `FK_model_has` (`model_id`);

--
-- Chỉ mục cho bảng `buy_history`
--
ALTER TABLE `buy_history`
  ADD PRIMARY KEY (`car_id`,`customer_id`),
  ADD KEY `FK_buy_history_customer` (`customer_id`);

--
-- Dumping data for table `buy_history`
--

INSERT INTO `buy_history` (`customer_id`, `car_id`, `date_time`, `color`, `wheel`) VALUES
(500, 1000, '2023-04-26', 'black', 'style1'),
(600, 1001, '2023-03-26', 'black', 'style1'),
(700, 1002, '2023-02-26', 'black', 'style1');
--
-- Chỉ mục cho bảng `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`car_id`);

--
-- Chỉ mục cho bảng `car_of_models`
--
ALTER TABLE `car_of_models`
  ADD PRIMARY KEY (`model_id`,`car_id`),
  ADD KEY `FK_car` (`car_id`);

--
-- Chỉ mục cho bảng `comment_rate`
--
ALTER TABLE `comment_rate`
  ADD PRIMARY KEY (`comment_id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Chỉ mục cho bảng `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`car_id`,`front`) USING BTREE;

--
-- Chỉ mục cho bảng `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`model_id`);

--
-- Chỉ mục cho bảng `write_comment_rate`
--
ALTER TABLE `write_comment_rate`
  ADD PRIMARY KEY (`car_id`,`customer_id`,`comment_id`),
  ADD KEY `FK_write_comment_rate_customer` (`customer_id`),
  ADD KEY `FK_write_comment_rate_comment` (`comment_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `comment_rate`
--
ALTER TABLE `comment_rate`
  MODIFY `comment_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `FK_admin_user` FOREIGN KEY (`admin_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `brand_has_model`
--
ALTER TABLE `brand_has_model`
  ADD CONSTRAINT `FK_brand_has` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_model_has` FOREIGN KEY (`model_id`) REFERENCES `models` (`model_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `buy_history`
--
ALTER TABLE `buy_history`
  ADD CONSTRAINT `FK_buy_history_car` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_buy_history_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `car_of_models`
--
ALTER TABLE `car_of_models`
  ADD CONSTRAINT `FK_car` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_model` FOREIGN KEY (`model_id`) REFERENCES `models` (`model_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `FK_customer_user` FOREIGN KEY (`customer_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `FK_image_car` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `write_comment_rate`
--
ALTER TABLE `write_comment_rate`
  ADD CONSTRAINT `FK_write_comment_rate_car` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_write_comment_rate_comment` FOREIGN KEY (`comment_id`) REFERENCES `comment_rate` (`comment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_write_comment_rate_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
