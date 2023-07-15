import Section from "./Section";

import LogoChrome from "../assets/logo-chrome.svg";
import LogoFirefox from "../assets/logo-firefox.svg";
import LogoOpera from "../assets/logo-opera.svg";
import { ExtensionCard } from "./ExtensionCard";

export default function DownloadSection() {
  return (
    <Section>
      <div className="w-full md:w-[72%] lg:w-[34%] md:mx-auto px-10 text-center mt-28 lg:mt-40">
        <h2 className="font-medium mb-4">Download the extension</h2>
        <p className="text-grayish-blue">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[1fr_70px_70px] lg:text-center gap-y-5 lg:gap-5 lg:w-[60%] lg:mx-auto">
        <ExtensionCard
          img={LogoChrome}
          title="Add to Chrome"
          para="Minimum version 62"
          altText="chrome extension"
          mt=""
        />
        <ExtensionCard
          img={LogoFirefox}
          title="Add to Firefox"
          para="Minimum version 55"
          altText="firefox extension"
          mt="row-span-2 self-center"
        />
        <ExtensionCard
          img={LogoOpera}
          title="Add to Opera"
          para="Minimum version 46"
          altText="opera extension"
          mt="row-span-3 self-center"
        />
      </div>
    </Section>
  );
}
