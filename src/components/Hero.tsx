import IllusHero from "../assets/illustration-hero.svg";

export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="">
        <img src={IllusHero} alt="Hero Illustration" />
      </div>
      <div className="">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="w-full py-4">
          <a href="#feature">Get it on Chrome</a>
          <a href="#feature">Get it on Firefox</a>
        </div>
      </div>
    </div>
  );
}
