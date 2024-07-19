import { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import { CommandLineIcon as CommandLineIconOutline } from "@heroicons/react/24/outline";
import { SignInFormDialogComponent } from "./SignInFormDialogComponent";
import { FaDiagramProject } from "react-icons/fa6";

const NAV_MENU = [
  {
    name: "Home",
    icon: RectangleStackIcon,
    href: "/",
  },
  {
    name: "Contacts",
    icon: UserCircleIcon,
    href: "/#contacts",
  },
  {
    name: "Blog",
    icon: CommandLineIcon,
    href: "/blogs",
  },
  {
    name: "Apps",
    icon: FaDiagramProject,
    href: "/#",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
}

function NavItem({ children, href, target }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={target ?? "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 dark:text-gray-300"
      >
        {children}
      </Typography>
    </li>
  );
}

function MenuNav() {
  return (
    <>
      {NAV_MENU.map(({ name, icon: Icon, href }) => (
        <NavItem key={name} href={href}>
          <Icon className="h-5 w-5" />
          {name}
        </NavItem>
      ))}
    </>
  );
}

function ActionButtons({ handleOpenSignIn }: { handleOpenSignIn: () => void }) {
  return (
    <>
      <Button
        variant="text"
        className="dark:text-gray-200"
        onClick={handleOpenSignIn}
      >
        Sign In
      </Button>
      <a href="#">
        <Button color="gray" className="bg-primaryBlue">
          Sign Up
        </Button>
      </a>
    </>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const handleOpenSignIn = () => setOpenSignIn((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, [setOpen]);

  return (
    <>
      <MTNavbar
        shadow={false}
        fullWidth
        className="border-0 sticky top-0 z-50 dark:bg-primaryBlack-600"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="text-lg font-bold dark:text-primaryBlue flex gap-2"
          >
            <CommandLineIconOutline className="h-5 w-5 mt-1" /> FF.
          </Typography>
          <ul className="ml-[8rem] hidden items-center gap-8 lg:flex">
            <MenuNav />
          </ul>
          <div className="hidden items-center gap-2 lg:flex">
            <ActionButtons handleOpenSignIn={handleOpenSignIn} />
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden dark:bg-gray-600 py-0"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>

        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <MenuNav />
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-2">
              <ActionButtons handleOpenSignIn={handleOpenSignIn} />
            </div>
          </div>
        </Collapse>
      </MTNavbar>

      {openSignIn && (
        <SignInFormDialogComponent
          open={openSignIn}
          handleOpen={handleOpenSignIn}
        />
      )}
    </>
  );
}

export default Navbar;
