import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import LogoIcon from "../assets/LogoIcon";

const TopNavbar = () => {
  return (
    <Navbar shouldHideOnScroll className="fixed z-10">
      <NavbarBrand>
        <LogoIcon />
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="https://newsapi.org/"
            variant="flat"
          >
            Resource
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavbar;
