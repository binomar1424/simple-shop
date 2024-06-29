import React, { useContext } from 'react'
import '../styles/TopBar.css'
import { useNavigate } from 'react-router-dom'
import { WebContext } from '../WebContext';

function TopBar() {
  const {showBlogPopUp, setShowBlogPopUp} = useContext(WebContext)
  const navigate = useNavigate();

  return (
    <nav className='web_topbar'>
        <section>
            <h2>Shop</h2>
        </section>

        <section>
            <button onClick={() => setShowBlogPopUp(!showBlogPopUp)}>Add new item</button>
        </section>
    </nav>
  )
}

export default TopBar