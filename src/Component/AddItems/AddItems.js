import React, {Component} from "react";
import './AddItems.css'
class AddItems extends Component {


    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value === '') {
            return false;
        } 
        else {

            this.props.addItem(this.state); //pass state to function
            this.setState({ //empty state after add element
                name: '',
                age: ''
            })
        }
      
    }


    render() {

        return(

            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Your name..." id="name" onChange={this.handleChange} value={this.state.name} />
                    <input type="number" placeholder="Enter Your age..." id="age" onChange={this.handleChange} value={this.state.age} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddItems;