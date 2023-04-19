import React, { useEffect } from 'react';
import './radialMenu.css'

export default function MenuComponent() {

  const[menuOpen, setMenuOpen] = React.useState(false);
  const wrapper = document.getElementById("cn-wrapper");
  function toggleMenu()
  {
    setMenuOpen(!menuOpen);
  }

  React.useEffect(()=>
  {
    if(wrapper)
    {
      if(menuOpen)
        wrapper.classList.add("opened-nav");
      else
        wrapper.classList.remove("opened-nav");
    }
  },[menuOpen]);

  return (
    <div className="containers csstransforms">
      <div className="component">
        <button className="cn-button" onClick={toggleMenu} id="cn-button">Menu</button>
        <div className="cn-wrapper" id="cn-wrapper">
          <ul>
            <li><a href="#"><span className='rotate-90 text-[6px]'>Создать<br/> проект</span></a></li>
            <li><a href="#"><span className='rotate-90 text-[12px]'>Архив</span></a></li>
            <li><a href="#"><span className='rotate-90 text-[12px]'>Статистика</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}