import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

function NavItem({ children, ...rest }) {
  return (
    <li {...rest}>
      <Typography
        as="a"
        href="#"
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
          <NavItem>Inicio</NavItem>
          <NavItem>Servicios</NavItem>
          <NavItem>Contacto</NavItem>
          <NavItem>Trabaja con nosotros</NavItem>
          <NavItem>FAQs</NavItem>
        </ul>
        <div className="hidden gap-2 ml-auto lg:flex">
          <Button variant="filled" size="sm" color="blue">
            Iniciar Sesión
          </Button>
          <Button variant="outlined" size="sm">
            Crear Cuenta
          </Button>
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
            <NavItem>Inicio</NavItem>
            <NavItem>Servicios</NavItem>
            <NavItem>Contacto</NavItem>
            <NavItem>Trabaja con nosotros</NavItem>
            <NavItem>FAQs</NavItem>
          </ul>
          <div className="flex flex-col gap-2 mt-8 mb-4">
            <Button variant="filled" size="sm">
              Iniciar Sesión
            </Button>
            <Button variant="outlined" size="sm">
              Crear Cuenta
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavbarComponent;