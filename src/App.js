import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    console.log('Form submitted')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Form Components</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className='field'>
              <label htmlFor='name'> Name </label>
              <input
                type='text'
                id='name'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='app-input'
              />
            </div>
            <button className='btn' disabled={!name} type='submit'>
              Submit
            </button>
          </fieldset>
        </form>
      </header>
    </div>
  )
}

export default App
