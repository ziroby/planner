import "./App.css"
import SunCalc from "suncalc"

export default function MoonPhaseText({ date }) {
    var phase = SunCalc.getMoonIllumination(date).phase
    phase = Math.round(phase * 28) / 28
    var text = phase == 0.0 ? "🌑︎"
        : phase < 0.25 ? "🌒︎"
            : phase == 0.25 ? "🌓︎"
                : phase < 0.5 ? "🌔︎"
                    : phase == 0.5 ? "🌕︎"
                        : phase < 0.75 ? "🌖︎"
                            : phase == 0.75 ? "🌗︎"
                                : "🌘︎"
    return <div>{text}</div>
}