import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';

const data = require("./initData");

function App() {
  let [tours,setTour]=useState(data);
  const remaningTour=(id)=>{
    let remaningtours=tours.filter(item=>item.id!==id);
    setTour(remaningtours);
  }
  if(tours.length===0){
    return(<div className='flex justify-center text-center flex-col h-screen'>
      <h2 className='font-black text-2xl '>No tour left</h2>
      <button className=' px-2 py-16  cursor-pointer hover:bg-red-200 text-black transition-all font-semibold'  onClick={()=>setTour(data)} >Refresh</button>
    </div>)
  }
  return (<div className='flex items-center justify-center flex-col font-bold'>
    <div>
      <h2 className='text-5xl m-16 border-8 border-dashed border-blue-800 rounded-lg px-5 py-5'>Plan with love</h2>
    </div><div className='flex flex-wrap items-center justify-center max-w-7xl m-auto'>

    {tours.map((tour)=>{
      return <Card  key={tour.id} {...tour} leftTour={remaningTour}></Card>
    })}
    </div>
  </div>
  )
}

export default App;
