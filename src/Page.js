import './App.css';
import Panel from './Panel';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function Page() {
    const wsize = getWindowDimensions();
    const { width, height } = wsize

    return <div >
        <div class="page">
            <Panel width={width / 2} height={height} title="Work" />
            <Panel width={width / 2} height={height} title="Home" />
        </div>
    </div>
}