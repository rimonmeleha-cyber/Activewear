import React from 'react'
import { BRAND } from './config'

export default function Layout({ children }) {
  return (
    <div dir="rtl" className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-4 text-sm text-slate-700">
              <a href="#products" className="hover:underline">חנות</a>
              <a href="#about" className="hover:underline">אודות</a>
              <a href="#values" className="hover:underline">ערכים</a>
            </nav>
          </div>
          <div className="text-lg font-semibold">{BRAND.name}</div>
          <div className="flex items-center gap-3">
            <button className="text-sm">חיפוש</button>
            <button className="text-sm">עגלת קניות</button>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm">© {new Date().getFullYear()} {BRAND.name}. כל הזכויות שמורות.</div>
          <div className="text-xs text-slate-500">תנאים | פרטיות | החזרות</div>
        </div>
      </footer>
    </div>
  )
}
