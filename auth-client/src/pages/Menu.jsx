import React, { useState } from 'react'
import { useFoodContext } from '../../context/foodContext'
import { useEffect } from 'react'
import axios from 'axios'

const Menu = () => {
  const {Food, setFood}= useFoodContext()
  const [active, setActive] = useState(0)
  const [value, setValue] = useState({
    id: 0,
    name: 'All',
    value: 'all'
  })

  const category = [
    {
      id: 0,
      name: 'All',
      value: 'all',
    },
    {
      id: 1,
      name: 'Rice',
      value: 'Rice',
    },
    {
      id: 2,
      name: 'Desert',
      value: 'Desert'
    },
    {
      id: 3,
      name: 'Drinks',
      value: 'Drinks'
    },
    {
      id: 4,
      name: 'Fruits',
      value: 'Fruits'
    },
    {
      id: 5,
      name: 'Chicken',
      value: 'Chicken'
    },
    {
      id: 6,
      name: 'Fish',
      value: 'Fish'
    },

  ]
  const handleBtn=(btn)=>{
    setActive(btn.id)
    setValue(btn)
  }

const getFoods = async ()=>{
  try {
    const res = await axios.get("http://localhost:8000/api/v1/food/getAllFoods" )
		if (res.data.success) {
			setFood(res.data.data.food)
		} 
  } catch (error) {
    console.log(error);
  }
}
console.log(Food);
useEffect(()=>{
  getFoods()
},[value])
  return (
    <div className="pt-[16vh]">
      <div className="container mx-auto py-8">
        <div className="p-5 mb-14">
          <div className="flex flex-wrap justify-center mb-8 gap-5">
          {
            category?.map(btn=>(
              <button className={active === btn.id? "text-xl px-4 py-3 text-center text-white bg-red-500 border-red-500 border-2 rounded-sm justify-center font-medium ":" text-xl px-4 py-3 text-red-500 border-red-500 border-2 font-medium "} onClick={()=>{
                handleBtn(btn)
              }}>{btn.name}</button>
            ))
          }
          </div>
        </div>
      </div>
    </div>

  )
}

export default Menu