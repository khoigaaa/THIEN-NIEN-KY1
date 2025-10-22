"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">TNK</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Thiên Niên Kỷ</h1>
              <p className="text-xs text-muted-foreground">Khách Sạn 5 Sao</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Giới Thiệu
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Dịch Vụ
            </a>
            <a href="#rooms" className="text-foreground hover:text-primary transition-colors">
              Phòng Ốc
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Liên Hệ
            </a>
          </nav>

          {/* Contact & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:028.12345678"
              className="hidden sm:flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">028.12345678</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#about" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              Giới Thiệu
            </a>
            <a href="#services" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              Dịch Vụ
            </a>
            <a href="#rooms" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              Phòng Ốc
            </a>
            <a href="#contact" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              Liên Hệ
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
