/* eslint-disable prettier/prettier */
import React, { createContext, useState } from "react";

const ProductContext = createContext({});

export function ProductProvider({ children }) {

  const [reload, setReload] = useState(false);

  return (
    <ProductContext.Provider value={{
      reload,
      setReload,
    }}>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContext;