import React, { createContext, ReactNode, useEffect, useState } from "react";
import file from "../../data/data.json";
import { DataInterface } from "../../interfaces/DataInterface";

export const Context = createContext<DataInterface>([]);

export default function DataContext({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataInterface>([]);
  useEffect(() => {
    setData(file);
  }, []);
  return <Context.Provider value={data}>{children}</Context.Provider>;
}
