import "./App.css"

export default function HLine({ width, height, color, y }) {
    return (
        <line x1="0" x2={width} y1={y} y2={y} stroke={color} />
    )
}