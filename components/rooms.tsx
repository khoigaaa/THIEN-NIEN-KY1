export default function Rooms() {
  const rooms = [
    {
      name: "Phòng Tiêu Chuẩn",
      price: "2.500.000",
      image: "/luxury-hotel-standard-room.png",
      features: ["Giường đôi hoặc đơn", "Phòng tắm hiện đại", "Tivi màn hình phẳng", "Minibar"],
    },
    {
      name: "Phòng Deluxe",
      price: "4.500.000",
      image: "/luxury-hotel-deluxe-room-elegant.jpg",
      features: ["Giường King size", "Bồn tắm spa", "Tầm nhìn thành phố", "Phòng khách riêng"],
    },
    {
      name: "Suite Tổng Thống",
      price: "8.500.000",
      image: "/luxury-hotel-presidential-suite-premium.jpg",
      features: ["2 phòng ngủ", "Phòng khách rộng", "Bồn tắm sang trọng", "Dịch vụ butler riêng"],
    },
  ]

  return (
    <section id="rooms" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Phòng Ốc</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Các Loại Phòng Sang Trọng</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{room.name}</h3>
                <p className="text-primary text-lg font-semibold mb-4">Từ {room.price}đ/đêm</p>
                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/70">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors">
                  Xem Chi Tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
