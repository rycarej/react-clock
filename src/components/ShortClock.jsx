import React from "react";

class ShortClock extends React.Component {
    constructor() {
        super();

        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);

        this.state = {
            time: new Date(),
        };
    }

    getTime() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        const newTime = `${hours}:${minutes} ${ampm}`;
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

export default ShortClock;