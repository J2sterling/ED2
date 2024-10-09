import React, { useState } from 'react';

const ComponentApp = () => {
  // Estado para manejar el valor del input
  const [category, setCategory] = useState('');
  
  // Estado para manejar la lista de categorías
  const [categories, setCategories] = useState(['first category', 'second category']);

  // Función para capturar el valor del input
  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  // Función para agregar la categoría a la lista
  const handleAddCategory = () => {
    setCategories([...categories, category]);  // Agregar la nueva categoría a la lista
    setCategory('');  // Limpiar el campo de input
  };

  return (
    <>
      <h1>GifExpert</h1>

      {/* Input para escribir la nueva categoría */}
      <input 
        type="text"
        value={category}
        onChange={handleInputChange}
        placeholder="Add new category"
      />

      {/* Botón para agregar la categoría */}
      <button onClick={handleAddCategory}>Add Category</button>

      {/* Mostrar la lista de categorías */}
      <ol>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default ComponentApp;
