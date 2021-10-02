import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class NewRoomForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nameValue: '',
            areaValue: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e){
        this.setState({nameValue: e.target.value});
    }

    handleAreaChange(e){
        this.setState({areaValue: e.target.value});
    }

    handleClick(e){
        this.props.addNewRoom(e, this.props.data, 
            {name: this.state.nameValue, area: this.state.areaValue});
        this.setState({nameValue: '', areaValue: ''});
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.nameValue}></input>
                <input type="text" placeholder="Area" onChange={this.handleAreaChange} value={this.state.areaValue}></input>
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Add Room</button>
            </div>
        )
    }
}