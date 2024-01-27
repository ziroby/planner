import MedList from "./MedList";
import MoodDiary from "./MoodDiary";
import MoodDiaryBlanks from "./MoodDiaryBlanks";
import MoonPhase from "./MoonPhase";
import SunTimes from "./SunTimes";
import TaskList from "./TaskList";

const lat = 51.8855
const lon = 0.4154

export default function Panel({ width, height, date }) {
    return <div className="panel" style={{ minWidth: width }}>
        <div className="daterow">
            <div className="date">
                {date.toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" })}
            </div>
            <SunTimes date={date} lat={lat} lon={lon} />
            <MoonPhase date={date} />
        </div>
        <div className="tasklistrow">
            <TaskList width={width / 2.5} height={height / 2} title="Home" />
            <TaskList width={width / 2.5} height={height / 2} title="Work" />
        </div>
        <div className="tasklistrow">
            <MedList />
            <MoodDiaryBlanks width={width / 2.4} />
            <MoodDiary />
        </div>
    </div>
}