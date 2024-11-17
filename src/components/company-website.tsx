'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Mail, Phone, MapPin, Brain, Bot, ChevronRight } from 'lucide-react'

export function CompanyWebsiteComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
        <section id="home" className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_fx_%20(10).jpg-Z804UxmDu05QWg9Anf7oPtlAXz3dYM.jpeg"
              alt="AI Technology Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h2 className="text-5xl font-bold mb-6">AIで未来を創造する</h2>
            <p className="text-xl mb-8 max-w-2xl">
              最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              お問い合わせ
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">サービス</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Brain className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">生成AIソリューションの提供</h3>
                  <p>
                    最新の生成AI技術を活用し、お客様のビジネスに最適なソリューションを提供します。
                    テキスト生成、画像生成、音声生成など、様々な分野でAIの力を活用し、
                    業務効率化や新しい価値の創造をサポートします。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Bot className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">AIの導入コンサルティング</h3>
                  <p>
                    AI導入の戦略立案から実装まで、包括的なコンサルティングサービスを提供します。
                    お客様のビジネスニーズを深く理解し、最適なAIソリューションの選定と
                    スムーズな導入をサポートします。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">会社概要</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">基本情報</h3>
                  <dl className="space-y-4">
                    <div className="flex gap-4">
                      <dt className="font-medium min-w-32">会社名</dt>
                      <dd>株式会社Waalsforce</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="font-medium min-w-32">代表者</dt>
                      <dd>篠田 敬廣</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="font-medium min-w-32">設立日</dt>
                      <dd>2024年05月07日</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="font-medium min-w-32">資本金</dt>
                      <dd>1,000,000円</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="font-medium min-w-32">業種</dt>
                      <dd>サービス業（コンサルティング）</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">所在地</h3>
                  <address className="not-italic">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <p>
                        〒150-0043<br />
                        東京都渋谷区道玄坂１丁目１０番８号<br />
                        渋谷道玄坂東急ビル２Ｆ－Ｃ
                      </p>
                    </div>
                  </address>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">お問い合わせ</h2>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">
                        お名前
                      </label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">
                        メールアドレス
                      </label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="block font-medium">
                        会社名
                      </label>
                      <Input id="company" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block font-medium">
                        お問い合わせ内容
                      </label>
                      <Textarea id="message" rows={6} required />
                    </div>
                    <Button type="submit" className="w-full">
                      送信する
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-bold mb-4">株式会社Waalsforce</h2>
              <address className="not-italic space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>東京都渋谷区道玄坂１丁目１０番８号</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>03-XXXX-XXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@waalsforce.co.jp</span>
                </div>
              </address>
            </div>
            <div className="text-sm">
              <p>&copy; 2024 Waalsforce Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}