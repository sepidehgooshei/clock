import { Component } from "react";
import Time from "./Time";
export default class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
showTime: true
        }
        this.toggleShoeTime = this.toggleShoeTime.bind(this)
    }
    toggleShoeTime(){
        this.setState(state => {
            return{
                showTime: ! state.showTime
            }
        })
    }
    render(){
        const showTime = this.state.showTime;
        return(
          <div>
           {showTime && <Time />}
            <button onClick={this.toggleShoeTime}> {showTime ? 'Hide time' : 'show time'}</button>
          </div>
        )

    }

}



