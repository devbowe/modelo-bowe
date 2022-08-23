import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();
DataContext.displayName = "DataContext";

export const useData = () => {
    const values = useContext(DataContext);
    return values;
};

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState(null);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
