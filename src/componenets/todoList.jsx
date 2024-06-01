import { useState } from "react";
import "./todoList.css"
import TodoListMap from "./todoListMap";



function TodoList() {

    const [inpValue, setInpValue] = useState("");
    const [list, setList] = useState(["mango"]);

    const handleInput = (e)=>{
        setInpValue(e.target.value);
    }

    const handleAddBtn = ()=>{
        if (inpValue === "") {
            alert("Please Enter The Value")
        }else{
            const newList = [...list];
            newList.push(inpValue);
            setList(newList);
            setInpValue("")
        }
        
    }

    const handleDeleteBtn = (i)=>{
        const newList = [...list];
        newList.splice(i,1)
        setList(newList);
    }

    // const handleEditBtn = (i)=>{
    //     const newList = [...list]
    //     newList.splice
    //     console.log(i);
    // }

    return(
            <div className="todo-list">
                <input onChange={handleInput} type="text" placeholder="Enter Your Todo" />
                <button className="add" onClick={handleAddBtn}>Add</button>
                <div className="items">
                    <TodoListMap list={list} handleDeleteBtn={handleDeleteBtn} />
                </div>
            </div>

    )
}

export default TodoList