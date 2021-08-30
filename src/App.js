import { useState } from "react";
import { Containsr, ContentBox, Headline, Text, TextInput, AddBtn, DeleteBtn } from "./styled-compon";

const App = () => {
  const [todos, updateTodos] = useState([]);
  const [currentText, updateText] = useState("");
  const [todoId, updateId] = useState(0);

  const handleClickAdd = () => {
    if (todos.length < 6) {
      updateTodos([
        ...todos, {
          content: currentText, id: todoId, didIt: false
        }
      ])
      updateId(todoId + 1);
      updateText("")
    }
  }
  const handleClickRemove = removeId => {
    const result = todos.filter(todo => {
      return todo.id !== removeId
    })
    updateTodos(result)
  }
  const handleClickUpdate = toggleId => {
    const result = todos.map(todo => {
      return todo.id !== toggleId ? todo : { ...todo, didIt: !todo.didIt }
    })
    updateTodos(result);
  }
  const handleClickDelete = () => {
    updateTodos([])
  }

  const todoListSytle = {
    textAlign: "left", listStyle: "lower-roman", marginBottom: 5,
    fontSize: 18.5, borderBottom: "1px solid gray"
  }
  const notYetStyle = { color: "black", cusor: "pointer" }
  const didItStyle = {
    color: "#A54D4D", textDecoration: "line-through", cursor: "pointer"
  }
  return <Containsr>
    <ContentBox>
      <Headline>To Do List</Headline>
      <Text>
        &#x0221A; You can add up to 6
      </Text>
      <TextInput type="text" value={currentText}
        onChange={e => updateText(e.target.value)} />
      <ul style={{ paddingLeft: "7%", magin: "2.5% 20%" }}>
        {todos.map((todo, idx) => {
          return <li key={idx} style={todoListSytle}>
            <span style={todo.didIt ? didItStyle : notYetStyle}
              onClick={() => handleClickUpdate(todo.id)}>{todo.content}</span>
            <span style={{ color: "#670000", cursor: "pointer" }}
              onClick={() => handleClickRemove(todo.id)} >X</span>
          </li>
        })}
      </ul>
      <AddBtn id="add-btn" onClick={handleClickAdd}
        onMouseOver={() => { document.getElementById("add-btn").textContent = "+" }}
        onMouseOut={() => { document.getElementById("add-btn").textContent = "Add" }}
      >Add</AddBtn>
      <DeleteBtn id="delete-btn"
        style={{ transform: "translate(100%, -50%)" }} onClick={handleClickDelete}
        onMouseOver={() => { document.getElementById("delete-btn").textContent = "-" }}
        onMouseOut={() => { document.getElementById("delete-btn").textContent = "Delete" }}
      >Delete</DeleteBtn>
    </ContentBox>
  </Containsr>
}

export default App;