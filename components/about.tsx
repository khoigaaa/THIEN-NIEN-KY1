export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 order-2 md:order-1">
            <img
              src="/luxury-hotel-room-elegant-design.jpg"
              alt="Phòng Khách Sạn Thiên Niên Kỷ"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Về Chúng Tôi</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Trải Nghiệm Sang Trọng Tuyệt Vời
              </h2>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Khách sạn Thiên Niên Kỷ là biểu tượng của sự sang trọng và tinh tế tại TP.HCM. Với hơn 20 năm kinh nghiệm
              trong ngành du lịch, chúng tôi cam kết mang đến cho mỗi khách hàng những trải nghiệm không quên.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Vị Trí Đắc Địa</h3>
                  <p className="text-foreground/70">Nằm tại trung tâm Quận 1, gần các điểm du lịch nổi tiếng</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dịch Vụ Cao Cấp</h3>
                  <p className="text-foreground/70">Đội ngũ nhân viên chuyên nghiệp, tận tâm phục vụ 24/7</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Tiện Nghi Hiện Đại</h3>
                  <p className="text-foreground/70">Trang thiết bị và công nghệ tiên tiến nhất</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
