import MedList from "./MedList";
import TaskList from "./TaskList";

export default function Panel({ width, height }) {
    return <div class="panel" style={{ minWidth: width }}>
        <h1>Sat Dec 1</h1>
        <div class="tasklistrow">
            <TaskList width={width / 2.5} height={height / 2} title="Home" />
            <TaskList width={width / 2.5} height={height / 2} title="Work" />
        </div>
        <div class="tasklistrow">
             <MedList/>
        </div>
    </div>
}