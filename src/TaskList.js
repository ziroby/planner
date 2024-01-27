import './App.css';
import TaskLines from './TaskLines'
import VLine from './VLine'

import Svg from './Svg'
export default function TaskList({ width, height, title }) {
    var lineHeight = 20
    var colWidth = 15

    return <div className="tasklist">
        {title}
        <Svg width={width} height={height}>
            <TaskLines width={width} height={height} lineHeight={lineHeight}/>
            <VLine x={colWidth*0} height={height} lineHeight={lineHeight} color="darkgray"/>
            <VLine x={colWidth*1} height={height} lineHeight={lineHeight} color="darkgray"/>
            <VLine x={colWidth*2} height={height} lineHeight={lineHeight} color="darkgray"/>
            <VLine x={colWidth*3} height={height} lineHeight={lineHeight} color="darkgray"/>
            <VLine x={width - 1} height={height} lineHeight={lineHeight} color="darkgray"/>
            <text style={{font: lineHeight + "px"}} x={colWidth * 3.25}  y={lineHeight - 1}>Plan Day</text>
        </Svg>
    </div>
}