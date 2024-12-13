import React from 'react';

const ItemNormal = ({ id, count, increment }) => {
  console.log(`Rendering Item ${id} (Normal)`);
  return (
    <div style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px' }}>
      <p>Item {id}: {count}</p>
      <button onClick={() => increment(id)}>Increment</button>
    </div>
  );
};

export default ItemNormal;
