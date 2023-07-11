import { useState } from "react";
import Section from "./Section";
import { TabContent } from "./Tab/TabContent";
import { TabNav } from "./Tab/TabNav";

import TabImg1 from "../assets/illustration-features-tab-1.svg";
import TabImg2 from "../assets/illustration-features-tab-2.svg";
import TabImg3 from "../assets/illustration-features-tab-3.svg";

export default function FeatureSection() {
  const [selectedTab, setSelectedTab] = useState("Simple Bookmarking");

  const onClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <Section>
      <div className="w-full px-10 text-center mt-28 mb-8">
        <h2 className="font-medium mb-4">Features</h2>
        <p className="text-grayish-blue">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="w-full">
        <TabNav
          tabs={["Simple Bookmarking", "Speedy Searching", "Easy Sharing"]}
          selectedTab={selectedTab}
          setTab={onClick}
        />
        <TabContent selectedTab={selectedTab === "Simple Bookmarking"}>
          <div className="w-full px-10">
            <div>
              <img src={TabImg1} alt="Illustration feature tab one" />
            </div>
            <div className="text-center mt-24">
              <h2 className="font-medium">Bookmark in one click</h2>
              <p className="text-grayish-blue">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
            </div>
          </div>
        </TabContent>
        <TabContent selectedTab={selectedTab === "Speedy Searching"}>
          <div className="w-full px-10">
            <div className="max-w-full">
              <img src={TabImg2} alt="Illustration feature tab two" />
            </div>
            <div className="text-center mt-24">
              <h2 className="font-medium">Intelligent search</h2>
              <p className="text-grayish-blue">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
            </div>
          </div>
        </TabContent>
        <TabContent selectedTab={selectedTab === "Easy Sharing"}>
          <div className="w-full px-10">
            <div className="max-w-full">
              <img src={TabImg3} alt="Illustration feature tab three" />
            </div>
            <div className="text-center mt-24">
              <h2 className="font-medium">Share your bookmarks</h2>
              <p className="text-grayish-blue">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
            </div>
          </div>
        </TabContent>
      </div>
    </Section>
  );
}
