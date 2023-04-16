import { memo } from "react";

function Todos( {yapilacakIsler, isEkle, kisi} ) {
    console.log("Todos render oldu");

    return (
      <>
        <p>{`${kisi.ad} ${kisi.soyad}`}</p>
        <h2>Yapılacak İşler</h2>

        {yapilacakIsler.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}

        <button onClick={isEkle}>İş Ekle</button>
      </>
    );
}

export default memo(Todos)