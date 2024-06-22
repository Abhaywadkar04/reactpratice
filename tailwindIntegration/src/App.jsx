import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center" style={{ backgroundColor: color }}>
        <div className='flex flex-wrap justify-center gap-4 p-4'>
          <button className='text-white bg-red-500 p-2 rounded' onClick={() => setColor('red')}>Red</button>
          <button className='text-white bg-blue-500 p-2 rounded' onClick={() => setColor('blue')}>Blue</button>
          <button className='text-white bg-green-500 p-2 rounded' onClick={() => setColor('green')}>Green</button>
        </div>
      </div>
    </>
  )
}




export default App


