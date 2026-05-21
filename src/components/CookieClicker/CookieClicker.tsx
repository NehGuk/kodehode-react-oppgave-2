import "./CookieClicker.css"
import cookie from "../../../public/cookie.png"
import { useState } from "react"

export default function CookieClicker() {
  const [points, setPoints] = useState(0)
  const handleClick = () => {
    setPoints(prev => prev + 1)
  }

  return (
    <section>
    <h2>Cookie Clicker</h2>
    <button className="cookie-btn" onClick={handleClick}><img className="cookie" src={cookie} /></button>
    <p>Points: {points}</p>
    </section>
  )
}