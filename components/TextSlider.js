import React, { useEffect, useState } from 'react'

const TextSlider = ({ list, interval = 3000, classes }) => {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const loop = setInterval(() => {
      if (active !== list.length - 1) {
        setActive(active + 1)
      } else setActive(0)
    }, interval)
    return () => clearInterval(loop)
  }, [active])

  return (
    <span className="inline-flex flex-col">
      {list.map((t, index) => (
        <strong
          key={t}
          className={`${classes} transition duration-700  ${
            active === index
              ? 'order-first opacity-100'
              : 'order-last opacity-0'
          }`}
        >
          {t}
        </strong>
      ))}
    </span>
  )
}

export default TextSlider
