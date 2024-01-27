import SunCalc from "suncalc"
import "./App.css"

export default function SunTimes({date, lat, lon}) {
    var times = SunCalc.getTimes(date, lat, lon)

    return <table><tbody>
        <tr><td>sunrise:</td><td>{times.sunrise.getHours() + ":" + times.sunrise.getMinutes()}</td></tr>
        <tr><td>sunset:</td><td>{times.sunset.getHours() + ":" + times.sunset.getMinutes()}</td></tr>
    </tbody></table>
}