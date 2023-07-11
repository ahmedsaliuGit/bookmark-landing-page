import IllusHero from "../assets/illustration-hero.svg";

export default function Hero() {
  return (
    <div className="w-full relative mt-4">
      <div className="h-[230px] w-[330px] bg-soft-blue absolute right-0 top-16 z-[-1] rounded-s-full"></div>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="">
            <img src={IllusHero} alt="Hero Illustration" />
          </div>
          <div className="text-center mt-12">
            <h1 className="font-medium xs:px-10">A Simple Bookmark Manager</h1>
            <p className="px-10 mt-4 text-grayish-blue">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="w-full mt-8">
              <a
                href="#feature"
                className="p-4 bg-soft-blue text-white rounded-lg font-medium inline-block shadow-lg"
              >
                Get it on Chrome
              </a>
              <a
                href="#feature"
                className="p-4 bg-gray-50 rounded-lg font-medium ml-4 inline-block shadow-lg"
              >
                Get it on Firefox
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
