import {useState} from "react";
const Counter = () => {
    const [count , setCount] = useState(0);
  return (
    <div className="flex items-center justify-center w-full">
      <div className="counter max-w-125 w-full bg-white h-125 rounded-24 flex-col gap-5 flex items-center justify-center">
        <p className="text-6xl">{count}</p>
        <button
        onClick={() => setCount(count+1)}
        className="max-w-75 w-full h-12.5 rounded-full bg-black cursor-pointer text-white">Increase Count</button>
      </div>
    </div>
  )
}

export default Counter
