import React, { useState } from 'react'

const App = () => {
  const name = 'React';
  // const element = <h1>Hello, {name}</h1>;

  // function formatName() {
  //   return (<div>Bobo</div>)
  // }

  // function Card(props) {
  //   return (
  //     <div className="card">
  //       <div className="card-content">
  //         <h1>{props.head}</h1>
  //         <div className='text-2xl'>
  //           {props.content}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  function TodoListComponent() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [editIndex, setEditIndex] = useState(null);
  
    const handleAddOrUpdateItem = () => {
      if (editIndex !== null) {
        const updatedItems = items.map((item, index) => (index === editIndex ? newItem : item));
        setItems(updatedItems);
        setEditIndex(null); 
      } else {
        setItems([...items, newItem]);
      }
      setNewItem(''); 
    };
  
    const handleEditItem = (index) => {
      setNewItem(items[index]); 
      setEditIndex(index); 
    };
  
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">To-Do List</h1>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} 
          placeholder="Add a new item"
          className="p-2 border border-gray-300 rounded mb-4 w-64"
        />
        <button
          onClick={handleAddOrUpdateItem}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          {editIndex !== null ? 'Update Item' : 'Add Item'}
        </button>
        <ul className="p-6 divide-y divide-slate-200 w-64">
          {items.map((item, index) => (
            <li className="flex py-4 first:pt-0 last:pb-0 justify-between items-center" key={index}>
              {item}
              <button
                onClick={() => handleEditItem(index)} 
                className="text-blue-500 ml-4"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      {/* <div className='text-5xl'>
        App
      </div>
      <div className='text-2xl'>
        {element}
      </div>
      {formatName()}
      <div>
        <Card 
        head={"Hello"}
        content={"This is a card"}
        />
      </div> */}


      <TodoListComponent />
      
    </>
  );
}

export default App