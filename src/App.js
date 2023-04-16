import { useCallback, useMemo, useState } from "react";
import Todos from "./Todos";

function App() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback( () => {
    setTodos( (t) => [...t, "Yeni iş"] )
  }, [todos] )

  const kisi = useMemo( ()=>{
    return {ad: "Ahmet", soyad:"Yılmaz"}
  }, [todos]  )

  return (
    <>
      <Todos yapilacakIsler={todos} isEkle={addTodo} kisi={kisi}  />
      <hr />
      <div>
        Sayaç: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );

}

export default App;
