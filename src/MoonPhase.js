import "./App.css"
import SunCalc from "suncalc"
import MoonPhaseText from "./MoonPhaseText"

export default function MoonPhase({date}) {
    return <span className="moonphase"><MoonPhaseText date={date}/></span>
}