import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearch] = useState("")
  // const [itemName, setNewItem] = useState("")
  // const [itemCategory, setCatagory] = useState("Produce")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let itemsToDisplay;

  function handleSearch(event){  
    itemsToDisplay = items.filter(item => {
      if (item.name === event.target.value ) {
        return setSearch(event.target.value)
      }
    })
  }

  if(searchItem !== "") {
    itemsToDisplay = items.filter(item => {
      if (item.name === searchItem) {
        return item
      }
    })
  } else { 
    itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") return true;
  
      return item.category === selectedCategory;
    });
  }

  function addNewItems(item){
    setItems([...items, item])
    
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addNewItems}  />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
