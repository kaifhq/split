/** @jsx Kaif.h @jsxFrag Kaif.Fragment */
import Kaif from 'kaif'
import './style.css'

let count = 0
function Counter() {
  return (
    <>
      <h1>{count}</h1>
      <button onclick={() => count++}>
        Increment
      </button>
    </>
  )
}

const App = () => {
  return <div id="root"><Counter/></div>
}

const root = document.getElementById('root')
Kaif.init(root, App)
