import React from 'react';
import { signal } from '@preact/signals-react';
import ItemSignal from './ItemSignal';

const items = signal([
  { id: 1, count: signal(0) },
  { id: 2, count: signal(0) },
  { id: 3, count: signal(0) },
]);

const ItemListSignal = () => {
  return (
    <div>
      {items.value.map(item => (
        <ItemSignal key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemListSignal;
