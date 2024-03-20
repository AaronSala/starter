
import './App.css';




function App() {
  const title = "this the first blog"
   
     const math = Math.random() * 20;
   
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
           {math}
        <p>{Math.ceil(math)}</p>
      </div>
    </div>
  );
}

export default App;
