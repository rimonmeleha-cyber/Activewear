import React from 'react'

export default function Values() {
  return (
    <section id="values" className="py-12">
      <h3 className="text-2xl font-semibold mb-4">ערכי המותג</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 rounded-xl border">
          <div className="font-semibold">איזון</div>
          <div className="text-sm text-slate-500">פרופורציות נקיות ושכבות חכמות.</div>
        </div>
        <div className="p-4 rounded-xl border">
          <div className="font-semibold">אחריות</div>
          <div className="text-sm text-slate-500">תהליכי ייצור מוסריים ובדים איכותיים.</div>
        </div>
        <div className="p-4 rounded-xl border">
          <div className="font-semibold">פשטות</div>
          <div className="text-sm text-slate-500">קווים נקיים, מינימליזם מודרני.</div>
        </div>
      </div>
    </section>
  )
}
