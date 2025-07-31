import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card';

const NewsApp = () => {
    const [search, setSearch] = useState(`india`)
    const [news, setNews] = useState([]);
    const API_KEY = "37f2db5568db48cc815471874d3f5c00";

   const getData = async()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles); 
    setNews(jsonData.articles)
   }
   const handleInput= (e)=>{
    setSearch(e.target.value);
    
   }
   useEffect(()=>{
    getData()
   },[])
   const userinput = (e) =>{
    setSearch(e.target.value)
    getData(search)
   }

  return (
    <div>
   <nav className="flex flex-row items-center justify-between bg-blue-500 p-4 shadow-md">
  <div className="text-white font-extrabold text-xl">
    <h1>Trendy News</h1>
  </div>
  
  <div className="text-white font-medium text-lg">All Trending News</div>
  
  <div className="flex items-center space-x-3">
    <input 
      type="text" 
      className="rounded-md border border-black px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
      placeholder="Search..." 
      onChange={handleInput} 
      value={search} 
    />
    <button 
      onClick={getData} 
      className="rounded-md bg-blue-700 text-white px-4 py-1 hover:bg-blue-800 transition"
    >
      Search
    </button>
  </div>
</nav>

    <div className="container mx-auto mt-6 max-w-4xl">
        <div className='text-center font-extrabold text-2xl text-gray-800'>
            <h1>Stay Updated With Trendy News!</h1>
        </div>
    <div className='flex flex-wrap justify-center gap-4 mt-5'>

      <button className='bg-red-500 text-white h-9 w-auto rounded-lg mt-3 px-4'onClick={userinput} value="Sports">Sports</button>
      <button className='bg-red-500 text-white h-9 w-auto rounded-lg mt-3 px-4'onClick={userinput} value="Politics" >Politics</button>
      <button className='bg-red-500 text-white h-9 w-auto rounded-lg mt-3 px-4'onClick={userinput} value="Health">Health</button>
      <button className='bg-red-500 text-white h-9 w-auto rounded-lg mt-3 px-4'onClick={userinput} value="Entertainment">Entertainment</button>
      <button className='bg-red-500 text-white h-9 w-auto rounded-lg mt-3 px-4'onClick={userinput} value="Technology">Technology</button>
    </div>
    </div>
    <Card data ={news}/>
   </div>
  )
}

export default NewsApp;
