export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">TNK</span>
              </div>
              <div>
                <h3 className="font-bold">Thiên Niên Kỷ</h3>
                <p className="text-xs opacity-70">Khách Sạn 5 Sao</p>
              </div>
            </div>
            <p className="text-sm opacity-80">Trải nghiệm sang trọng tuyệt vời tại TP.HCM</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:opacity-100 transition-opacity">
                  Phòng Ốc
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Đặt Phòng
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Nhà Hàng
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Spa & Wellness
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Sự Kiện
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên Hệ</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📍 123 Đồng Khởi, Q1, TPHCM</li>
              <li>
                📞{" "}
                <a href="tel:028.12345678" className="hover:opacity-100 transition-opacity">
                  028.12345678
                </a>
              </li>
              <li>
                ✉️{" "}
                <a href="mailto:info@thiennieky.com" className="hover:opacity-100 transition-opacity">
                  info@thiennieky.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>&copy; 2025 Khách Sạn Thiên Niên Kỷ. Tất cả quyền được bảo lưu.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Chính Sách Bảo Mật
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                Điều Khoản Sử Dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
