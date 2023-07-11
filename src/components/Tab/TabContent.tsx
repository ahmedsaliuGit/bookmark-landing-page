import { ReactNode } from "react";

type TabContentProps = {
  selectedTab: Boolean;
  children: ReactNode;
};

export const TabContent = function ({
  selectedTab,
  children,
}: TabContentProps) {
  if (selectedTab) {
    return (
      <div className="w-full mt-12 relative">
        <div className="h-[230px] w-[330px] bg-soft-blue absolute left-0 top-9 z-[-1] rounded-e-full"></div>
        {children}
      </div>
    );
  }
  return null;
};
