'use client'

export function CompanyWebsiteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Waalsforce
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">ホーム</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">サービス</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">会社概要</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              AIで未来を創造する
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-600">
              最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
            >
              お問い合わせ
            </a>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">サービス内容</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI開発支援",
                  description: "最新のAI技術を活用したシステム開発をサポートします。",
                },
                {
                  title: "コンサルティング",
                  description: "AI導入に関する戦略立案から実装までをサポートします。",
                },
                {
                  title: "技術研修",
                  description: "AI技術に関する社内研修プログラムを提供します。",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">会社概要</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "社名", value: "株式会社Waalsforce" },
                  { label: "設立", value: "2024年1月" },
                  { label: "所在地", value: "東京都渋谷区" },
                  { label: "事業内容", value: "AI開発支援、コンサルティング、技術研修" },
                ].map((item, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="font-bold text-gray-700 mb-1">{item.label}</div>
                    <div className="text-gray-600">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">お問い合わせ</h2>
            <div className="max-w-xl mx-auto text-center">
              <p className="mb-12 text-lg text-gray-600">
                AI開発やコンサルティングについてのご相談は、以下のボタンからお気軽にお問い合わせください。
              </p>
              <a 
                href="mailto:contact@waalsforce.com" 
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
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