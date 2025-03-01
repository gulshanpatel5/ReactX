import { useState } from "react"

function App() {
  const [color,setColor] = useState("#F8F3D9")

  return (
   
    
      <div className="w-full h-screen duration-200" 
        style={{backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg bg-white px-3 py-1 rounded-full">

        <button
        onClick={() => setColor("red")}
        className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
        style={{backgroundColor: "red"}}>Red</button>

      <button
      onClick={() => setColor("#003092")}
      
       className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
        style={{backgroundColor: "#003092"}}>Blue</button>

        <button
        onClick={() => setColor("#640D5F")}
        className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
        style={{backgroundColor: "#640D5F"}}>Purple</button>
        
        <button 
        onClick={() => setColor("#685752")}
        className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
        style={{backgroundColor: "#685752"}}>Brown</button>
        
        <button 
        onClick={() => setColor("#16C47F")}
        className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
        style={{backgroundColor: "#16C47F"}}>Green</button>
        
        <button 
        
        onClick={() => setColor("#FFB200")}
        
        className="outline-none px-3 py-1 rounded-full text-white shadow-sm"
        style={{backgroundColor: "#FFB200"}}>Yellow</button>
      
      </div>

      </div>
    
    </div>
    
    
    
    
  )
}

export default App
