import banner from "../../assets/banerJC.png";

const Hero = () => {
  return (
    <section className="py-16 bg-gray-900 text-center">
      <img
        src={banner}
        alt="banner"
        className="w-full max-w-6xl mx-auto rounded-xl"
      />

      <div className="text-white text-center mt-6 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">Cristian Peña</h1>

        <p className="mt-4 text-sm md:text-lg">
          Web Developer specialized in modern applications
        </p>
      </div>
    </section>
  );
};

export default Hero;
