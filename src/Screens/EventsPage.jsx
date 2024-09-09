import React from "react";
import { Link, useNavigate } from "react-router-dom";

function EventsPage() {
  const products = [
    {
      id: "12345",
      name: "Wireless Headphones",
      category: "Electronics",
      price: 99.99,
    },
    {
      id: "67890",
      name: "Smartphone",
      category: "Electronics",
      price: 499.99,
    },
    {
      id: "11223",
      name: "Laptop",
      category: "Computers",
      price: 899.99,
    },
    {
      id: "44556",
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 59.99,
    },
    {
      id: "77889",
      name: "Smartwatch",
      category: "Electronics",
      price: 199.99,
    },
  ];
  const navi = useNavigate();
  console.log(products);

  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <li
            key={item.id}
            onClick={() => navi(`productdetails/`, { state: { ID: item.id } })}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
