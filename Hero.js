import React from 'react'
import { BRAND } from './config'

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[68vh] md:h-[72vh] w-full bg-center bg-cover" style={{backgroundImage: "url('/hero.jpg')"}}>
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold">{BRAND.name}</h1>
            <p className="mt-4 text-lg md:text-2xl">{BRAND.slogan}</p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#products" className="px-6 py-3 bg-white text-black rounded-full font-medium">קנה עכשיו</a>
              <a href="#about" className="px-6 py-3 border border-white rounded-full">למד עוד</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
