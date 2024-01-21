import "./App.css"

export default function VLine({ width, height, color, x }) {
    return (
        <line y1="0" y2={height} x1={x} x2={x} stroke={color} />
    )
}