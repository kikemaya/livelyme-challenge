import React from 'react'

function MenuChoice(props) {

  const {
    menu,
    setMenu
  } = props

  return (
    <ul className='flex bg-white'>
      <li
        className={(menu === 'business') ? 'py-2 px-4 text-primary menu-btn-active cursor-pointer' : 'py-2 px-4 text-primary cursor-pointer'}
        onClick={() => setMenu('business')}
      >
        For Business
      </li>
      <li
        className={(menu === 'individuals') ? 'py-2 px-4 text-primary menu-btn-active cursor-pointer' : 'py-2 px-4 text-primary cursor-pointer'}
        onClick={() => setMenu('individuals')}
      >
        For Individuals
      </li>
    </ul>
  )
}

export default MenuChoice