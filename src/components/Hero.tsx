import IllusHero from "../assets/illustration-hero.svg";

export default function Hero() {
  return (
    <div className="w-full relative mt-4">
      <div className="h-[230px] w-[330px] lg:h-[300px] lg:w-[39%] bg-soft-blue absolute right-0 top-16 lg:top-36 z-[-1] rounded-s-full"></div>
      <div className="w-full">
        <div className="container lg:max-w-[1280px] mx-auto md:flex md:justify-between md:items-center">
          <div className="md:order-2 md:w-3/6">
            <img src={IllusHero} alt="Hero Illustration" />
          </div>
          <div className="text-center mt-12 md:order-1 md:mt-4 lg:mt-0 md:w-3/6 md:text-left">
            <h1 className="font-medium xs:px-10 lg:pl-0 lg:w-8/12">
              A Simple Bookmark Manager
            </h1>
            <p className="px-10 lg:px-0 mt-4 text-grayish-blue lg:w-8/12">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="w-full mt-8 md:pl-10 lg:pl-0">
              <a
                href="#feature"
                className="p-4 bg-soft-blue hover:bg-white border-2 border-soft-blue text-white hover:text-soft-blue rounded-lg font-medium inline-block shadow-lg"
              >
                Get it on Chrome
              </a>
              <a
                href="#feature"
                className="p-4 bg-gray-50 hover:bg-white border-2 border-gray-50 hover:border-grayish-blue hover:text-grayish-blue rounded-lg font-medium ml-4 inline-block shadow-lg"
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
