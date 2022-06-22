
import React, {Component} from "react";
import TodoItems from "./Component/TodoItems/TodoItems";
import AddItems from "./Component/AddItems/AddItems";

class App extends Component {

  state = {
    items: [
      {id:1, name:"Abo Seed", age:"12/8"},
      {id:2, name:"Abo Askar", age:"4/2"},
      {id:3, name:"Elsadek", age:"21/11"},
      {id:4, name:"Salma", age:"14/6"},
      {id:5, name:"Mando", age:"9/2"}
    ]
  }

  //Function To Delet Items

  deleteItem = (id) => {
    let items = this.state.items.filter(el => {
      return el.id !== id
    })
    this.setState({items:items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items: items})
  }

  render () {

    return(

      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} delet={this.deleteItem} />
        <AddItems addItem={this.addItem} />
      </div>
    )
    
  }
}

export default App;
