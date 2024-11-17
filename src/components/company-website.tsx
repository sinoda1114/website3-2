'use client'

// UIコンポーネントのインポートを一時的にコメントアウト
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function CompanyWebsiteComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Waalsforce</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home">ホーム</a></li>
              <li><a href="#services">サービス</a></li>
              <li><a href="#about">会社概要</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <h1>Welcome to Next.js</h1>
      </main>
    </div>
  )
}