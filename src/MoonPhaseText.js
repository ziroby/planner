import "./App.css"
import SunCalc from "suncalc"

export default function MoonPhaseText({ date }) {
    var phase = SunCalc.getMoonIllumination(date).phase
    phase = Math.round(phase * 28) / 28
    var text = phase == 0.0 ? "New Moon" :
        phase < 0.25 ? "Waxing Cresent" :
            phase == 0.25 ? "First Quarter" :
                phase < 0.5 ? "Waxing Gibbous" :
                    phase == 0.5 ? "Full Moon" :
                        phase < 0.75 ? "Waning Gibbous" :
                            phase == 0.75 ? "Last Quarter" :
                                "Waning Crescent"
    return <div>{text}</div>
}