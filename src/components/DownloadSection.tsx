import Section from "./Section";

import LogoChrome from "../assets/logo-chrome.svg";
import LogoFirefox from "../assets/logo-firefox.svg";
import LogoOpera from "../assets/logo-opera.svg";
import { ExtensionCard } from "./ExtensionCard";

export default function DownloadSection() {
  return (
    <Section>
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div>
        <ExtensionCard
          img={LogoChrome}
          title="Add to Chrome"
          para="Minimum version 62"
          altText="chrome extension"
        />
        <ExtensionCard
          img={LogoFirefox}
          title="Add to Firefox"
          para="Minimum version 55"
          altText="firefox extension"
        />
        <ExtensionCard
          img={LogoOpera}
          title="Add to Opera"
          para="Minimum version 46"
          altText="opera extension"
        />
      </div>
    </Section>
  );
}
