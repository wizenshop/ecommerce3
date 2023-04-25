"use client";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { BottomNavigation } from "./BottomNavigation";

import { useMediaQuery } from "react-responsive";


export function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isMobile ? (
        <>
          <MobileMenu />
          <BottomNavigation />
        </>
      ) : (
        <DesktopMenu />
      )}
    </>
  );
}
