import React from 'react'
import { BRAND } from './config'

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold">על {BRAND.name}</h3>
          <p className="mt-4 text-slate-600">
            {BRAND.name} נולד מתוך צורך חשוב: בגדי ספורט צנועים שמכבדים את הגוף במובן המסורתי אך לא מוותרים על איכות, חומרים נושמים ועיצוב נקי.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border text-center">
              <div className="font-semibold">אחריות</div>
              <div className="text-sm text-slate-500">ייצור הוגן ובד איכותי</div>
            </div>
            <div className="p-4 rounded-xl border text-center">
              <div className="font-semibold">כיסוי</div>
              <div className="text-sm text-slate-500">גזרות לצניעות נוחה</div>
            </div>
            <div className="p-4 rounded-xl border text-center">
              <div className="font-semibold">נוחות</div>
              <div className="text-sm text-slate-500">תמיכה בתנועה</div>
            </div>
          </div>
        </div>
        <div className="aspect-video bg-slate-100 rounded-xl" />
      </div>
    </section>
  )
}
