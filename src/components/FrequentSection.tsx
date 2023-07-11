import Section from "./Section";

export default function FrequentSection() {
  return (
    <Section>
      <div className="w-full px-10 text-center mt-28">
        <h2 className="font-medium mb-4">Frequently Asked Questions</h2>
        <p className="text-grayish-blue mb-4">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <div>Accordion Area</div>
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
