import SunCalc from "suncalc"
import "./App.css"

export default function SunTimes({date, lat, lon}) {
    var times = SunCalc.getTimes(date, lat, lon)

    return <table>
        <tr><td>sun rise:</td><td>{times.sunrise.getHours() + ":" + times.sunrise.getMinutes()}</td></tr>
        <tr><td>sun set:</td><td>{times.sunset.getHours() + ":" + times.sunset.getMinutes()}</td></tr>
    </table>
}