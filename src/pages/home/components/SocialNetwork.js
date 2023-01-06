import { Typography } from "@material-tailwind/react";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function SocialNetworkComponent() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto text-center">
          <Typography className="mb-8 text-2xl font-extrabold leading-tight text-blue-900 lg:text-5xl">
            Síguenos
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="w-full px-8 mx-auto mb-12 text-lg lg:text-2xl lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
          >
            <a href="https://www.instagram.com">@Carfix_ec</a>
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-3 lg:grid-cols-4 ">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full overflow-hidden bg-gray-200 shadow-xl rounded-xl aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
