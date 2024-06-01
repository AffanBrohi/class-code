import TodoList from "./componenets/todoList";
import "./app.css"
import background from "./componenets/Images/young-businessman-sitting-office-desk-working-computer-3d-illustration.png"


function App() {
  return(
    <div className="container">
      <h1>TODO-LIST</h1>
      <img className="background" alt="" />
    <TodoList></TodoList>
    </div>
  ) 
}

export default App;
