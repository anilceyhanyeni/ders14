import { useState, useEffect } from "react";

const useVericek = (url) => {

  const [yapilacaklar, yapilacaklarGuncelle] = useState(null);

  useEffect(() => {
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => yapilacaklarGuncelle(data));

  }, [url]);

  return [yapilacaklar];
};

export default useVericek;