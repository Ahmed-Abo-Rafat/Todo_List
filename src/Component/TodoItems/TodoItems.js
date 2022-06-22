import React from "react";
import './TodoItems.css'

const TodoItems = (props) => {

    const {items, delet} = props;
    let sum = items.length;
    const ListItems = sum ? ( //this condition to check items
        items.map(item =>{

            return(
                <div className="listitems" key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => delet(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p>There Is No Items To Show</p>
    )

    return (
        <div>
            <div className="listitems">
                <span className="name title">Name</span>
                <span className="age title">Date</span>
                <span className="action title">Actions</span>
            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems;