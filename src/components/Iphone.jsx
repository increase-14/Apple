import React from 'react'
import iphones from '../iphData.js'
import { Link } from 'react-router-dom';

const Iphone = () => {
  return (
    <div className='bg-black'>
      <div className='flex justify-around flex-wrap gap-[50px] px-[100px]'>
        {iphones.map((item) => (
          <Link
            to={`/cart/Iphone/${item.id}`}
            key={item.id}
            className='bg-[#212121ED] w-[300px] rounded-xl mt-[50px] block hover:scale-105 transition-transform duration-300'
          >
            <h1 className='text-center text-white'>Discount {item.discount}%</h1>
            <div className='bg-[#363636] p-[20px] flex justify-center'>
              <img className='w-[250px]' src={item.img} alt={item.title} />
            </div>
            <div className='bg-[#363636]'>
              <h1 className='text-center text-white'>{item.title}</h1>
              <h1 className='text-center text-white'>${item.price}</h1>
            </div>
            <div className='bg-[#212121ED] rounded-xl'>
              <h1 className='text-center cursor-pointer p-[5px] text-white'>Add to</h1>
            </div>
          </Link>
        ))}
      </div>

      <footer className="flex justify-around pt-[150px] pb-[50px] text-white">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <h1 className="text-2xl">Apple</h1>
            <h1 className="text-[#B5B5B5] text-[20px] pt-[10px]">Apple watch</h1>
            <h1 className="text-[#B5B5B5] text-[20px] pt-[10px]">MacBook</h1>
            <h1 className="text-[#B5B5B5] text-[20px] pt-[10px]">MacBook AIR</h1>
            <h1 className="text-[#B5B5B5] text-[20px] pt-[10px]">AirPods</h1>
            <h1 className="text-[#B5B5B5] text-[20px] pt-[10px]">iPhone</h1>
          </div>
        ))}
      </footer>
    </div>
  )
}

export default Iphone
