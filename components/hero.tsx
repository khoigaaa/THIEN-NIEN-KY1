export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">Chào Mừng Đến</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Thiên Niên Kỷ
              </h1>
              <p className="text-xl text-muted-foreground">Khách Sạn 5 Sao Hàng Đầu Tại TP.HCM</p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              Trải nghiệm sự sang trọng và tiện nghi tuyệt vời tại khách sạn 5 sao Thiên Niên Kỷ. Với vị trí đắc địa tại
              trung tâm thành phố, chúng tôi mang đến cho bạn những dịch vụ cao cấp và không gian nghỉ dưỡng hoàn hảo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors">
                Đặt Phòng Ngay
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Tìm Hiểu Thêm
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <img
              src="/luxury-hotel-lobby-interior-elegant.jpg"
              alt="Thiên Niên Kỷ Hotel Lobby"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
