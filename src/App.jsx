import { useState } from 'react'
import './pals.css'
import { puppyList } from "./data.js"

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log("puppyList: ", puppyList)

  const featuredPup = puppies.find(puppy => puppy.id === featPupId);

  console.log(featuredPup)

  return (
    <div className="App">
          <h2>Select a puppy to see details :)</h2>
      <div className="puppy-grid">
        {puppies.map((puppy) => (
          <p onClick={() => { setFeatPupId(puppy.id); }} key={puppy.id}>
            {puppy.name}
          </p>
        ))}
      </div>
      
      {featPupId && (
        <div className='selectedPuppy'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;