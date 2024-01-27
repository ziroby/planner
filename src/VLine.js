import "./App.css"

export default function VLine({ lineHeight, height, color, x }) {
    var y2 = (Math.floor(height / lineHeight)) * lineHeight
    return (
        <line y1={0} y2={y2} x1={x} x2={x} stroke={color} />
    )
}