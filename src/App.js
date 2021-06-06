import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  function updateInputTextState(event) {
    setInputText(event.target.value);
  }

  function addItem(event) {
    if(inputText) {
      // add item
      setList(oldList => {
        return [...oldList, inputText];
      });
      // reset input text
      setInputText("");
    }
  }

  function deleteItem(index) {
    setList(oldList => {
      return oldList.slice(0, index).concat(oldList.slice(index+1));
    });
  }

  return (
    <div className="App">
      <input type="text" onChange={updateInputTextState} value={inputText}/>
      <input type="button" onClick={addItem} value="Add Item" />
      <div>
        Result
        <div className="List container">
          <ul>
            {list.map((element, index) => {
              return <li key={index}> {element} <input type="button" value="Delete" onClick={() => {deleteItem(index)}}/> </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
