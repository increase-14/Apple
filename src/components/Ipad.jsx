import React from "react";
import { Link } from "react-router-dom";
import iPadData from "./ipaData";

const Ipad = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex justify-around flex-wrap gap-[50px] px-[100px] py-[50px]">
        {iPadData.map((item) => (
          <Link
            to={`/cart/Ipad/${item.id}`}
            key={item.id}
            className="bg-[#212121ED] w-[300px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-center text-white pt-2">Discount {item.discount}%</h1>
            <div className="bg-[#363636] flex justify-center p-5">
              <img className="w-[250px]" src={item.img} alt={item.title} />
            </div>
            <div className="bg-[#363636] py-4">
              <h1 className="text-center text-white text-xl">{item.title}</h1>
              <h1 className="text-center text-white text-lg mt-2">${item.price}</h1>
            </div>
            <div className="bg-[#212121ED] rounded-b-xl py-3">
              <h1 className="text-center text-white cursor-pointer hover:text-blue-400 transition">
                Add to Cart
              </h1>
            </div>
          </Link>
        ))}
      </div>

      <footer className="flex justify-around pt-[100px] pb-[50px] text-white border-t border-gray-700">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <h1 className="text-2xl font-bold">Apple</h1>
            {["Apple Watch", "MacBook", "MacBook Air", "AirPods", "iPhone"].map((item, idx) => (
              <h1 key={idx} className="text-[#B5B5B5] text-[18px] pt-2">{item}</h1>
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
};

export default Ipad;
