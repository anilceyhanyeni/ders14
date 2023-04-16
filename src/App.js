import { createContext, useContext, useState } from "react";

const KullaniciAlani = createContext()

function App() {
  return (
    <>
      <Component1 />
    </>
  );
}

function Component1() {
  const [user, setUser] = useState("Ahmet Yılmaz");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <KullaniciAlani.Provider value={user}>
        <Component2 />
      </KullaniciAlani.Provider>
    </>
  );
}

function Component2() {

  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(KullaniciAlani);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default App;
