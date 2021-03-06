import React, { useState } from 'react'

import { useTrail, animated } from 'react-spring'


const items = ['Hi, I\'m', 'Matthew','Magnotta', ]
const config = { mass: 5, tension: 2000, friction: 200 }

function Intro() {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div className="trails-main" onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height, display:'flex', flexShrink:'1' }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
export default Intro
