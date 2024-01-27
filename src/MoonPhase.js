import "./App.css"
import SunCalc from "suncalc"
import MoonPhaseText from "./MoonPhaseText"

export default function MoonPhase({date}) {
    var phase = SunCalc.getMoonIllumination(date).phase
    phase = Math.round(phase*28)/28
    var illumination = SunCalc.getMoonIllumination(date).illumination
    return <div className="moonphase"><MoonPhaseText date={date}/></div>
}