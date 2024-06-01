import { RxCross1 } from "react-icons/rx";
import { GrEdit } from "react-icons/gr";

function TodoListMap({ list,handleDeleteBtn , handleEditBtn}){
    return(
        <ul>
            {
                list.map((todo, i)=>{
                    return(
                    <li key={i}>
                    {todo}
                    <button onClick={()=>{handleEditBtn(i)}} className="edit"><GrEdit /></button>
                    <button className="delete" onClick={()=>{handleDeleteBtn(i)}}><RxCross1 /></button>
                    </li>
                )})
            }
        </ul> 
    )
}

export default TodoListMap;