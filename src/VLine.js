import "./App.css"

export default function VLine({ y1, height, color, x }) {
    return (
        <line y1={y1} y2={height} x1={x} x2={x} stroke={color} />
    )
}