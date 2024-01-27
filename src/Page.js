import React from 'react';
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

export default class Page extends React.Component {
    render() {
        const wsize = getWindowDimensions();
        const { width, height } = wsize

        const date = new Date()

        return <div >
            <div className="page">
                <Panel height={height} width={width/2} date={date.addDays(2)} />
                <Panel height={height} width={width/2} date={date.addDays(3)} />
            </div>
            {/* <div class="page">  */}
            {/* <Panel width={width / 2} height={height} date={date.addDays(3)} /> */}
            {/* </div> */}
        </div>
    }
    // From: https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
    resize = () => this.forceUpdate()

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }
}