import { Button, Input, Typography } from "@material-tailwind/react";

export function Footer() {
  const links = [
    {
      title: "Inicio",
      items: [
        "Servicios",
        "Nuestra Formula",
        "Testimonios",
        "Respaldos",
        "Redes Sociales",
      ],
    },
    {
      title: "Servicios",
      items: [
        "Servicios",
        "Nuestra Formula",
        "Testimonios",
        "Respaldos",
        "Redes Sociales",
      ],
    },
    {
      title: "Contactos",
      items: ["Whatsapp", "Direccion", "Telefonos", "Email"],
    },
    {
      title: "FAQs",
      items: ["Tips", "Consejos"],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="px-8 pt-20 mt-10 !text-white"
      style={{ backgroundColor: "#273043" }}
    >
      <div className="container mx-auto">
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
          <div className="w-full sm:w-[16rem] sm:min-w-[16rem] lg:w-[24rem] lg:min-w-[24rem] ">
            <Typography variant="h6" className="mb-3">
              Suscríbete
            </Typography>
            <Typography className="mb-2 text-lg font-light">
              Los mejores tips para tu auto
            </Typography>
            <div className="flex flex-col gap-3">
              <Input label="Ingresa tu correo" />
              <Button variant="outlined" size="sm" color="white">
                Suscribirme
              </Button>
            </div>
          </div>

          <div className="grid justify-between grid-cols-2 gap-4 lg:grid-cols-4">
            {links.map(({ title, items }) => (
              <ul key={title}>
                <Typography className="mb-3 text-lg font-medium lg:text-2xl opacity-40">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography as="a" href="#" className="font-normal py-1.5">
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="py-6 mt-16 border-t border-blue-gray-50 md:justify-between gap-y-4 gap-x-8">
          <Typography className="font-normal text-center">
            &copy; {currentYear} CARFIX
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
