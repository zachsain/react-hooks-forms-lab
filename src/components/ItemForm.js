import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {

  const [itemName, setNewItem] = useState("")
  const [itemCategory, setCatagory] = useState("Produce")

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };

  function handleAddItem(event){
    setNewItem(event.target.value)
  }

  function handleSelectCatagory(event) {
    setCatagory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleAddItem}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleSelectCatagory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
