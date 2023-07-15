type TabNavProps = {
  tabs: string[];
  selectedTab: string;
  setTab: (tab: string) => void;
};

export const TabNav = function ({ tabs, selectedTab, setTab }: TabNavProps) {
  return (
    <ul className="w-full md:w-[72%] lg:w-[40%] md:mx-auto px-10 list-none grid grid-cols-1 md:grid-cols-3 items-center">
      {tabs.map((tab: string) => {
        const active = tab === selectedTab ? true : false;

        return (
          <li
            className={`border-y-[1px] md:border-y-[0] border-b-0 md:border-b [&:nth-child(3)]:border-b-[1px] text-center font-normal hover:cursor-pointer`}
            onClick={() => setTab(tab)}
            key={tab}
          >
            <span
              className={`text-grayish-blue hover:text-soft-red py-4 inline-block md:block border-b-4 ${
                active ? "border-b-soft-red" : "border-b-white"
              }`}
            >
              {tab}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
