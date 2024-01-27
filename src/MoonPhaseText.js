import "./App.css"
import SunCalc from "suncalc"

export default function MoonPhaseText({ date }) {
    var phase = SunCalc.getMoonIllumination(date).phase
    phase = Math.round(phase * 28) / 28
    var symbol =
        phase == 0.0 ? "🌑︎"
            : phase < 0.25 ? "🌒︎"
                : phase == 0.25 ? "🌓︎"
                    : phase < 0.5 ? "🌔︎"
                        : phase == 0.5 ? "🌕︎"
                            : phase < 0.75 ? "🌖︎"
                                : phase == 0.75 ? "🌗︎"
                                    : "🌘︎"
    var text =
        phase == 0.0 ? "new moon"
            : phase < 0.25 ? "waxing cresent"
                : phase == 0.25 ? "first quarter"
                    : phase < 0.5 ? "waxing gibous"
                        : phase == 0.5 ? "full moon"
                            : phase < 0.75 ? "waning gibous"
                                : phase == 0.75 ? "last quarter"
                                    : "waning cresent"

    return <table><tbody><tr><td align="center">{symbol}</td></tr>
        <tr><td align="center">{text}</td></tr></tbody></table>
}