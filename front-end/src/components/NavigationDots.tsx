import React from 'react'

const NavigationDots = ( props:{active:string} ) => {
  return (
    <div className="app__navigation">
        {['home', 'skills', 'work', 'contact'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={props.active === item ? { backgroundColor: '#29c5d4' } : {}}
            />
        ))}
    </div>
  )
}

export default NavigationDots;