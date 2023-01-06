import {
  Navbar,
  MobileNav,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import EventBus from "../common/EventBus";
import { logout } from "../slices/auth";
import Home from "../pages/home/Home";
import LoginComponent from "./login/LoginComponent";
import RegisterComponent from "./register/RegisterComponent";


function NavItem({ children, ...rest }) {
  return (
    <li {...rest}>
      <Typography
        variant="small"
        color="gray"
        className="font-normal transition-colors hover:text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  // useEffect(() => {
  //   if (currentUser) {
  //     setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  //   } else {
  //     setShowModeratorBoard(false);
  //     setShowAdminBoard(false);
  //   }

  //   EventBus.on("logout", () => {
  //     logOut();
  //   });

  //   return () => {
  //     EventBus.remove("logout");
  //   };
  // }, [currentUser, logOut]);

  const menuOpenIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const menuCloseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="w-6 h-6"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
  return (
    <Router>
      <Navbar
        className="fixed z-50 border-t-0 border-x-0 !border-b !border-blue-gray-50"
        shadow={false}
        fullWidth
      >
        <div className="container flex items-center mx-auto">
          <img
            src="carfix-logo.png"
            alt="team work"
            // className="lg:0 mb-8 h-96 w-full lg:w-1/2 rounded-xl object-cover lg:h-[40rem]"
          />
          <ul className="items-center hidden gap-6 ml-10 lg:flex">
            <Link to={"/"}>
              <NavItem>Inicio</NavItem>
            </Link>
            <Link to={"/"}>
              <NavItem>Servicios</NavItem>
            </Link>
            <Link to={"/"}>
              <NavItem>Contacto</NavItem>
            </Link>
            <Link to={"/"}>
              <NavItem>Trabaja con nosotros</NavItem>
            </Link>
            <Link to={"/"}>
              <NavItem>FAQs</NavItem>
            </Link>
          </ul>
          <div className="hidden gap-2 ml-auto lg:flex">
            <LoginComponent />
            <RegisterComponent />
          </div>
          <IconButton
            size="sm"
            variant="text"
            color="blue-gray"
            onClick={handleOpen}
            className="inline-block ml-auto lg:hidden"
          >
            {open ? menuCloseIcon : menuOpenIcon}
          </IconButton>
        </div>
        <MobileNav open={open}>
          <div className="container px-2 pt-4 mx-auto mt-3 border-t border-blue-gray-50">
            <ul className="flex flex-col gap-4">
              <Link to={"/"}>
                <NavItem>Inicio</NavItem>
              </Link>
              <Link to={"/"}>
                <NavItem>Servicios</NavItem>
              </Link>
              <Link to={"/"}>
                <NavItem>Contacto</NavItem>
              </Link>
              <Link to={"/"}>
                <NavItem>Trabaja con nosotros</NavItem>
              </Link>
              <Link to={"/"}>
                <NavItem>FAQs</NavItem>
              </Link>
            </ul>
            <div className="flex flex-col gap-2 mt-8 mb-4">
              <LoginComponent />
              <RegisterComponent />
            </div>
          </div>
        </MobileNav>
      </Navbar>
      <div className="container hidden mt-3" >
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default NavbarComponent;
