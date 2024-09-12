import { useState } from 'react';

export default function Card({id,img,price,place_name,description,leftTour}){
    const [readmore,setReadmore]= useState(false);
    const info = `${description.substring(0,100)}...`
   
    function inputHandler(){
       setReadmore(!readmore);
    }
    function cardRemoveHandler(){
        leftTour(id);
    }
    return(
        <div className='w-96 h-max m-4 p-4 flex flex-col rounded-lg shadow-2xl '>
                <img src={img} alt=""  className='w-96 aspect-square object-cover'/>
                <div className='my-6 mx-1'>
                <div>
                    <h4 className='text-green-600 text-xl font-black'>${price}</h4>
                    <h1 className='text-xl font-black'>{place_name}</h1>
                </div>
                <div className='font-normal' >
                    {readmore?description:info}
                 <span onClick={inputHandler} className='text-sky-500 font-medium'>{readmore ?`Show less`:`Read more`}
                 </span>
                </div>
                </div>
                <button onClick={cardRemoveHandler} className='mt-5 px-20 py-2 border-solid border-red-300 border-2 rounded-lg cursor-pointer
                text-lg font-bold bg-rose-200  hover:bg-red-700 text-black transition-all'>Not Interested</button>
        </div>
    )
}