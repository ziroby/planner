
import './App.css';

export default function Svg({ children, width, height }) {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={"0 0 " + width + " " + height}>
        {children}
    </svg>
}