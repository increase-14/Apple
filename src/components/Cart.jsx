import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import airpods from '../airData';
import iPadData from './ipaData';
import iphones from '../iphData';
import mac from '../macData';

const Cart = () => {
  const { title, id } = useParams();
  const navigate = useNavigate();

  let data;
  if (title === 'Airpods') data = airpods;
  else if (title === 'Ipad') data = iPadData;
  else if (title === 'Iphone') data = iphones;
  else if (title === 'MacBook') data = mac;
  else data = [];

  const product = data.find((item) => item.id === Number(id));

  if (!product) return <div className="text-white p-10">Product not found</div>;

  return (
    <div className="text-white p-10 min-h-screen bg-black flex flex-col items-center">
      <h1 className="text-4xl font-semibold mb-6">You selected:</h1>

      <img
        src={product.img}
        alt={product.title}
        className="w-[300px] rounded-lg shadow-lg mb-6"
      />

      <h2 className="text-3xl font-bold mb-2">{product.title}</h2>

      <p className="text-lg mb-1">Price: <span className="font-semibold">${product.price}</span></p>

      <p className="text-lg mb-6">Discount: <span className="font-semibold text-green-400">{product.discount}%</span></p>
      <div>
        <button
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-md mb-8 mr-[50px]"
        >
          Confirm Purchase
        </button>

        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 hover:bg-gray-600 transition-colors text-white px-6 py-3 rounded-md ml-[50px]"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Cart;
