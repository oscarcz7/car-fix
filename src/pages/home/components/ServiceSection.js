import { Typography } from "@material-tailwind/react";
import ServiceCard from "../../../components/ServiceCard";

function BlogPostCard({ img, title, desc }) {
  return <ServiceCard title={title} description={desc} source={img} />;
}

export function ServicesSection() {
  const posts = [
    {
      img: "img1.png",
      title: "Cambio de Aceite",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
    {
      img: "img2.png",
      title: "Cambio de Bateria",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
    {
      img: "img3.png",
      title: "Cambio de Neumáticos",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
    {
      img: "img4.png",
      title: "Revisión Vehicular",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
    {
      img: "img5.png",
      title: "Asistencia en el Camino",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
  ];

  return (
    <section className="px-8 py-8 lg:py-20">
      <div className="mx-auto text-center">
        <Typography className="mb-8 text-2xl font-extrabold leading-tight text-blue-900 lg:text-5xl">
          Servicios
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="w-full px-8 mx-auto mb-12 text-lg lg:text-2xl lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Typography>
      </div>

      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ img, title, desc }, key) => (
          <BlogPostCard img={img} title={title} key={key} desc={desc} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
