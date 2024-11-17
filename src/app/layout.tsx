import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Waalsforce",
  description: "AI Solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}