import { useState } from "react";
import { SideNavContext } from "./SideNavContext";

export const SideNavProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideNav = () => setIsOpen(true);
  const closeSideNav = () => setIsOpen(false);
  const toggleSideNav = () => setIsOpen((prev) => !prev);

  return (
    <SideNavContext.Provider
      value={{
        isOpen,
        openSideNav,
        closeSideNav,
        toggleSideNav,
      }}
    >
      {children}
    </SideNavContext.Provider>
  );
};
