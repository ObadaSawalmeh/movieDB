import { createContext, useContext, useState } from "react";

const SideNavContext = createContext();

export const useSideNav = () => {
  const context = useContext(SideNavContext);
  if (!context) {
    throw new Error("useSideNav must be used within a SideNavProvider");
  }
  return context;
};

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
