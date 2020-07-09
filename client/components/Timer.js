import React from "react";


class Timer extends React.Component {
    constructor (props) {
        super(props)
        this.startTimer = this.startTimer.bind(this)
        this.handleStartTimer=this.handleStartTimer.bind(this)
        this.state = {
            count,
            timer: null
        }
    }
    startTimer(timeLeft) {
        clearInterval(this.state.timer)
        let timer = setInterval(()=>{
            let timeLeft = this.state.timeLeft - 1
            if(timeLeft ===0) {
                clearInterval(timer)
            } this.setState({
                timeLeft: timeLeft
            })
        }, 1000)
        return this.setStete({timeLeft: timeLeft, timer: timer})
    }
    handleStartTimer() {
        return this.state.startTimer(this.state.timeLeft)
    }

    render() {
        return (
            <div>
            <button onClick={this.handleStartTimer}></button>
            
            <h4>{this.timeleft}</h4>           
             </div>
        )
    }
}
export default (Timer);
