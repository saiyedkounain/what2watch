import React, { createContext, useContext, useState } from 'react';

const SelectionContext = createContext(null);

export const SelectionProvider = ({ children }) => {
  const [person1Genre, setPerson1Genre] = useState(null);
  const [person1WatchList, setPerson1WatchList] = useState([]);
  const [person2WatchList, setPerson2WatchList] = useState([]);

  const value = {
    person1Genre,
    setPerson1Genre,
    person1WatchList,
    setPerson1WatchList,
    person2WatchList,
    setPerson2WatchList,
  };

  return (
    <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const ctx = useContext(SelectionContext);
  if (!ctx) {
    throw new Error('useSelection must be used within a SelectionProvider');
  }
  return ctx;
};
