import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap container">
        <div>
          <div className="row">
            {/* <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Top Products</h4>
              <ul>
                <li><a href="#">Managed Website</a></li>
                <li><a href="#">Manage Reputation</a></li>
                <li><a href="#">Power Tools</a></li>
                <li><a href="#">Marketing Service</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Brand Assets</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div> */}
            <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>ĐIỀU HƯỚNG</h4>
              <ul class="ftr-links-sub">
                <li><a href="#" rel="nofollow">Trang chủ</a></li>
                <li><a href="#" rel="nofollow">Sản phẩm</a></li>
                <li><a href="#" rel="nofollow">Blog &amp; Delivery</a></li>
                <li><a href="#" rel="nofollow">Liên hệ</a></li>
                <li><a href="#" rel="nofollow">Hướng dẫn</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 single-footer-widget">
              <h4>CHÍNH SÁCH MUA HÀNG</h4>
              <ul class="ftr-links-sub">
                <li><a href="#" rel="nofollow">Chính sách bảo hành, đổi trả</a></li>
                <li><a href="#" rel="nofollow">Chính sách bảo mật thông tin</a></li>
                <li><a href="#" rel="nofollow">Chính sách giao nhận và thanh toán</a></li>
                <li><a href="#" rel="nofollow">Hướng dẫn mua hàng</a></li>
                <li><a href="#" rel="nofollow">Đăng ký thành viên</a></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 single-footer-widget">
              <h4 class="ftr-hdr">THEO DÕI CHÚNG TÔI QUA</h4>
              <ul>
                <li>
                 <a href="#" title="Facebook" onclick="_gaq.push(['_trackSocial', 'Facebook', 'Follow', 'Footer', 'undefined', 'True']);">
                  <img width={24} height={24} alt="Like us on Facebook" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png" />
                </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom row align-items-center">
              <p>&copy; Math Solver | <a href="#" rel="nofollow">Privacy Policy</a> | <a href="#" rel="nofollow">Terms of Use</a> | <a href="#" rel="nofollow">Terms of Sale</a></p>
              <p>Email: mathsolver@gmail.com</p>
              <p>Địa chỉ: Số 01 Võ Văn Ngân, phường Linh Chiểu, thành phố Thủ Đức, thành phố Hồ Chí Minh.</p>
              <p>Người đại diện theo pháp luật: Trương Xuân Thi.</p>
              <p>Mã số thuế: xxx-xxx-xxx</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;