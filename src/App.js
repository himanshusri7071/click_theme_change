import React , {useState} from "react";


const App = () => {
     const purple = "#8e44ad";
     const [bg, setBg] = useState(purple);
     const [name, setName] = useState("click me ");
     const bgChange = () => {
       let newBg = "yellow";
       setBg(newBg);
       setName("oh no ");
     };
     return(
       <>
          <div style = {{backgroundColor: bg}}>
          <button onClick = {bgChange}> {name}</button>
          </div>
       </>
     );
}

export default App;