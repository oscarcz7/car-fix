import { Typography, Button } from "@material-tailwind/react";
import TestimonialCard from "../../../components/TestimonialCard";

function Testimonial({ img, feedback, client }) {
  return <TestimonialCard img={img} feedback={feedback} client={client} />;
}

export function TestimonialSection() {
  const testimonials = [
    {
      feedback:
        "The time is now for it to be okay to be great. People in this world shun people for being great.",
      client: "Renee Wells",
      img: "https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    },
    {
      feedback:
        "The time is now for it to be okay to be great. People in this world shun people for being great.",
      client: "Renee Wells",
      img: "https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    },
    {
      feedback:
        "The time is now for it to be okay to be great. People in this world shun people for being great.",
      client: "Renee Wells",
      img: "https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    },
  ];

  return (
    <section className="px-8 py-8 lg:py-20">
      <div className="mx-auto text-center">
        <Typography className="mb-8 text-2xl leading-tight text-blue-900 lg:text-5xl">
          Lo que piensan nuestros{" "}
          <span className="font-extrabold">clientes</span>
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

      <div className="container grid grid-cols-1 gap-2 mx-auto lg:gap-8 md:grid-cols-3">
        {testimonials.map((props, key) => (
          <Testimonial key={key} {...props} />
        ))}
      </div>
      <div className="px-12 pb-20 text-center">
        <Button
          variant="text"
          className="inline-flex items-center pl-4 underline"
        >
          Ver más
        </Button>
      </div>
    </section>
  );
}

export default TestimonialSection;
