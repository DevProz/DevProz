import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        seconds: 30,
    }

//     componentDidMount() {
//         this.myInterval = setInterval(() => {
    
    //             if (seconds > 0) {
        //                 this.setState(({ seconds }) => ({
            //                     seconds: seconds - 1
            //                 }))
            //             } 
            //         }, 1000)
            //     }
            
            //     componentWillUnmount() {
                //         clearInterval(this.myInterval)
                //     }
                
                render() {
                    const { seconds } = this.state
//         const { seconds } = this.state
              return (
                <div>
                    <h1> { seconds } </h1>
                </div>
              )
    }

 }