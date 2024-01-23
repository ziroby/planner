import './App.css';
import Panel from './Panel';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

Date.prototype.addDays = function (days) {
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
            <Panel width={width / 2} height={height} date={date.addDays(0)} />
            <Panel width={width / 2} height={height} date={date.addDays(1)} />
        </div>
        <div class="page">
            <Panel width={width / 2} height={height} date={date.addDays(2)} />
            <Panel width={width / 2} height={height} date={date.addDays(3)} />
        </div>
    </div>
}