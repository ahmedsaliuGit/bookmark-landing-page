type AccordionProps = {
  title: string;
  body: string;
  selected: string;
  setAccordion: (accordion: string) => void;
};

export const Accordion = function ({
  title,
  body,
  selected,
  setAccordion,
}: AccordionProps) {
  const handleClick = (accordion: string) => {
    if (accordion === selected) {
      setAccordion("");
    } else {
      setAccordion(title);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <button
        className="group/item flex justify-between py-4 items-center border-b-[1px]"
        onClick={() => handleClick(title)}
      >
        <span className="font-normal group-hover/item:text-soft-red">
          {title}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          className={`${selected === title ? "rotate-180" : ""}`}
        >
          <path
            fill="none"
            stroke={`${selected === title ? "hsl(0, 94%, 66%)" : "#5267DF"}`}
            strokeWidth="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </button>
      {selected === title && (
        <p className="my-5 text-grayish-blue text-left">{body}</p>
      )}
    </div>
  );
};
