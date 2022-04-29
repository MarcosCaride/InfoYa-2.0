import React from 'react'
import './NavBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className="Navegation-Bar">
        <h1>InfoYa</h1>

        <form>
          <input id="SearchBar" placeholder="¿Que estas buscando?" ></input>
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </form>

        <FontAwesomeIcon icon={faBars} className='Burger' />
      </div>
  )
}

export default NavBar