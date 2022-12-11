import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

export default function Nav() {
  const [show,setShow] = useState(false);
  const [searchValue,setSearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      console.log("window.scrollY",window.scrollY)
      if(window.scrollY>50){
        setShow(true)
      }else{
        setShow(false);
      }
    })
    return () => {
      window.removeEventListener("scroll",()=>{});
    }
  })

  const handleChange = (e) =>{
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)
  }
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/440px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={()=>window.location.reload()}
      />
      <input value={searchValue} onChange={handleChange} className="nav__input" type="text" placeholder='영화를 검색해주세요.'/>
      <img
        alt="user logged"
        src="https://external-preview.redd.it/72fNDTJyI-rr8t9TQWR9_vEBteoH_wIvwRtSYEwWZoc.gif?format=png8&s=69081ab6de18fda75521949b8baffb29f4cef90c"
        className="nav__avatar"
      />
    </nav>
  )
}
