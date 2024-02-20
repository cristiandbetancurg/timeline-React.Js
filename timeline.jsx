import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, content: '0 NGOLD', achieved: false },
    { id: 2, content: '250 NGOLD', achieved: false },
    { id: 3, content: '500 NGOLD', achieved: false },
    { id: 4, content: '750 NGOLD', achieved: false },
    { id: 5, content: '1000 NGOLD', achieved: false },
  ]);

}
