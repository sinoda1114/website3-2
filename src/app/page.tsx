'use client'

import { CompanyWebsiteComponent } from "@/components/company-website"
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <CompanyWebsiteComponent />
      <div className="container mx-auto px-4 py-8 text-center">
        <Link 
          href="/legal/tokushoho" 
          className="text-sm text-gray-600 hover:text-gray-900 underline"
        >
          特定商取引法に基づく表記
        </Link>
      </div>
    </div>
  )
}