import './App.css';
import Panel from './Panel';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

export default function Page() {
    const wsize = getWindowDimensions();
    const { width, height } = wsize

    const date = new Date()

    return <div >
        <div class="page">
            <Panel width={width / 2} height={height} title="Work" date={date} />
            <Panel width={width / 2} height={height} title="Home" date={date.addDays(4)}/>
        </div>
    </div>
}