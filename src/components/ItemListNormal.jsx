import React, { useState } from 'react';
import ItemNormal from './ItemNormal';

const ItemListNormal = () => {
  const [items, setItems] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ]);

  const increment = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  return (
    <div>
      <h2>Item List (Normal State)</h2>
      {items.map(item => (
        <ItemNormal
          key={item.id}
          id={item.id}
          count={item.count}
          increment={increment}
        />
      ))}
    </div>
  );
};

export default ItemListNormal;
