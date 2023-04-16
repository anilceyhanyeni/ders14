import { useState } from "react";
import Todos from "./Todos";

function App() {
  const [sayac, sayacGuncelle] = useState(0);
  const [todos, setTodos] = useState( ["Süt alınacak", "Yumurta alınacak"] );

  const arttir = () => {
    sayacGuncelle( (oncekiDeger) => oncekiDeger + 1 );
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Tıklanma Sayısı: {sayac}
        <button onClick={arttir}>+</button>
      </div>
    </>
  );
}

export default App;
