type TabNavProps = {
  tabs: string[];
  selectedTab: string;
  setTab: (tab: string) => void;
};

export const TabNav = function ({ tabs, selectedTab, setTab }: TabNavProps) {
  return (
    <ul className="w-full px-10 list-none grid grid-cols-1 items-center">
      {tabs.map((tab: string) => {
        const active = tab === selectedTab ? true : false;

        return (
          <li
            className={`border-y-[1px] border-b-0 [&:nth-child(3)]:border-b-[1px] text-center font-normal`}
            onClick={() => setTab(tab)}
            key={tab}
          >
            <span
              className={`text-grayish-blue py-4 inline-block ${
                active ? "border-b-4 border-b-soft-red" : ""
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
