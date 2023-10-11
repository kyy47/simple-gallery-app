import React, { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};
function Header({ children }: HeaderProps) {
  return (
    <header className="py-3 justify-center xs:justify-end  relative w-full flex justify-end xs:pr-[20px] md:justify-center md:pr-0 font-cormorant">
      {children}
    </header>
  );
}

export default Header;
