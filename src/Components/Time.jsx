import { Component } from "react";


export default class Time extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
      this.tier = setInterval(()=> {
           this.setState({
            time: new Date().toLocaleTimeString()
           }

           )
           
        }, 1000

        )
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <div>{this.state.time}</div>

        )
    }
}
