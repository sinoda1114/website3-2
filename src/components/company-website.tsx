'use client'

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
        <section id="home" className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold mb-8">AIで未来を創造する</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors"
          >
            お問い合わせ
          </a>
        </section>

        <section id="services" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">サービス内容</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">AI開発支援</h3>
                <p>最新のAI技術を活用したシステム開発をサポートします。</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">コンサルティング</h3>
                <p>AI導入に関する戦略立案から実装までをサポートします。</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">技術研修</h3>
                <p>AI技術に関する社内研修プログラムを提供します。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">会社概要</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="font-bold">社名</div>
                <div>株式会社Waalsforce</div>
                <div className="font-bold">設立</div>
                <div>2024年1月</div>
                <div className="font-bold">所在地</div>
                <div>東京都渋谷区</div>
                <div className="font-bold">事業内容</div>
                <div>AI開発支援、コンサルティング、技術研修</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">お問い合わせ</h2>
            <div className="max-w-xl mx-auto text-center">
              <p className="mb-8">
                AI開発やコンサルティングについてのご相談は、以下のボタンからお気軽にお問い合わせください。
              </p>
              <a 
                href="mailto:contact@waalsforce.com" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors"
              >
                メールでのお問い合わせ
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Waalsforce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}