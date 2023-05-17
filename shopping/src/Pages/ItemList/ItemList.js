import React from "react";

const ItemList = ({ ItemsData }) => {
  return (
    <div className="productList">
      {ItemsData.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image_url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ItemList;