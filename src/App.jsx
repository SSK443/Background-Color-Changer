import { useState } from 'react'
import './App.css'
import Button from './components/Button'
const color = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Blue', hex: '#0000FF	' },
  { name: 'Green', hex: '	#008000' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Orange', hex: '#ffa500' },
  { name: 'Cyan', hex: '#00ffff' },
  { name: 'Pink', hex: '	#ff69b4' },
  { name: 'Brown', hex: '	#a52a2a' },
  { name: 'Teal', hex: '	#008080' },
  { name: 'Indigo', hex: '#4b0082' },
  { name: 'Lavender', hex: '#e6e6fa	' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Gold', hex: '#ffd700' },
  { name: 'Olive', hex: '#808000' },
];
function App() {
  const [selectedColor, setSelectedcolor] = useState(color[1].hex);
  const click1 = (color) => {
    setSelectedcolor(color)
  }


  return (
    <div className='h-screen p-3' style={{ backgroundColor: selectedColor }}>
      <div className='bg-gray-100 p-5 rounded shadow ' >
        {
          color.map((color) => < Button title={color.name} color={color.hex} onClick={click1} />)
        }

      </div>

    </div>
  )
}

export default App
