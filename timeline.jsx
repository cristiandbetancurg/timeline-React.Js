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

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    // Si el elemento se ha soltado en un área válida
    if (destination) {
      const newItems = [...items];
      const [reorderedItem] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, reorderedItem);

      setItems(newItems);
    }
  };

  const handleAchievedChange = (id) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex((item) => item.id === id);
    newItems[itemIndex].achieved = !newItems[itemIndex].achieved;

    setItems(newItems);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="timeline">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className={item.achieved ? 'achieved' : ''}
                    >
                      <input
                        type="check"
                        checked={item.achieved}
                        onChange={() => handleAchievedChange(item.id)}
                      />
                      {item.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default App;
