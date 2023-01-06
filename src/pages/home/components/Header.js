import { Button, Typography } from "@material-tailwind/react";
export function Header() {
  return (
    <header className="w-screen px-4 pt-24 bg-white">
      <div className="container flex flex-col-reverse items-center mx-auto lg:flex-row">
        <div className="mr-0 lg:mr-16 xl:mr-24">
          <Typography
            variant="h1"
            color="blue-gray"
            className=" mb-4 lg:mb-8  text-4xl !leading-tight md:text-5xl md:text-center"
          >
            Tu Auto en las mejores manos
          </Typography>
          <Typography
            variant="lead"
            className="mb-16 md:mb-8 md:pr-16 xl:pr-28 text-blue-gray-700 md:text-center"
          >
            Tempor feugiat justo vehicula magna ut enim egestas at.
          </Typography>
          <div className="flex flex-col w-full gap-2 mb-6 md:justify-center md:mx-auto md:mb-2 md:flex-row">
            <Button className="w-full px-4 md:w-[12rem]">
              Solicitar Servicios
            </Button>
            <Button variant="outlined" className="w-full px-4 md:w-[12rem]">
              Cotizar
            </Button>
          </div>
        </div>
        <img
          src="banner1.jpg"
          alt="team work"
          className="lg:0 mb-8 h-96 w-full lg:w-1/2 rounded-xl object-cover lg:h-[40rem]"
        />
      </div>
    </header>
  );
}
export default Header;
