export default function Home() {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Waalsforce</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-primary transition-colors">ホーム</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">サービス</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">会社概要</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">お問い合わせ</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <h1>Welcome to Next.js</h1>
        </main>
      </main>
    )
  }