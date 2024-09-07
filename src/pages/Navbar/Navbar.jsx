import React , {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.png';
import {FaBars} from 'react-icons/fa';

export default function Navbar() {
  const [isOpen , setIsOpen] = useState(false);
  const [active, setActive] = useState('');
  const [navbarToggle ,setNavbarToggle] = useState(false);

  const location = useLocation();

  const updateActive = (route) => {
    setActive(route);
    
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const activeRoute = currentPath.split('/')[1]; 
    setActive(activeRoute);
  }, [location]);
  return (
    <div className="navbar h-24 flex justify-between pt-4 px-4 gap-10 border-b-[.1em] border-[rgba(255,255,255,0.2)]">
      <Link to="/" className="w-20 h-20">
        <img className="w-28 h-16" src={logo} alt="AIC" />
      </Link>
      
      <div className=" md:flex md:flex-col  md:justify-end md:h-20 md:gap-2 text-white relative">
        <div className=" h-full flex items-center justify-end md:hidden ">
            <Link >
              <FaBars onClick={() =>(setNavbarToggle(!navbarToggle))} className="text-3xl"/>
            </Link>
        </div>
        <div className={navbarToggle ? "flex gap-6 p-10 items-center flex-col backdrop-blur-md rounded-lg md:flex md:flex-row md:gap-4" : "hidden md:flex md:flex-row md:gap-4"}>

          {data.map((item) => (
            <Link
              key={item.name}
              to={item.route}
              className={`${
                active === item.route.split('/')[1] ? 'text-[#FFD700]' : ''
              }`}
              onClick={() => {
                updateActive(item.route.split('/')[1]);
                setNavbarToggle(false);
              }}
              
            >
              {item.name}
            </Link>
          ))}
          <Link to="http://127.0.0.1:8000/admin">Login</Link>

        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Blogs",
    route: "/blogs",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "OurTeam",
    route: "/ourteam",
  },
  {
    name: "FacultyAdvisor",
    route: "/FacAd",
  },
  // {
  //   name: "Login",
  //   route: "http://127.0.0.1:8000/admin"
  // }
]