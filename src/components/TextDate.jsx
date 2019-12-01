import React from "react";

class TextDate extends React.Component {
    constructor() {
        super();

        this.state = {
            time: new Date()
        };
    }

    getTime() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[this.state.time.getMonth()];
        let day = this.state.time.getDate();
        const year = this.state.time.getFullYear().toString().slice(2);
        switch(day.toString().slice(-1)) {
            case 1:
                day = `${day}st`;
                break;
            case 2:
                day = `${day}nd`;
                break;
            case 3:
                day = `${day}rd`;
                break;
            default:
                day = `${day}th`;
                break;
        }
        const newTime = {"month": month, "day": day, "year": year};
        return newTime;
    }

    render() {
        return(
            <div>
                <div className="date_container">
                    {this.getTime().month}<br/>
                    {this.getTime().day} {this.getTime().year}
                </div>
            </div>
            
        );
    }
}

export default TextDate;