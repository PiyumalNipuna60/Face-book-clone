import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header'>
        Hy how are you.
        <div className='header__left'>
          <img 
            src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png'
            alt='logo'
          />
          <div className='header__input'>
             <input type='text'
             placeholder='Search facebook' 
             className='header__input__text'
             />
          </div>

        </div>

        <div className='header__middle'>

        </div>

        <div className='header__lright'>

        </div>

    </div>
  )
}

export default Header