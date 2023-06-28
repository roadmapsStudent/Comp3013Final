import { useState } from 'react'
import Search from './search';
import FoodList from './foodlist';
import './App.css';


function App() {
  const [search, setSetSearch] = useState("")

  return (

    <div className="body">
      <h3>Rowan Hansen A01003970 Comp 3013 Final Exam</h3>
      <Search search={search} setSearch={setSetSearch}/>
      <FoodList search={search} />
    </div>
  )
}

export default App
