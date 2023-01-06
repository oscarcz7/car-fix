import { Typography } from "@material-tailwind/react";

export function Sponsors() {
  const logos = [
    { logo: "logos/logo1.png" },
    { logo: "logos/logo2.png" },
    { logo: "logos/logo3.png" },
    { logo: "logos/logo4.png" },
    { logo: "logos/logo5.png" },
    { logo: "logos/logo6.png" },
  ];

  return (
    <section className="px-8 py-8 lg:py-20 bg-blue-50">
      <div className="container items-center justify-center mx-auto text-center">
        <div className="mx-auto text-center text-blue-900">
          <Typography className="mb-8 text-2xl leading-tight lg:text-5xl">
            Nuestros <span className="font-extrabold">mejores respaldos</span>
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="w-full px-8 mx-auto mb-12 text-lg lg:text-2xl lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Typography>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-y-8 md:grid-cols-3">
          {logos.map(({ logo }, key) => (
            <img key={key} src={logo} alt="logo" className="w-20 lg:w-40" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
