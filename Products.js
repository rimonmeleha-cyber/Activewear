import React from 'react'

const sample = [
  { id:1, name:'טייץ כיסוי + חצאית', price:'₪219' },
  { id:2, name:'חצאית‑ספורט מידי', price:'₪199' },
  { id:3, name:'חולצת שכבה ארוכה', price:'₪169' },
  { id:4, name:'קרדיגן אימון קל', price:'₪189' },
  { id:5, name:'טופ תומך צנוע', price:'₪159' },
  { id:6, name:'סט יוגה מלא', price:'₪529' },
]

export default function Products() {
  return (
    <section id="products" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">מוצרים נבחרים</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map(p => (
          <article key={p.id} className="rounded-xl overflow-hidden border hover:shadow-md transition">
            <div className="aspect-[4/5] bg-slate-100" />
            <div className="p-4">
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-slate-500 mt-1">{p.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
