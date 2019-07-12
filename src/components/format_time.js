import React, {Component} from 'react';

class FormatTime extends Component{
    constructor(props) {
        super(props);

        this.timerStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '295px'
        }

    }
    millisecondsToTime(){
        const {elapsed} = this.props;
        const sec = (elapsed/1000);
        const min = (sec/60);

        return {
            hour: Math.floor(min /60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(elapsed % 100)
        }
    }
    render(){
        const {hour, min, sec, ms} = this.millisecondsToTime();
        return <div style={this.timerStyle}>{hour}:{min}:{sec}:{ms}</div>;

    }
}

export default FormatTime;