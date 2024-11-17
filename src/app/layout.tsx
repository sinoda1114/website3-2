import '@/styles/globals.css'

export const metadata: Metadata = {
  title: "Waalsforce - AIソリューション",
  description: "最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます",
  keywords: ["AI", "コンサルティング", "生成AI", "ビジネスソリューション"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}