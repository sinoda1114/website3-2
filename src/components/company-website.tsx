'use client'

import Image from 'next/image'

export function CompanyWebsiteComponent() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
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

      <main className="pt-20">
        <section id="home" className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-6">AIで未来を創造する</h2>
          <p className="text-xl mb-8">
            最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            お問い合わせ
          </a>
        </section>
      </main>
    </div>
  )
}