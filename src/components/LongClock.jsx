import React from "react";

class LongClock extends React.Component {
    constructor() {
        super();
        
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);

        this.state = {
            time: new Date()
        };
    }

    getTime() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        seconds = seconds < 10 ? '0'+seconds : seconds;
        const newTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        return newTime;
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return(
            <div className="clock_container">{this.getTime()}</div>
        );
    }
}

export default LongClock;