import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function EventDetailPage() {
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
  const [productdetails, setProductDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    console.log("location", location);
    const details = products.find(
      (products) => products.id === location.state.ID
    );
    setProductDetails(details);
  }, []);
  const params = useParams();
  return (
    <div>
      <ul>
        {productdetails ? (
          <ul>
            <li>id:{productdetails.id}</li>
            <li>name:{productdetails.name}</li>
            <li>category:{productdetails.category}</li>
            <li>price:{productdetails.price}</li>
          </ul>
        ) : (
          <p>404</p>
        )}
      </ul>
    </div>
  );
}

export default EventDetailPage;
