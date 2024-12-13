import React from 'react';

const ItemSignal = ({ item }) => {
  console.log(`Rendering Item ${item.id} (Signal)`);
  return (
    <div style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px' }}>
      <p>Item {item.id}: {item.count.value}</p>
      <button onClick={() => item.count.value++}>Increment</button>
    </div>
  );
};

export default ItemSignal;
