import { useState } from "react";
import { Accordion } from "./Accordion";
import Section from "./Section";

export default function FrequentSection() {
  const [active, setActive] = useState("");

  const onClick = (accordion: string) => {
    setActive(accordion);
  };

  return (
    <Section>
      <div className="w-full px-10 text-center mt-28">
        <h2 className="font-medium mb-4">Frequently Asked Questions</h2>
        <p className="text-grayish-blue mb-4">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <div className="w-full my-8">
          <Accordion
            title="What is Bookmark?"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
            selected={active}
            setAccordion={onClick}
          />
          <Accordion
            title="How can I request a new browser?"
            body="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
            selected={active}
            setAccordion={onClick}
          />
          <Accordion
            title="Is there a mobile app?"
            body="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum."
            selected={active}
            setAccordion={onClick}
          />
          <Accordion
            title="What about other Chromium browsers?"
            body="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit."
            selected={active}
            setAccordion={onClick}
          />
        </div>
        <a
          href="#"
          className="bg-soft-blue p-4 font-normal text-white rounded-lg inline-block my-4"
        >
          More Info
        </a>
      </div>
    </Section>
  );
}
