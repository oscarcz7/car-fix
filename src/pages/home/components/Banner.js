export function BannerComponent(props) {
  return (
    <div className="relative mx-auto ">
      <img
        src="banner2.jpg"
        alt="credit cards"
        className="object-cover w-full h-56 "
      />
      <div className="absolute text-white top-2 left-2 ">
        <p className="text-lg lg:text-4xl">
          <span className="font-bold">¿Porque confiar</span> en Nosotros?
        </p>
        <p className="text-lg lg:text-2xl">
          Tempor feugiat justo vehicula magna ut enim egestas at.
        </p>
      </div>
    </div>
  );
}

export default BannerComponent;
