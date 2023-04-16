import { useEffect, useState } from "react";

function useLS(key, initialValue) {

    const [state, setState] = useState(() => {
      const value = localStorage.getItem(key);
      if (value !== null || value !== undefined) {
        return JSON.parse(value);
      } else {
        return initialValue;
      }
    });
  
   
  
    return [state, setState];
  }

  export default useLS