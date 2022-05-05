import './App.css'
import React from 'react'
import Header from './components/Header'
import Location from './components/Location'
import data from './data'

function App() {
  const travelData = data.map((item) => {
    return <Location item={item} />
  })
  return (
    <div className='container'>
      <Header/>
      {travelData}
    </div>
  );
}

export default App;
