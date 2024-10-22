import { useState } from "react";

function App(){
  let [item, setItem] = useState("");

  let [arr,setArr]=useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    setItem(e.target.value);
  };

  
  const click = (e) => {
    e.preventDefault();
    setArr([...arr,item]);
    setItem("");
  };

return (
    <>
      <div>
        <h1>Todo List</h1>
        <div>
          <form onSubmit={click}>
            <input type="text" value={item} onChange={handleInput}></input>
            <button type="submit"></button>
          </form>
        </div>
        <div>
          <ul>
            {arr.map((value, key) => {
              return <li key={key}>{value}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
