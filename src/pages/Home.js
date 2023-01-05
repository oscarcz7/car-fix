
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
  Input,
  Avatar,
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

export function HeroSectionOne() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const users = [
    {
      name: "John Michael",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      name: "Laurent Perrier",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      name: "Michael Levi",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      name: "Miriam Eric",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    },
    {
      name: "Richard Gran",
      img: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
  ];

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
    <>
      <Navbar
        className="fixed z-50 border-t-0 border-x-0 !border-b !border-blue-gray-50"
        shadow={false}
        fullWidth
      >
        <div className="container flex items-center mx-auto">
          <Typography color="blue-gray" className="mb-0 font-bold">
            Material Tailwind PRO
          </Typography>
          <ul className="items-center hidden gap-6 ml-10 lg:flex">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Resources</NavItem>
            <NavItem>Pricing</NavItem>
          </ul>
          <div className="hidden gap-2 ml-auto lg:flex">
            <Button variant="text" size="sm">
              login
            </Button>
            <Button size="sm">sign up</Button>
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
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Resources</NavItem>
              <NavItem>Pricing</NavItem>
            </ul>
            <div className="flex gap-2 mt-8 mb-4">
              <Button variant="outlined" size="sm" fullWidth>
                login
              </Button>
              <Button size="sm" fullWidth>
                sign up
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
      <header className="w-screen h-full min-h-screen px-4 pt-24 bg-white">
        <div className="container flex flex-col-reverse items-center mx-auto lg:flex-row">
          <div className="mr-0 lg:mr-16 xl:mr-24">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 text-4xl !leading-tight md:text-5xl"
            >
              Your work with Material Tailwind
            </Typography>
            <Typography
              variant="lead"
              className="mb-16 md:pr-16 xl:pr-28 text-blue-gray-700"
            >
              The time is now for it to be okay to be great. People in this
              world shun people for being great.
            </Typography>
            <div className="flex flex-col w-full gap-2 mb-6 md:mb-2 md:w-10/12 md:flex-row">
              <Input label="Enter your email" size="lg" />
              <Button className="w-full px-4 md:w-[12rem]">get started</Button>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="inline-flex items-center"
            >
              We care about your data in our&nbsp;
              <Typography
                as="a"
                href="#"
                variant="small"
                className="underline decoration-gray-500 underline-offset-4"
              >
                privacy policy
              </Typography>
            </Typography>
            <div className="flex flex-col-reverse mt-16 mb-12 sm:flex-row sm:items-center lg:mb-0">
              <div className="flex items-center">
                {users.map(({ name, img }, index) => (
                  <Avatar
                    key={index}
                    src={img}
                    alt={name}
                    variant="circular"
                    className={index === 0 ? "cursor-pointer border-2 border-white" : "-ml-4 cursor-pointer border-2 border-white"}
                  />
                ))}
              </div>
              <div className="mb-6 sm:mb-0 sm:ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((el, key) => (
                    <svg
                      key={key}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-yellow-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <Typography color="blue-gray" className="ml-2 font-semibold">
                    5.0
                  </Typography>
                </div>
                <Typography color="gray" className="mt-1 ml-0.5 font-normal">
                  from 200+ reviews
                </Typography>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1604328727766-a151d1045ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="team work"
            className="lg:0 mb-8 h-96 w-full lg:w-1/2 rounded-xl object-cover lg:h-[40rem]"
          />
        </div>
      </header>
    </>
  );
}

export default HeroSectionOne;