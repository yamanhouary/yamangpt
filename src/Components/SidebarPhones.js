import React, { Children, useState } from 'react'
import SidebarMenu from './SidebarMenu'


const SidebarPhones = ({ Children }) => {


  const [isOpen, setIsopen] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const toggleSidebar = () => {
    setIsopen(!isOpen);
    setIsClosed(!isClosed);
  };

  return (
    <div>
      <div id='menu' onClick={toggleSidebar} style={{
        zIndex: '999',
        transform: isOpen ? 'translate(200px)' : 'translate(0%)'
      }}>
        <span style={{
          top: isClosed ? '50%' : '75%',
          transform: isClosed ? 'rotate(-45deg)' : 'rotate(0deg)',
        }}></span>
        <span style={{
          display: isClosed ? 'none' : 'block',
        }}></span>
        <span style={{
          bottom: isClosed ? '50%' : '75%',
          transform: isClosed ? 'rotate(45deg)' : 'rotate(0deg)',
        }}></span>
      </div>
      <div style={{
        width: '200px',
        position: 'fixed',
        left: '0',
        top: '0',
        transform: isOpen ? "translate(0%)" : "translate(-100%)",
        transition: 'all .4s ease'
      }}>
        <SidebarMenu />
      </div>
      <main>
        {Children}
      </main>
    </div>
  )
}

export default SidebarPhones