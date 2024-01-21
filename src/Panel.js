import MedList from "./MedList";
import MoonPhase from "./MoonPhase";
import TaskList from "./TaskList";

export default function Panel({ width, height, date }) {
    return <div class="panel" style={{ minWidth: width }}>
        <div class="daterow">
            <div class="date">
                {date.toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" })}
            </div>
            <MoonPhase date={date}/>
        </div>
        <div class="tasklistrow">
            <TaskList width={width / 2.5} height={height / 2} title="Home" />
            <TaskList width={width / 2.5} height={height / 2} title="Work" />
        </div>
        <div class="tasklistrow">
            <MedList />
        </div>
    </div>
}