import { Typography } from "@material-tailwind/react";

export function Footer() {
  const links = [
    {
      title: "Product",
      items: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resource",
      items: [
        "Blog",
        "Newsletter",
        "Events",
        "Help center",
        "Tutorials",
        "Support",
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-8 pt-20 mt-10">
      <div className="container mx-auto">
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
          <Typography variant="h4" className="mb-6">
            Material Tailwind
          </Typography>
          <div className="grid justify-between grid-cols-3 gap-4">
            {links.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="font-normal py-1.5 hover:text-blue-gray-900 transition-colors"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-center py-6 mt-16 border-t border-blue-gray-50 md:justify-between gap-y-4 gap-x-8">
          <div className="text-center md:text-start">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Move faster with Material Tailwind
            </Typography>
            <Typography color="gray" className="font-normal">
              Save countless hours of design and ship great looking designs
              faster.
            </Typography>
          </div>
          <Typography color="gray" className="font-normal text-center">
            &copy; {currentYear} Material Tailwind, All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
