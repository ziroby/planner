import './App.css';
import TaskLines from './TaskLines'
import VLine from './VLine'

import Svg from './Svg'
export default function TaskList({ width, height, title }) {
    var lineHeight = 20
    var colWidth = 20

    return <div class="tasklist">
        {title}
        <Svg width={width} height={height}>
            <TaskLines width={width} height={height} lineHeight={lineHeight}/>
            <VLine x={colWidth*0} height={height} y1={lineHeight} color="darkgray"/>
            <VLine x={colWidth*1} height={height} y1={lineHeight} color="darkgray"/>
            <VLine x={colWidth*2} height={height} y1={lineHeight} color="darkgray"/>
            <VLine x={colWidth*3} height={height} y1={lineHeight} color="darkgray"/>
        </Svg>
    </div>
}