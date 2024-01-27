import './App.css'

import HLine from './HLine'

export default function TaskLines({width, height, lineHeight}) {
    var baseLines = []
    for (var i = 0; i < height; i += lineHeight) {
        baseLines.push(i)
    }

    return baseLines.map(baseLine => (
        <HLine key={baseLine} width={width} height={lineHeight} y={baseLine} color="darkgray"/>
    ))
}