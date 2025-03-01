import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
   
    
      <div className="w-full h-screen duration-200" 
        style={{backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg bg-white px-3 py-1 rounded-full">

        <button className="outline-none px-3 py-1 rounded-full"
        style={{backgroundColor: "red"}}>Red</button>
      </div>

      </div>
    
    </div>
    
    
    
    
  )
}

export default App
