import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import "./AboutUs.css";

export class AboutUs extends Component {
  static propTypes = {

  }
  
  render() {
    return (
      <div>
          <h1 className='title-container'>Về chúng tôi</h1>

          <div className='main-container'>
            <div className='rows'>
              <p className='text-1'>Theo như đánh giá của người dùng, 
                đây là một trong những website mua bán trực tuyến uy tín và chất lượng nhất Việt Nam. 
                Vậy chúng tôi có những ưu điểm gì mà được người dùng đánh giá cao đến như vậy. Bài viết này, 
                bạn sẽ được biết lý do chính xác.</p> 

              <h2 className='heading-2'>Giới thiệu về chúng tôi</h2>

              <p className='text-1'>Car Shop là một trong những website hỗ trợ mua bán ô tô tại Việt Nam. 
                Khi mà chúng tôi nhận thấy được nhu cầu sử dụng dịch vụ trong nước ngày càng tăng. 
                Các chuyên gia cùng với các hãng xe hàng đầu đã bắt tay với những kỹ thuật viên IT chuyên 
                nghiệp đã xây dựng lên website này.</p>

                <img className='image-container' src="https://i.pinimg.com/originals/e0/b6/19/e0b619bb4def29cc007fba6c9b74cf99.jpg" alt='images'/>

                <p className='text-1'>Ngay từ đầu xây dựng, Car Shop đã có mục đích trở thành website mua bán ô tô hàng đầu Việt Nam. 
                  Cho nên chúng tôi đã đầu tư rất nhiều công sức, tiền bạc cộng với tâm huyết. 
                  Để xây dựng lên website như ngày hôm nay. Khi được rất nhiều người dùng đánh giá cao và 
                  truy cập vào mỗi ngày để tìm các thông tin về ô tô mà mình cần.</p>

                  <p className='text-1'>Ở thời điểm hiện tại, chúng tôi đã hoàn thành được một phần trong mục tiêu của mình. 
                  Khi thương hiệu Car Shop được khá nhiều người biết đến. Đương nhiên trong tương lai, 
                  chúng tôi cũng sẽ cố gắng phát triển hơn nữa. Để xây dựng lên một website ô tô hàng đầu với 
                  uy tín và chất lượng cao nhất.</p>    

                  <h2 className='heading-2'>Giao diện của trang web</h2> 

                  <p className='text-1'>Giao diện của Car Shop được người dùng đánh giá là cực kỳ dễ dàng sử dụng. 
                  Bởi trước khi xây dựng, chúng tôi đã khảo sát hành vi của người dùng khá nhiều. 
                  Để Car Shop có thể cho ra một giao diện website cực kỳ khoa học và thông minh.</p>

                  <p className='text-1'>Khi truy cập vào website, 
                  bạn sẽ thấy bố cục được chia thành nhiều mục khác nhau. 
                  Điều này sẽ giúp bạn có thể tìm được chức năng mà mình cần sử dụng nhanh hơn. 
                  Thêm vào đó, các chức năng quan trọng luôn được chúng tôi làm nổi bật hơn.</p>

                  <p className='text-1'>Màu sắc được chúng tôi lựa chọn cũng cực kỳ đẹp mắt, 
                  cho bạn những trải nghiệm cao nhất khi sử dụng. Cũng như bạn sẽ không bao giờ bị mỏi mắt, 
                  nếu như nhìn quá lâu vào màn hình để sử dụng các dịch vụ của chúng tôi.</p>

                  <h2 className='heading-2'>Các chức năng của trang web</h2> 

                  <p className='text-1'>Nhắc đến Car Shop thì chắc chắn phải nói đến những 
                  chức năng mà chúng tôi cung cấp miễn phí cho mọi người sử dụng. 
                  Bởi hiện tại, khi vào website, bạn có thể sử dụng các chức năng bổ ích sau:</p>

                  <ul>
                    <li>Trang chủ: Tại đây bạn sẽ được đọc những tin tức, 
                      mẫu sản phẩm mới nhất ở toàn bộ các hãng xe trên thế giới. 
                      Thêm vào đó, tin tức mà chúng tôi cập nhật cũng khá là đa dạng và đầy đủ. 
                      Giúp bạn biết được tình hình chuyển động của thế giới xe như thế nào</li>

                      <li>Tin tức: Tại đây bạn sẽ được đọc những tin tức. Tin tức mà chúng tôi cập nhật cũng khá là đa dạng và đầy đủ. 
                      Giúp bạn biết được tình hình chuyển động của thế giới xe như thế nào.</li>

                      <li>Sản phẩm: Tại đây bạn sẽ xem được các mẫu sản phẩm. Bạn cũng có thể thực hiện mua bán ở đây.</li>
                  </ul>

                  <h2 className='heading-2'>Tổng kết</h2> 

                  <p className='text-1'>Trên đây mà đã được giới thiệu về trang website khá chi tiết và đầy đủ. 
                  Cũng như biết các chức năng mà mình có thể sử dụng miễn phí khi truy cập vào đây. Bạn có thể thấy rằng, 
                  CarShop chính là website hàng đầu ở thời điểm hiện tại. Một địa chỉ mà bạn nên truy cập, 
                  nếu muốn biết tin tức, sản phẩm … với chất lượng cao nhất.</p>

                  <ul className='navbar mb-0 mt-2 p-0 d-flex justify-content-center'>
                    <li className='active nav-item menu-item '>
                      <a href="#">Về chúng tôi</a>
                    </li>

                    <li className='active nav-item menu-item '>
                      <a href="#">Điều khoản</a>
                    </li>

                    <li className='active nav-item menu-item '>
                      <a href="#">Chính sách</a>
                    </li>

                    <li className='active nav-item menu-item '>
                      <a href="#">Liên hệ</a>
                    </li>

                    <li className='active nav-item menu-item '>
                      <a href="#">Bản quyền</a>
                    </li>

                    <li className='active nav-item menu-item '>
                      <a href="#">Tuyển dụng</a>
                    </li>

                    <li className='active nav-item menu-item '>
                      <a href="#">Giải đáp câu hỏi</a>
                    </li>
                  </ul>
            </div>
          </div>  

      </div>
    )
  }
}

export default AboutUs
