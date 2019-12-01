import React from "react";

class DefaultDate extends React.Component {
    constructor() {
        super();

        this.state = {
            time: new Date()
        };
    }

    getTime() {
        let month = this.state.time.getMonth() + 1;
        let day = this.state.time.getDate();
        let year = this.state.time.getFullYear();
        month = month < 10 ? '0'+month : month;
        day = day < 10 ? '0'+day : day;
        const newTime = `${month}/${day}/${year}`;
        return newTime;
    }

    render() {
        return(
            <div className="clock_container">{this.getTime()}</div>
        );
    }
}

export default DefaultDate;