import React, { useEffect, useState } from "react"
import "./style/BusinessHours.css"

const schedule = {
  Saturday: { open: 8, close: 21 },
  Sunday: { open: 8, close: 21 },
  Monday: { open: 8, close: 21 },
  Tuesday: { open: 8, close: 21 },
  Wednesday: { open: 8, close: 21 },
  Thursday: { open: 8, close: 21 },
  Friday: null
}

const dayOrder = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const dayArabic = {
  Saturday: "السبت",
  Sunday: "الأحد",
  Monday: "الاثنين",
  Tuesday: "الثلاثاء",
  Wednesday: "الأربعاء",
  Thursday: "الخميس",
  Friday: "الجمعة"
}

const BusinessHours = ({ language = "en" }) => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const todayName = dayOrder[now.getDay()]
  const todaySchedule = schedule[todayName]
  const hour = now.getHours()
  const minute = now.getMinutes()

  let status = "Closed"
  let countdown = ""

  // OPEN LOGIC
  if (todaySchedule && hour >= todaySchedule.open && hour < todaySchedule.close) {
    const minutesLeft = (todaySchedule.close - hour - 1) * 60 + (60 - minute)
    status = minutesLeft <= 60 ? "Closing Soon" : "Open"
  } 
  else {
    // FIND NEXT OPEN DAY
    let nextDayIndex = dayOrder.indexOf(todayName)
    let nextDay = null

    for (let i = 1; i <= 7; i++) {
      const d = dayOrder[(nextDayIndex + i) % 7]
      if (schedule[d]) {
        nextDay = d
        break
      }
    }

    if (nextDay) {
      countdown =
        language === "ar"
          ? `يفتح ${dayArabic[nextDay]} الساعة 08:00`
          : `Opens ${nextDay} at 08:00`
    }
  }

  const t = {
    Open: language === "ar" ? "مفتوح الآن" : "Open Now",
    "Closing Soon": language === "ar" ? "سيغلق قريبًا" : "Closing Soon",
    Closed: language === "ar" ? "استراحة" : "Closed"
  }

  return (
    <section className="hours-card">
      <h2 className={`hours-status ${status.toLowerCase().replace(" ", "-")}`}>
        {t[status]}
      </h2>

      {status === "Closed" && <p className="hours-countdown">{countdown}</p>}

      <div className="hours-list">
        {Object.keys(schedule).map(day => (
          <div key={day} className="hours-row">
            <span className="day-name">
              {language === "ar" ? dayArabic[day] : day}
            </span>

            <span className="day-time">
              {schedule[day]
                ? `${schedule[day].open}:00 - ${schedule[day].close}:00`
                : language === "ar" ? " يوم استراحة " : "Closed"}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BusinessHours
