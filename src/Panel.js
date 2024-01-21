import TaskList from "./TaskList";

export default function Panel({ width, height }) {
    return <div class="panel" style={{ minWidth: width }}>
        <div class="tasklistrow">
            <TaskList width={width / 2.5} height={height / 4} title="Home" />
            <TaskList width={width / 2.5} height={height / 4} title="Work" />
        </div>
    </div>
}