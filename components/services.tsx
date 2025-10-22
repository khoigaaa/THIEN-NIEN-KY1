import { Wifi, Utensils, Dumbbell, Waves, ConciergeBell as Concierge, Sparkles } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Wifi,
      title: "Internet Tốc Độ Cao",
      description: "WiFi 5G miễn phí trong toàn bộ khách sạn",
    },
    {
      icon: Utensils,
      title: "Nhà Hàng Cao Cấp",
      description: "Ẩm thực quốc tế và Việt Nam chất lượng 5 sao",
    },
    {
      icon: Dumbbell,
      title: "Phòng Tập Gym",
      description: "Trang thiết bị hiện đại, huấn luyện viên chuyên nghiệp",
    },
    {
      icon: Waves,
      title: "Hồ Bơi Ngoài Trời",
      description: "Hồ bơi sang trọng với tầm nhìn toàn cảnh thành phố",
    },
    {
      icon: Concierge,
      title: "Dịch Vụ Concierge",
      description: "Hỗ trợ 24/7 cho mọi nhu cầu của bạn",
    },
    {
      icon: Sparkles,
      title: "Spa & Wellness",
      description: "Dịch vụ spa thư giãn và chăm sóc sức khỏe toàn diện",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Dịch Vụ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Tiện Nghi & Dịch Vụ Cao Cấp</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
