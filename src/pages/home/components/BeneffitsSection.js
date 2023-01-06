import BenefitCard from "../../../components/BeneffitCard";
import BannerComponent from "./Banner";

function BlogPostCard({ img, title, desc }) {
  return <BenefitCard title={title} description={desc} src={img} />;
}

export function BenefitsSection() {
  const posts = [
    {
      img: "img1.png",
      title: "Beneficio 1",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
    {
      img: "img2.png",
      title: "Beneficio 2",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
    {
      img: "img3.png",
      title: "Beneficio 3",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
    {
      img: "img1.png",
      title: "Beneficio 4",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
    {
      img: "img2.png",
      title: "Beneficio 5",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
    {
      img: "img3.png",
      title: "Beneficio 6",
      desc: "Tempor feugiat justo vehicula magna ut enim egestas at.",
    },
  ];

  return (
    <section className="mb-4 bg-blue-50"> 
      <BannerComponent/>
      <div className="container grid grid-cols-1 gap-8 py-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ img, title, desc }, key) => (
          <BlogPostCard key={key} img={img} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}

export default BenefitsSection;
