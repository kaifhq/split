/** @jsx Kaif.h @jsxFrag Kaif.Fragment */
import Kaif from 'kaif'
import TEXTS from './data.json'

const COLORS = [
  "#FFCB6E",
  "#A77BEF",
]

const stickers = []

const genSticker = () => {
  const background = COLORS[0|(COLORS.length)*Math.random()]
  const x = Math.random()
  const y = Math.random()
  const deg = Math.atan2(-x+.5, y-.5) / Math.PI * 40
  const newSticker = {
    text: TEXTS[0|(TEXTS.length)*Math.random()],
    x,
    y,
    deg,
    background,
  }
  stickers.push(newSticker)
}

const Sticker = ({sticker}) => {
  const { text, background, x, y, deg } = sticker
  return {
    elem: 'div',
    className: 'sticker',
    innerHTML: text,
    style: {
      background,
      transform:
  `translate(calc((100vw - 28ch) * ${x}), calc(50vh * ${y}))
  rotate(${deg}deg)`
    }
  }
}

const App = () => {
  return (
    <button id="button" onclick={genSticker}>
      <div id="overlay">
        {stickers.map(
          sticker => <Sticker sticker={sticker}/>
        )}
      </div>
      <div id="t1">
        <div>
        <span className="josefin-sans-a">с</span>
        <span className="josefin-sans-b">е</span>
        <span className="josefin-sans-a">й</span>
        </div>
      </div>
      <div id="t2">
        <div>
        <span className="josefin-sans-a">ч</span>
        <span className="josefin-sans-b">а</span>
        <span className="josefin-sans-a">с</span>
        </div>
        <div id="cta">
        <span>нажми прямо сейчас!</span>
        <img width="16" height="16" src="./arrow.svg" alt="стрелка"/>
        </div>
      </div>
    </button>
  )
}

const root = document.getElementById('button')
root.innerHTML = ''
Kaif.init(root, App)
